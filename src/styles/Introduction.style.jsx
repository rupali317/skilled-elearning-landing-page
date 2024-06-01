import { styled } from "styled-components";
import { TABLET_WIDTH } from "../constants/Breakpoints";

export const IntroductionSection = styled.section`
  padding: var(--space-none) var(--space-xs-1) var(--space-xl-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-s-1);
  margin: auto;
  max-width: 21.4375rem; /* 343px */

  @media (min-width: ${TABLET_WIDTH}) {
    max-width: 24.875rem; /* 398px */
    margin: initial;
    padding: var(--space-none) var(--space-none) var(--space-xxl-5)
      var(--space-m-4);
  }
`;

export const Heading = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-3);
`;

export const Paragraph = styled.p`
  margin-top: var(--space-xxs-5);
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-s);
  color: var(--color-neutral-4);

  @media (min-width: ${TABLET_WIDTH}) {
    margin-top: var(--space-xxs-7);
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
`;

export const Picture = styled.picture`
  margin-top: var(--space-xs-4);
  margin-left: auto;
  margin-right: auto;
`;

export const Image = styled.img`
  width: 20.4375rem; /* 327px */
  height: 18.8125rem; /* 301px */
  margin-top: var(--space-xs-4);

  @media (min-width: ${TABLET_WIDTH}) {
    /* position: absolute; */
    width: 40.044375rem; /* 640.71px */
    height: 40rem; /* 640px */
  }
`;
