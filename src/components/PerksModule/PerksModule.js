import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles className="section section__padding">
      
    <StaticImage
        className="perks__image--bg"
        src="../../../static/abstract-building.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
  
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          title="Happy Clients "
        >
          <StaticImage
            src=" "
            alt="Happy Clients"
            
            
          />
        </Perk>
    
        <Perk
          title=" "
        >
          <StaticImage
            src="../../../static/logos/DHS.png"
            alt="Department of Homeland Security Logo"
            
            
          />
        </Perk>
        
        <Perk
          title=" "
         
        >
          <StaticImage
            src="../../../static/logos/DOI.png"
            alt="Department of Interior Logo"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
    
        <Perk
          title=" "
         
        >
          <StaticImage
            src="../../../static/logos/DOC.png"
            alt="Department of Commerce Logo"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
    
      <Perk
          title=" "
         
        >
          <StaticImage
            src="../../../static/logos/TREASURY.png"
            alt="Department of Treasury Logo"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
    
      <Perk
          title=" "
         
        >
          <StaticImage
            src="../../../static/logos/USAID.png"
            alt="USAID Logo"
            layout="constrained"
            placeholder="tracedSVG"
          />
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
