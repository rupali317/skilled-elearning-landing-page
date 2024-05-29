import { createGlobalStyle } from "styled-components";

export const BaseStyles = createGlobalStyle`
    :root {
        /* Colors */
        --color-primary-1: hsl(341, 92%, 62%); /* #F74780 */
        --color-primary-2: hsl(341, 100%, 83%); /* #FFA7C3 */
        --color-primary-3: hsl(322, 87%, 55%); /* #F02AA6 */
        --color-secondary-1: hsl(13, 100%, 64%); /* #FF6F48 */
        --color-secondary-2: hsl(237, 100%, 64%); /* #4851FF */
        --color-secondary-3: hsl(233, 92%, 29%, 4.42%); /* #06168D, 4.42% */
        --color-neutral-1: hsl(0, 0%, 100%); /* #FFFFFF */
        --color-neutral-2: hsl(234, 100%, 97%); /* #F0F1FF */
        --color-neutral-3: hsl(234, 53%, 16%); /* #13183F */
        --color-neutral-4: hsl(233, 10%, 56%); /* #83869A */
        --color-neutral-5: hsl(234, 25%, 52%); /* #666CA3 */

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

        /* TODO: Spacing */
        --space-none: 0rem;

        /* Box shadow */
        --box-shadow-1: 0rem 1.5625rem 3.125rem 0rem var(--color-secondary-3) /* 0px 25px 50px 0px */

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

export const ResetStyles = createGlobalStyle``;

export const DefaultStyles = createGlobalStyle`
    body {
        font-family: "Plus Jakarta Sans";
    }
`;
