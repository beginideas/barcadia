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
          subTitle="We bring ideas to life through digital transformation and modernization to government agencies. Proudly based out of Jacksonville, FL."
      
    />
        <BasicTextModule
          title="Proudly serving our clients with digital transformation and enterprise modernization efforts."
          content="We are inventors, entrepeneurs and doers. We leverage industry standards, best practices, and secure technology to help our clients modernize and promote digital citizenship engagement. Successfully delivered over 125+ projects and counting!"
          link="https://www.gsaelibrary.gsa.gov/ElibMain/contractorInfo.do?contractNumber=47QTCA20D009K&contractorName=BEGINIDEAS+LLC&executeQuery=YES"
          linkText="GSA Schedule #47QTCA20D009K"
          link="/about"
          linkText=" Learn More"
        />
    
       <PerksModule>
          <Perk title="Happy Clients" content="The content" />
        </PerksModule>

        <Features
          title="Latest Projects"
          introduction="Leveraging Agile, industry certified subject matter experts (SMEs) and secure modern technology solutions for our clients."
        />

      </Layout>
    </>
  )
}

export default Index
