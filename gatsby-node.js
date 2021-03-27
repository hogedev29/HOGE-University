const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  const parent = getNode(node.parent);

  if (
    node.internal.type === `Mdx` &&
    parent.internal.owner === "gatsby-source-filesystem"
  ) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }

  if (
    node.internal.type === "OfficialWebsitesJson" ||
    node.internal.type === "CommunityWebsitesJson"
  ) {
    // extends the existing gatsby node with a new field, later accessible via the fields graphql node.
    createNodeField({
      node, // the current node
      name: "linkImage", // defines a name for the new element being added.
      value: `../images/${node.image.src}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images
    });
  }
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;
  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/posts/)) {
    page.matchPath = "/posts/*";
    // Update the page.
    createPage(page);
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  //////////////////////////////////////////////////////////////////////////////
  //                                    MDX PAGES
  //////////////////////////////////////////////////////////////////////////////

  const template = path.resolve("src/templates/faq-template.js");
  const { data } = await graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: {
          parent: { internal: { owner: { eq: "gatsby-source-filesystem" } } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            subtitle
            date
            slug
          }
        }
      }
    }
  `);

  if (data.errors) {
    throw data.errors;
  }
  // create page for each mdx file
  data.allMdx.nodes.forEach((page) => {
    createPage({
      path: page.frontmatter.slug,
      component: template,
      context: {
        subtitle: page.frontmatter.subtitle,
        title: page.frontmatter.title,
        slug: page.frontmatter.slug,
      },
    });
  });

  //////////////////////////////////////////////////////////////////////////////
  //                                    GRAPH CMS PAGES
  //////////////////////////////////////////////////////////////////////////////
  const limit = 2;
  const dataCms = await graphql(
    `
      {
        allGraphCmsPost(limit: ${limit}, sort: { fields: date, order: ASC }) {
          edges {
            nextPost: next {
              slug
              title
            }
            post: node {
              id
              remoteId
              author {
                id
                name
                title
              }
              content {
                html
              }
              createdAt
              excerpt
              seo {
                description
                image {
                  url
                }
                keywords
                title
              }
              slug
              title
            }
            previousPost: previous {
              slug
              title
            }
          }
        }
      }
    `
  );

  if (dataCms.errors) throw dataCms.errors;

  dataCms.data.allGraphCmsPost.edges.forEach(
    ({ nextPost, post, previousPost }) => {
      createPage({
        component: path.resolve("src/templates/post-template.js"),
        context: {
          id: post.id,
          slug: post.slug,
          post,
          previousPost,
          nextPost,
        },
        path: `/posts/${post.slug}`,
      });
    }
  );

  await createCoursePages(createPage, graphql);
};

//////////////////////////////////////////////////////////////////////////////
//                            GRAPH COURSE PAGES
//////////////////////////////////////////////////////////////////////////////
async function createCoursePages(createPage, graphql) {
  const dataCms = await graphql(
    `
      {
        allGraphCmsCourse {
          edges {
            course: node {
              title
              slug
              modules {
                title
                lessons {
                  id
                  locale
                  title
                  slug
                  content {
                    html
                  }
                }
              }
            }
          }
        }
      }
    `
  );

  if (dataCms.errors) throw dataCms.errors;

  dataCms.data.allGraphCmsCourse.edges.forEach(({ course }) => {
    // Build courses page
    createPage({
      component: path.resolve("src/templates/course-template.js"),
      context: {
        course,
      },
      path: `/school/${course.slug}`,
    });

    // Build lessons page
    for (const module of course.modules) {
      for (const lesson of module.lessons) {
        createPage({
          component: path.resolve("src/templates/course-template.js"),
          context: {
            lesson,
            course,
          },
          path: `/school/${course.slug}/${lesson.slug}`,
        });
      }
    }
  });
}
