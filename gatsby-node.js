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

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve("src/templates/tutorial-template.js");

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

  // GRAPH CMS

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
            page: node {
              id
              author {
                id
                name
                title
              }
              content {
                markdown
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
    ({ nextPost, page, previousPost }) => {
      console.log("create page for page :>> ", page.title);
      createPage({
        component: path.resolve("src/templates/article-template.js"),
        context: {
          id: page.id,
          page,
          previousPost,
          nextPost,
        },
        path: `/posts/${page.slug}`,
      });
    }
  );
};
