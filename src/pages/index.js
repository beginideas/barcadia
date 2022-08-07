import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to BeginIdeas"
          subTitle="We bring ideas to life through digital transformation and modernization to government agencies. Proudly based out of National Landing and St. Johns, FL."

    />
        <BasicTextModule
          title="Proudly serving our clients with digital transformation and enterprise modernization efforts."
          content="Using modern CSS properties such as grid, this theme is optmised for speed and mobile devices. Giving users an excellent experience on any device. Future-proofing your product."
          link="/contractvehicles"
          linkText="View Contracting Vehicles"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Features
          title="Latest Projects"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="Latest Projects"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
