import * as IntroductionStyles from "../../styles/Introduction.style";
import { TABLET_WIDTH, DESKTOP_WIDTH } from "../../constants/Breakpoints";

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
      {/* RRC: Revisit if webp or png should be used. Weigh the pros and cons */}
      <IntroductionStyles.Picture>
        <source
          srcSet="/assets/image-hero-desktop.png 1x, /assets/image-hero-desktop@2x.png 2x"
          media={`(min-width:${DESKTOP_WIDTH})`}
        ></source>
        <source
          srcSet="/assets/image-hero-tablet.png 1x, /assets/image-hero-tablet@2x.png 2x"
          media={`(min-width:${TABLET_WIDTH})`}
        ></source>
        <IntroductionStyles.Image
          src="/assets/image-hero-mobile.png"
          srcSet="/assets/image-hero-mobile.png 1x, /assets/image-hero-mobile@2x.png 2x"
          alt=""
          role="presentation"
          width="327"
          height="301"
        ></IntroductionStyles.Image>
      </IntroductionStyles.Picture>
    </IntroductionStyles.IntroductionSection>
  );
};
