import styled from "styled-components";
import Logo from "../components/Logo";
import facebookIcon from "../assets/imgs/facebook.png";
import instagramIcon from "../assets/imgs/instagram.png";
import linkedinIcon from "../assets/imgs/linkedin.png";
import { Link } from "react-scroll";

const FooterNav = styled.footer`
  padding: 4.5rem 0;
  background-color: #242050;
`;

const GridFooter = styled.div`
  display: grid;
  column-gap: 2.4rem;
  row-gap: 5.6rem;
  grid-template-columns: 1.5fr 1.5fr 1.5fr 1fr 1.5fr 1fr;
  max-width: 130rem;
  padding: 0 3.2rem;
  margin: 0 auto;

  @media (max-width: 75em) {
    column-gap: 4.8rem;
  }

  @media (max-width: 59em) {
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }
`;

const LogoCol = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 59em) {
    justify-content: center;
    align-items: center;
  }
`;

const SocialLinks = styled.div`
  list-style: none;
  display: flex;
  gap: 2.4rem;
  margin-top: 2.4rem;
  @media (max-width: 59em) {
    justify-content: center;
    align-items: center;
  }
`;

const FooterLinkNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 59em) {
    text-align: center;
    gap: 1.4rem;
  }
`;

const FooterHeading = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 3rem;

  @media (max-width: 59em) {
    text-align: center;
    margin-bottom: 2.4rem;
    margin: 0;
  }
`;

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: var(--color-white);
  font-size: 1.4rem;
  transition: all 0.3s;
  line-height: 1.6;

  &:hover,
  &:hover::before {
    color: var(--color-purple-200);
  }

  @media (max-width: 59em) {
    justify-content: center;
    align-items: center;
  }
`;

function Footer() {
  return (
    <FooterNav>
      <GridFooter>
        <LogoCol>
          <Logo />
          <ul>
            <li>
              <SocialLinks>
                <a
                  href="https://www.linkedin.com/company/voux-bussiness-school?trk=public_post_comment_actor-name"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkedinIcon}
                    alt="LinkedIn"
                    style={{ width: "3.4rem" }}
                  />
                </a>
                <a href="#">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    style={{ width: "3.4rem" }}
                  />
                </a>
                <a href="#">
                  <img
                    src={instagramIcon}
                    alt="Instagram"
                    style={{ width: "3.4rem" }}
                  />
                </a>
              </SocialLinks>
            </li>
          </ul>
        </LogoCol>
        <nav>
          <FooterHeading>School</FooterHeading>
          <FooterLinkNav>
            <li>
              <StyledLink href="#">School of Business</StyledLink>
            </li>
            <li>
              <StyledLink href="#">School of Law</StyledLink>
            </li>
            <li>
              <StyledLink href="#">School of Engineering</StyledLink>
            </li>
            <li>
              <StyledLink href="#">School of Data</StyledLink>
            </li>
            <li>
              <StyledLink href="#">School of Science</StyledLink>
            </li>
            <li>
              <StyledLink href="#">School of Creative Economy</StyledLink>
            </li>
          </FooterLinkNav>
        </nav>
        <nav>
          <FooterHeading>Programs</FooterHeading>
          <FooterLinkNav>
            <li>
              <StyledLink href="#">
                Entrepreneurship in Emerging Economics
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#">
                Blockchain in Government Regulation
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#">
                Blockchain Forensics, Tokenomics Trust contracts
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#">The Mystery of web3</StyledLink>
            </li>
            <li>
              <StyledLink href="#">
                Blockchain & Supply Chain Management
              </StyledLink>
            </li>
          </FooterLinkNav>
        </nav>
        <nav>
          <FooterHeading>About Us</FooterHeading>
          <FooterLinkNav>
            <li>
              <StyledLink href="#">Our Story</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Contact Us</StyledLink>
            </li>
          </FooterLinkNav>
        </nav>
        <nav>
          <FooterHeading>Research</FooterHeading>
          <FooterLinkNav>
            <li>
              <StyledLink href="#">
                Blockchain Technology and Application
              </StyledLink>
            </li>
            <li>
              <StyledLink href="#">Decentralized Finance (DeFi)</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Cryptocurrency Market Analysis</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Smart contracts & DApps</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Tokenomics</StyledLink>
            </li>
          </FooterLinkNav>
        </nav>
        <nav>
          <FooterHeading>Resources</FooterHeading>
          <FooterLinkNav>
            <li>
              <StyledLink href="#">Privacy policy</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Terms of service</StyledLink>
            </li>
            <li>
              <StyledLink href="#">FAQs</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Our Blog</StyledLink>
            </li>
            <li>
              <StyledLink href="#">Scholarships</StyledLink>
            </li>
          </FooterLinkNav>
        </nav>
      </GridFooter>
    </FooterNav>
  );
}

export default Footer;
