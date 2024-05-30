import * as HeaderStyles from "../../styles/Header.style";

export const Header = () => {
  return (
    <>
      <HeaderStyles.Logo
        href="#introduction-section"
        aria-label="Skilled logo - header"
      >
        skilled
      </HeaderStyles.Logo>
      <HeaderStyles.GetStartedLink href="#course-list-section">
        Get Started
      </HeaderStyles.GetStartedLink>
    </>
  );
};
