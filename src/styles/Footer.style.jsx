import { styled } from "styled-components";
import { DESKTOP_WIDTH } from "../constants/Breakpoints";

export const GetStartedLink = styled.a`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
  color: var(--color-neutral-1);
  background: linear-gradient(var(--color-secondary-2), var(--color-primary-3));
  padding: var(--space-xxs-1) var(--space-s-1) var(--space-xxs-2);
  border-radius: var(--border-radius-m);
  text-decoration: none;

  &:hover {
    background: linear-gradient(
        var(--color-secondary-2),
        var(--color-primary-3)
      ),
      var(--color-neutral-6);
    background-blend-mode: overlay;
  }

  @media (min-width: ${DESKTOP_WIDTH}) {
    padding: var(--space-xxs-3) var(--space-base-3) var(--space-xxs-3)
      var(--space-base-4);
    font-size: var(--font-size-xxs);
  }
`;

export const Logo = styled.a`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-1);
  text-decoration: none;

  @media (min-width: ${DESKTOP_WIDTH}) {
    font-size: var(--font-size-l);
    line-height: var(--line-height-normal);
  }
`;
