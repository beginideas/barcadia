import * as React from "react"
import { Link } from "gatsby"
import { menuItems } from "../../constants/links"
import { FooterStyles, FooterMenuStyles, CopyrightStyles } from "./FooterStyles"
import useAllProduct from "../../hooks/use-all-product"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import {
  FaFacebookSquare as Facebook,
  FaTwitterSquare as Twitter,
  FaInstagram as Instagram,
  FaLinkedin as Linkedin,
} from "react-icons/fa"

const Footer = () => {
  const allProduct = useAllProduct()
  const siteMeta = UseSiteMetadata()
  return (
    <FooterStyles style={{ marginBottom: 0 }} className="section">
      <div className="container container__tight">
        <FooterMenuStyles className="footer__menu">
          <h5>Links</h5>
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </FooterMenuStyles>
        {allProduct.length > 0 && (
          <FooterMenuStyles className="footer__menu products__menu">
            <h5>
              <Link to="/products">
                All Projects<span>.</span>
              </Link>
            </h5>
            <ul>
              {allProduct.map((item, index) => {
                const { gatsbyPath, title } = item

                return (
                  <li key={index}>
                    <Link to={gatsbyPath}>
                      {title}
                      <span>.</span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </FooterMenuStyles>
        )}

        {siteMeta.twitterUsername ? (
          <FooterMenuStyles className="footer__menu social__menu">
            <h5>
              Follow BeginIdeas<span>.</span>
            </h5>
            <ul>
              {siteMeta.twitterUsername && (
                <li>
                  <a
                    href={`https://www.twitter.com/${siteMeta.twitterUsername}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    <Twitter />
                  </a>
                </li>
              )}
            
            </ul>
            <ul>
              Let's Begin! </ul>
<ul>Phone: (571) 308-8795 </ul>
<ul>Email: info@beginideas.com </ul>
<ul>DUNS: 078325203 </ul>
<ul>Cage Code: 6M4L4 </ul>
<ul>NAICS: 54512, 54519, 611420 </ul>
<ul> &nbsp; </ul>
<ul>7643 Gate Parkway </ul>
<ul>Suite 104-612 </ul>
<ul>Jacksonville, FL 32256 </ul>
          </FooterMenuStyles>
        ) : (
          ""
        )}
      </div>
      <CopyrightStyles>
        <div className="container container__tight">
          <p>
            Designed & developed by BeginIdeas, LLC
            
            <span>.</span>
          </p>
        </div>
      </CopyrightStyles>
    </FooterStyles>
  )
}

export default Footer
