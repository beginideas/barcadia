import styled from "styled-components"

export const PerksModuleStyles = styled.section`
  background-color: #000;
  position: relative;

  .perks__image--bg,
  .perks__image--overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .perks__image--bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
    .banner__content2 {
    top: 25px;
    position: absolute;
    z-index: 2;
    min-height: 33vh;
    width: 100%;
    max-width: 700px;
    @media (min-width: 768px) {
      width: 66vw;
     
    top: 25px;
    margin-top: 0px;
    border-top-width: 50px;
    }
    h1,
    h2 {
      text-shadow: var(--textShadow);
    }
    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
    
    }
    h2 {
      font-size: var(--h5);
      font-weight: 400;
    }
    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .perks__image--overlay {
    background-color: rgba(0, 0, 0, 0.65);
  }

  .perks__divider {
    font-size: 25px;
    color: var(--primary);

    @media (min-width: 1024px) {
      font-size: 35px;
    }
  }

  > .container {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--gap);
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    @media (min-width: 1024px) {
      gap: calc(var(--gap) * 2);
    }

    @media (min-width: 1200px) {
      gap: calc(var(--gap) * 4);
    }
  }
`

export const PerkStyles = styled.aside`
  max-width: 200px;
  text-align: center;

  @media (min-width: 414px) {
    max-width: 200px;
  }

  @media (min-width: 768px) {
    flex: 1 1 50%;
  }

  @media (min-width: 1024px) {
    max-width: 200px;
  }

  h3 {
    display: inline-block;
    border-bottom: 2px solid rgba(255, 255, 255, 0.15);
  }

  p {
    margin-bottom: 0;
  }
  .gatsby-image-wrapper {
    width: 125px;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto calc(var(--gap) / 2) auto;

    @media (min-width: 375px) {
      width: 125px;
    }

    @media (min-width: 1024px) {
      width: 125px;
      height:125px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain !important;
      object-position: center;
    }
  }
`
