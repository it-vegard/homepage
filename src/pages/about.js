import React from 'react'
import Helmet from './index'
import Hero from '../components/hero'
// import get from 'lodash/get'

class AboutPage extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const [author] = get(this, 'props.data.allContentfulPerson.edges')

    const aboutMeData = {
      name: 'Vegard H.',
      shortBio: {
        shortBio: 'Developer'
      },
      title: 'Title'
    }

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={'About me'} />
        <Hero data={aboutMeData} />
      </div>
    )
  }
}

export default AboutPage

// export const pageQuery = graphql`
//   query AboutQuery {
//     allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
//       edges {
//         node {
//           name
//           shortBio {
//             shortBio
//           }
//           title
//           heroImage: image {
//             sizes(
//               maxWidth: 1180
//               maxHeight: 480
//               resizingBehavior: PAD
//               background: "rgb:000000"
//             ) {
//               ...GatsbyContentfulSizes_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `