import { TABLET_WIDTH, DESKTOP_WIDTH } from "../../constants/Breakpoints";

export const Introduction = () => {
  return (
    <section id="introduction-section">
      <h1>Maximize skill, minimize budget</h1>
      <p>
        Our modern courses across a range of in-demand skills will give you the
        knowledge you need to live the life you want.
      </p>
      <a href="#course-list-section">Get Started</a>
      {/* RRC: Revisit if webp or png should be used. Weigh the pros and cons */}
      <picture>
        <source
          srcSet="/assets/image-hero-desktop.png 1x, /assets/image-hero-desktop@2x.png 2x"
          media={`(min-width:${DESKTOP_WIDTH})`}
        ></source>
        <source
          srcSet="/assets/image-hero-tablet.png 1x, /assets/image-hero-tablet@2x.png 2x"
          media={`(min-width:${TABLET_WIDTH})`}
        ></source>
        <img
          src="/assets/image-hero-mobile.png"
          srcSet="/assets/image-hero-mobile.png 1x, /assets/image-hero-mobile@2x.png 2x"
          alt=""
          role="presentation"
        ></img>
      </picture>
    </section>
  );
};
