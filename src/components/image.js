import { graphql, useStaticQuery } from "gatsby"

const BackgroundSection = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "zeh.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920, maxHeight: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid
  return imageData
}

export default BackgroundSection
