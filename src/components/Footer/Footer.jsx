import * as FooterStyles from "../../styles/Footer.style";

export const Footer = () => {
  return (
    <>
      <FooterStyles.Logo
        href="#introduction-section"
        aria-label="Skilled logo - footer"
      >
        skilled
      </FooterStyles.Logo>
      <FooterStyles.GetStartedLink href="#course-list-section">
        Get Started
      </FooterStyles.GetStartedLink>
    </>
  );
};
