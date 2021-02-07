import React from "react"
import { Link } from "gatsby"

//Importing Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"
import Section from "../components/section"

//Importing Image Assets
import sketch from "../images/logo-sketch.png"
import figma from "../images/logo-figma.png"
import invision from "../images/logo-invision.png"
import react from "../images/logo-react.png"
import framer from "../images/logo-framer.png"
import xcode from "../images/logo-xcode.png"
import swift from "../images/logo-swift.png"
import wallpaper from "../images/wallpaper.png"
import wallpaper2 from "../images/wallpaper2.png"
import wallpaper3 from "../images/wallpaper3.png"
import wallpaper4 from "../images/wallpaper4.png"
import wallpaper5 from "../images/wallpaper5.png"
import wallpaper6 from "../images/wallpaper6.png"
import Wave from "../components/wave"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="Hero">
      <div className="HeroGroup">
        <h1>Learn to <br /> design and code React apps</h1>
        <p>Complete courses about the best tools and design systems.
           Prototype and build apps with React and Swift.</p>
        <Link to="/page-2/">Watch the Video</Link> <br />
        <div className="Logos">
          <img src={sketch} width="50" />
          <img src={figma} width="50" />
          <img src={invision} width="50" />
          <img src={framer} width="50" />
          <img src={react} width="50" />
          <img src={xcode} width="50" />
          <img src={swift} width="50" />
        </div>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <h2>11 courses,more coming</h2>
      <div className="CardGroup">
        <Card
          title="Design System with Figma"
          text="10 sections"
          image={wallpaper3}
        />
        <Card
          title="React for Designers"
          text="12 sections"
          image={wallpaper2}
        />
        <Card
          title="Video Editing with Screenflow"
          text="5 sections"
          image={wallpaper3}
        />
        <Card
          title="Build an ARKit 2 app"
          text="12 sections"
          image={wallpaper}
        />
        <Card
          title="Motion Design in After Effects"
          text="12 sections"
          image={wallpaper4}
        />
        <Card
          title="Create a Sketch plugin"
          text="12 sections"
          image={wallpaper5}
        />
        <Card
          title="Learn Swift"
          text="12 sections"
          image={wallpaper4}
        />
        <Card
          title="Swift Advanced"
          text="12 sections"
          image={wallpaper6}
        />
        <Card
          title="Learn iOS  Design"
          text="12 sections"
          image={wallpaper5}
        />
      </div>
    </div>

    <Section
      image={wallpaper2}
      logo={react}
      title="React for designers"
      text="Learn how to build a modern site using React and the most efficient libraries to get your site/product online. Get familiar with Grid CSS, animations, interactions, dynamic data with 
      Contentful and deploying your site with Netlify."
    />

  </Layout>
)

export default IndexPage



