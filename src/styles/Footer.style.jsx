import { styled } from "styled-components";

export const GetStartedLink = styled.a`
  position: relative;
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
`;

export const Logo = styled.a`
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-1);
  text-decoration: none;
`;
