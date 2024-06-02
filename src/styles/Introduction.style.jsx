import { styled } from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../constants/Breakpoints";

export const IntroductionSection = styled.section`
  padding: var(--space-none) var(--space-xs-1) var(--space-xl-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-s-1);
  margin: auto;
  max-width: 23.4375rem; /* 375px */

  @media (min-width: ${TABLET_WIDTH}) {
    max-width: 27.3125rem; /* 437px */
    padding: var(--space-none) var(--space-none) var(--space-xxl-5)
      var(--space-m-4);
    margin: initial;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    max-width: 38.875rem; /* 622px */
    padding: var(--space-none) var(--space-none) var(--space-xxl-6)
      var(--space-xxl-2);
    gap: var(--space-base-1);
  }
`;

export const Heading = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-3);
  min-width: 21.4375rem; /* 343px */

  @media (min-width: ${TABLET_WIDTH}) {
    min-width: 24.875rem; /* 398px */
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    font-size: var(--font-size-xxl);
    min-width: 28.5625rem; /* 457px */
  }
`;

export const Paragraph = styled.p`
  margin-top: var(--space-xxs-5);
  font-size: var(--font-size-xxxs);
  line-height: var(--line-height-s);
  color: var(--color-neutral-4);
  min-width: 21.4375rem; /* 343px */

  @media (min-width: ${TABLET_WIDTH}) {
    margin-top: var(--space-xxs-7);
    min-width: 24.875rem; /* 398px */
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    font-size: var(--font-size-xxs);
    line-height: var(--line-height-base);
    margin-top: var(--space-none);
    min-width: 28.5625rem; /* 457px */
  }
`;

export const GetStartedLink = styled.a`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-s);
  color: var(--color-neutral-1);
  background: linear-gradient(var(--color-secondary-1), var(--color-primary-3));
  padding: var(--space-xxs-4) var(--space-m-2) var(--space-xxs-4)
    var(--space-m-3);
  border-radius: var(--border-radius-l);
  text-decoration: none;
  max-width: fit-content;

  &:hover {
    background: linear-gradient(
        var(--color-secondary-1),
        var(--color-primary-3)
      ),
      var(--color-neutral-6);
    background-blend-mode: overlay;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    margin-top: var(--space-xxs-2);
    padding: var(--space-xs-2) var(--space-base-3) var(--space-xs-1)
      var(--space-base-4);
    font-size: var(--font-size-xxs);
    line-height: var(--line-height-base);
  }
`;

export const MobileImage = styled.div`
  display: block;
  background-image: url("/assets/image-hero-mobile.webp");
  width: 20.4375rem; /* 327px */
  height: 18.8125rem; /* 301px */
  background-size: contain;
  background-repeat: no-repeat;
  margin-top: var(--space-xs-4);

  @media (min-resolution: 192dpi) {
    background-image: url("/assets/image-hero-mobile@2x.webp");
  }

  @media (min-width: ${TABLET_WIDTH}) {
    display: none;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    display: none;
  }
`;

export const TabletImage = styled.div`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    background-image: url("/assets/image-hero-tablet.webp");
    display: block;
    width: 40.044375rem; /* 640.71px */
    height: 40rem; /* 640px */
    background-size: contain;
    background-position: 17.5rem 2rem;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    right: 0;
    transform: translateY(-44%);
  }

  @media (min-width: ${TABLET_WIDTH}) and (min-resolution: 192dpi) {
    display: block;
    background-image: url("/assets/image-hero-tablet@2x.webp");
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    display: none;
  }
`;

export const DesktopImage = styled.div`
  display: none;

  @media (min-width: ${TABLET_WIDTH}) {
    display: none;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    background-image: url("/assets/image-hero-desktop.webp");
    display: block;
    width: 61.976875rem; /* 991.63px */
    height: 58.5575rem; /* 936.92px */
    background-size: contain;
    background-position: 20rem 0rem;
    background-repeat: no-repeat;
    position: absolute;
    z-index: -1;
    right: 0;
    transform: translateY(-41%);
  }

  @media (min-width: ${DESKTOP_WIDTH}) and (min-resolution: 192dpi) {
    display: block;
    background-image: url("/assets/image-hero-desktop@2x.webp");
  }
`;
