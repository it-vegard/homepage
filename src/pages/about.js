import React from 'react'
import get from 'lodash/get'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import Helmet from 'react-helmet'
import HelmetWrapper from '../components/helmet-wrapper'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class AboutPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <div style={{ background: '#fff' }}>
        <HelmetWrapper
          title={siteTitle}
          metaDescription="Vegard Haugstvedt is an experienced web developer and accessibility advocate working for Webstep. He regularly speaks at conferences and meetups in Norway and abroad."
        />
        <Hero data={author.node} />
        <div className="wrapper">
          <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(author.node.longBio) }} />
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          longBio {
            content {
              nodeType
              content {
                marks {
                  type
                }
                nodeType
                value
              }
            }
          }
          title
          heroImage: image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`