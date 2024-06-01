import { styled } from "styled-components";

export const Heading = styled.h2`
  font-size: var(--font-size-s);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-m);
  color: var(--color-neutral-1);
  padding: var(--space-s-1) var(--space-base-1) var(--space-base-4)
    var(--space-s-4);
  background: linear-gradient(var(--color-secondary-1), var(--color-primary-3));
  border-radius: var(--border-radius-s);
  margin: var(--space-none) var(--space-xs-1) var(--space-l-1);
`;

export const UnorderedList = styled.ul`
  display: grid;
  grid-template-areas:
    "Animation"
    "Design"
    "Photography"
    "Crypto"
    "Business";
  row-gap: var(--space-l-1);
  list-style-type: none;
`;

export const CourseListSection = styled.section`
  background: linear-gradient(var(--color-neutral-1), var(--color-neutral-2));
`;

export const ListItem = styled.li`
  grid-area: ${(props) => props.$title};
  position: relative;
  border-radius: var(--border-radius-s);
  padding: var(--space-l-3) var(--space-base-1) var(--space-base-4)
    var(--space-s-4);
  margin-left: var(--space-xs-1);
  margin-right: var(--space-xs-1);
  background-color: var(--color-neutral-1);
  box-shadow: var(--box-shadow-1);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs-1);

  &:last-of-type {
    margin-bottom: var(--space-xl-2);
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0rem;
  transform: translateY(-50%);
`;

export const CourseTitle = styled.h3`
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-extra-bold);
  line-height: var(--line-height-normal);
  color: var(--color-neutral-3);
`;

export const CourseDescription = styled.p`
  font-size: var(--font-size-xxxs);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-s);
  color: var(--color-neutral-4);
`;

export const GetStartedLink = styled.a`
  margin-top: var(--space-xxs-6);
  font-size: var(--font-size-xxs);
  font-weight: var(--font-weight-bold);
  line-height: var(--line-height-base);
  color: var(--color-primary-1);
  text-decoration: none;

  &:hover {
    color: var(--color-primary-2);
  }
`;
