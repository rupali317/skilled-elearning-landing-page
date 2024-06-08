import { createGlobalStyle } from "styled-components";
import { DESKTOP_WIDTH, TABLET_WIDTH } from "../constants/Breakpoints";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(341, 61%, 48%); /* #C5305F */
        --color-primary-2: hsl(341, 100%, 83%); /* #FFA7C3 */
        --color-primary-3: hsl(322, 87%, 55%); /* #F02AA6 */
        --color-secondary-1: hsl(13, 100%, 64%); /* #FF6F48 */
        --color-secondary-2: hsl(237, 100%, 64%); /* #4851FF */
        --color-secondary-3: hsl(233, 92%, 29%, 4.42%); /* #06168D, 4.42% */
        --color-neutral-1: hsl(0, 0%, 100%); /* #FFFFFF */
        --color-neutral-2: hsl(234, 100%, 97%); /* #F0F1FF */
        --color-neutral-3: hsl(234, 53%, 16%); /* #13183F */
        --color-neutral-4: hsl(233, 10%, 44%); /* #65687B */
        --color-neutral-5: hsl(234, 25%, 52%); /* #666CA3 */
        --color-neutral-6: hsl(0, 0%, 100%, 0.5); /* #FFFFFF opacity 50% */


        /* Font sizes */
        --font-size-xxxs: 1rem; /* 16px */
        --font-size-xxs: 1.125rem; /* 18px */
        --font-size-xs: 1.25rem; /* 20px */
        --font-size-s: 1.5rem; /* 24px */
        --font-size-base: 1.75rem; /* 28px */
        --font-size-m: 2rem; /* 32px */
        --font-size-l: 2.25rem; /* 36px */
        --font-size-xl: 2.5rem; /* 40px */
        --font-size-xxl: 3.5rem; /* 56px */
        
        /* Line heights */
        --line-height-normal: normal;
        --line-height-s: 1.625rem; /* 26px */
        --line-height-base: 1.75rem; /* 28px */
        --line-height-m: 2rem; /* 32px */
        --line-height-l: 2.5rem; /* 40px */

        /* Font weights */
        --font-weight-medium: 500;
        --font-weight-bold: 700;
        --font-weight-extra-bold: 800;

        /* Spacing */
        --space-none: 0rem;
        --space-xxs-1: 0.5625rem; /* 9px */
        --space-xxs-2: 0.6875rem; /* 11px */
        --space-xxs-3: 0.875rem; /* 14px */
        --space-xxs-4: 0.9375rem; /* 15px */
        --space-xxs-5: 0.125rem; /* 2px */
        --space-xxs-6: 0.5rem; /* 8px */
        --space-xxs-7: 0.0625rem; /* 1px */
        --space-xs-1: 1rem; /* 16px */
        --space-xs-2: 1.1875rem; /* 19px */
        --space-xs-3: 1.3125rem; /* 21px */
        --space-xs-4: 1.375rem; /* 22px */
        --space-s-1: 1.5rem; /* 24px */
        --space-s-2: 1.5625rem; /* 25px */
        --space-s-3: 1.625rem; /* 26px */
        --space-s-4: 1.75rem; /* 28px */
        --space-base-1: 1.8125rem; /* 29px */
        --space-base-2: 1.875rem; /* 30px */
        --space-base-3: 1.9375rem; /* 31px */
        --space-base-4: 2rem; /* 32px */
        --space-m-1: 2.25rem; /* 36px */
        --space-m-2: 2.3125rem; /* 37px */
        --space-m-3: 2.375rem; /* 38px */
        --space-m-4: 2.4375rem; /* 39px */
        --space-l-1: 2.5rem; /* 40px */
        --space-l-2: 2.875rem; /* 46px */
        --space-l-3: 3.5rem; /* 56px */
        --space-l-4: 4rem; /* 64px */
        --space-xl-1: 4.125rem; /* 66px */
        --space-xl-2: 5rem; /* 80px */
        --space-xl-3: 5.375rem; /* 86px */
        --space-xl-4: 6.1875rem; /* 99px */
        --space-xxl-1: 8.75rem; /* 140px */
        --space-xxl-2: 10.3125rem; /* 165px */
        --space-xxl-3: 10.361875rem; /* 165.79px */
        --space-xxl-4: 10.75rem; /* 172px */
        --space-xxl-5: 13.125rem; /* 210px */
        --space-xxl-6: 15.625rem; /* 250px */

        /* Box shadow */
        --box-shadow-1: 0rem 1.5625rem 3.125rem 0rem var(--color-secondary-3); /* 0px 25px 50px 0px */

        /* Border radius */
        --border-radius-none: 0rem;
        --border-radius-s: 0.625rem; /* 10px */
        --border-radius-base: 0.9375rem; /* 15px */
        --border-radius-m: 1.75rem; /* 28px */
        --border-radius-l: 1.96875rem; /* 31.5px */
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url("/fonts/Plus Jakarta Sans/PlusJakartaSans-Medium.ttf") format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url("/fonts/Plus Jakarta Sans/PlusJakartaSans-Bold.ttf") format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "Plus Jakarta Sans";
        src: url("/fonts/Plus Jakarta Sans/PlusJakartaSans-ExtraBold.ttf") format("truetype");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }
`;

export const ResetStyles = createGlobalStyle`
    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        margin-block-end: 0;
        margin-block-start: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        padding-block-end: 0;
        padding-block-start: 0;
        padding-inline-start: 0;
        padding-inline-end: 0;
    }

    /* Prevent font size inflation */
    html {
        -moz-text-size-adjust: none;
        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    /* Set core body defaults */
    body {
        min-height: 100vh;
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /* Set shorter line heights on headings and interactive elements */
    h1,
    h2,
    h3,
    button {
        line-height: 1.1;
    }

    /* Avoid text overflows */
    h1,
    h2,
    h3,
    p {
        overflow-wrap: break-word;
    }

    /* Remove built-in form typography styles */
    button {
        font: inherit;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
        max-width: 100%;
        display: block;
    }
`;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "Plus Jakarta Sans";
        font-weight: var(--font-weight-medium);
    }

    header,
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    header {
        padding: var(--space-xs-1) var(--space-xs-1) var(--space-m-3);
    }

    footer {
        padding: var(--space-m-1) var(--space-xs-1);
        background-color: var(--color-neutral-3);
    }

    .skip-link {
        position: absolute;
        top: -3rem;
        font-size: var(--font-size-xxs);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-base);
        color: var(--color-primary-1);
        text-decoration: none;
        transition: top 0.3s ease;
    }

    .skip-link:focus {
        top: 0px
    }

    @media (min-width:${TABLET_WIDTH}) {
        header {
            padding: var(--space-s-1) var(--space-l-1) var(--space-xl-4) var(--space-m-4);
        }

        footer {
            padding: var(--space-m-1) var(--space-m-4) var(--space-m-1) var(--space-l-1);
        }
    }

    @media (min-width: ${DESKTOP_WIDTH}) {
        header {
            padding: var(--space-s-1) var(--space-xxl-2) var(--space-xxl-4) var(--space-xxl-3);
        }

        footer {
            padding: var(--space-base-4) var(--space-xxl-2) var(--space-base-4) var(--space-xxl-3);
        }
    }
`;
