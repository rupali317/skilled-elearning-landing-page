import { styled } from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../constants/Breakpoints";

export const IntroductionSection = styled.section`
  padding: var(--space-none) var(--space-xs-1) var(--space-xl-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-s-1);
  margin: auto;
  max-width: 21.4375rem; /* 343px */

  @media (min-width: ${TABLET_WIDTH}) {
    max-width: 24.875rem; /* 398px */
    padding: var(--space-none) var(--space-none) var(--space-xxl-5)
      var(--space-m-4);
    margin: initial;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    max-width: 28.5625rem; /* 457px */
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
  font-weight: var(--font-weight-medium);
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
  max-width: 10.4375rem; /* 167px */

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

export const Picture = styled.picture`
  margin-top: var(--space-xs-4);
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${TABLET_WIDTH}) {
    margin-top: var(--space-none);
  }
`;

/* RRC: Revisit the dimensions */
export const Image = styled.img`
  //width: 20.4375rem; /* 327px */
  //height: 18.8125rem; /* 301px */
  margin-top: var(--space-xs-4);

  @media (min-width: ${TABLET_WIDTH}) {
    position: absolute;
    //width: 40.044375rem; /* 640.71px */
    //height: 40rem; /* 640px */
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    position: absolute;
  }
`;
