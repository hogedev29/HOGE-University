const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const template = path.resolve("src/templates/tutorial-template.js");

  return graphql(`
    {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    // create page for each mdx file
    result.data.allMdx.nodes.forEach((page) => {
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
  });
};
