/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Footer from "./footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
      allContentfulLink(sort:{fields :[createdAt],order :ASC}){
        edges{
          node{
            title
            url
          }
        }
      }
    }
  `)

  return (
    <>
      <div>
        <Header />
        <main>{children}</main>   
        <Footer  data ={data} >
          Backgrounds made in Cinema 4D, iOS app in Swift, site in
           React.<a href="mailto:kojopatrick84@gmail.com">Email us</a> to ask anything. 
          © 2020 - Terms of Service - Privacy Policy
        </Footer>      
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout


