import styled from "styled-components"

export const FooterStyles = styled.footer`
  margin-bottom: 0;
  padding-bottom: 40px;

  .container {
    display: flex;
    flex-direction: column;
    gap: var(--gap);

    @media (min-width: 768px) {
      align-items: flex-start;
      flex-direction: row;
    }

    @media (min-width: 1024px) {
      gap: calc(var(--gap) * 2);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      a {
        transition: color 0.3s ease;
      }
    }
  }

  .footer__menu {
    @media (min-width: 768px) {
      flex-grow: 1;
      width: 33.333%;
    }

    h4 {
      color: #fff;
      border-bottom: 2px solid #333;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
    ul {
      margin-bottom: var(--gap);

      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
      }
    }

    li {
      margin-top: 5px;
      margin-bottom: 5px;

      a {
        color: #fff;
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 700;

        span {
          color: var(--primary);
        }
      }

      &:hover,
      &:focus {
        a {
          color: var(--primary);
        }
      }
    }
  }

  .social__menu {
    margin-bottom: var(--gap);

    ul {
      display: flex;

      @media (min-width: 768px) {
        flex-direction: row;
      }

      li {
        font-size: var(--h6);
        margin-right: 8px;

        @media (min-width: 768px) {
          margin-left: 5px;
          margin-right: 5px;
        }

        a {
          color: var(--primary);
        }

        &:hover,
        &:focus {
          a {
            color: #fff;
          }
        }
      }
    }
  }

  .copyright {
    font-size: 13px;

    p {
      margin: 0;

      a {
        color: #fff;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.3s ease;

        &:hover,
        &:focus,
        span {
          color: var(--primary);
        }
      }
    }
  }
`
