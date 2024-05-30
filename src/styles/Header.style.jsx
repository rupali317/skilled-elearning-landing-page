import { styled } from "styled-components";

export const GetStartedLink = styled.a`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
  color: var(--color-neutral-1);
  background-color: var(--color-neutral-3);
  padding: var(--space-xxs-1) var(--space-s-1) var(--space-xxs-2);
  border-radius: var(--border-radius-m);
  text-decoration: none;

  &:hover {
    background-color: var(--color-neutral-5);
  }
`;

export const Logo = styled.a`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-3);
  text-decoration: none;
`;
