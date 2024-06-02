import * as IntroductionStyles from "../../styles/Introduction.style";

export const Introduction = () => {
  return (
    <IntroductionStyles.IntroductionSection id="introduction-section">
      <IntroductionStyles.Heading>
        Maximize skill, minimize budget
      </IntroductionStyles.Heading>
      <IntroductionStyles.Paragraph>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </IntroductionStyles.Paragraph>
      <IntroductionStyles.GetStartedLink href="#course-list-section">
        Get Started
      </IntroductionStyles.GetStartedLink>
      <IntroductionStyles.DesktopImage></IntroductionStyles.DesktopImage>
      <IntroductionStyles.TabletImage></IntroductionStyles.TabletImage>
      <IntroductionStyles.MobileImage></IntroductionStyles.MobileImage>
    </IntroductionStyles.IntroductionSection>
  );
};
