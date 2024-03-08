// This code is used to generate the global styles required in the entire codebase

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --color-pink-100: #F0E5FF;
  --color-pink-200: #F4F1F9;
  --color-pink-300: #F5F5F5;
  --color-pink-400: #F9F9F9;
  --color-purple-02:  #8338ec06;
  --color-purple-15:  #8338ec26;
  --color-purple-30:  #8338ec4d;
  --color-purple-100: #ae7cf3;
  --color-purple-200: #8338ec;
  --color-purple-300: #6113cd;
  --color-purple-400: #242050;
  --color-purple-500: #181533;
  --color-purple-600 : #161430;
  --color-blue-500: #3a86ff;
  --color-blue-100: #257cff59;
  --color-green-500: #006F00;
  --color-contrast-100:  #8338ec06;  
  --color-contrast-500: #2f2f2f;
  --color-white: #ffffff;
  --color-white-200: #fffff3;
  --color-off-white: #ececec;
  --color-black: #000000;
  --color-gray-50: rgb(69, 69, 69, .5);
  --color-ash-100: rgba(18, 18, 18, .1);
  --color-ash-200: rgba(18, 18, 18, .2);
  --color-ash-300: rgba(18, 18, 18, .3);
  --color-ash-500: rgba(18, 18, 18, .5);
  --color-ash-600: rgba(18, 18, 18, .6);
  --color-ash-700: rgba(18, 18, 18, .7);
  --color-ash-800: rgba(18, 18, 18, .8);
  --color-ash-900: rgba(18, 18, 18, .9);
  --color-ash: #121212;
  --color-red-700: rgba(255, 0, 0, .7);
  --color-red-900: rgba(255, 0, 0);
  --color-transparent: #0000;

  /* LINE HEIGHT */
  --normal: 1.5;
  --input: 3.2rem;

  /* BORDER */
  --border-sm: 0.3px solid var(--color-purple-600);

  /* BORDER RADIUS */
  --border-radius-tiny: 3px;
  --border-radius-sm: 6px;
  --border-radius-md: 8px;
  --border-radius-lg: 15px;
  --border-radius-xlg: 20px;
  --border-radius-2xlg: 40px;

  /* GENERAL SHADOW EFFECT */
  --shadow-sm: 0px -1.5px 0.5px 1.5px var(--color-purple-200);
  --shadow-md: 0px -3px 1px 2.5px var(--color-purple-400);
  --shadow-lg: 0 24px 32px rgba(0, 0, 0, 0.12);


  --animation-2-linear:  1.8s linear infinite;
  --carousel-timing: 200ms;
  --filter-timing: 100ms;
  --general-timing: 100ms;

  /* CIRCLE SHADOWS background */
  --circle-bg-sm: linear-gradient(
      108.5deg,
      var(--color-purple-500) 0%,
      var(--color-purple-500) 100%
    );

  --circle-bg: radial-gradient(to right, var(--color-purple-200) 92%, transparent 92%),
    var(--color-purple-200);

  --circle-shadow-sm: -1.1rem 1.2rem 1.2rem -0.53rem var(--color-blue-100) inset,
      1.1rem -1.2rem 1.2rem -0.8rem var(--color-purple-200) inset;

  --circle-shadow: 2.7rem -3rem 3rem -2rem var(--color-purple-200) inset,
    -2.8rem 2.97rem 2.97rem -1.35rem var(--color-blue-100) inset;

    /* CARD SHADOWS */
    /* card shadow style 2, style 1 is located up in shadow-sm/md/lg */
    --card-purple-rubber-shadow: 0px .4rem 2.4rem -.1rem var(--color-ash-100), 0px .6rem .6rem 0px var(--color-purple-30) inset;


    /* CARD BACKGROUND */
    /* card background style 1 */
    --card-purple-bg: radial-gradient(
    circle farthest-side at top,
    var(--color-purple-400) 4%,
    transparent 100%
  );
  /* card background style 2 */
  --card-purple-rubber-bg: radial-gradient(57% 125% at 33% 35%, var(--color-purple-400), var(--color-purple-02)),
    radial-gradient(
      44% 125% at 33% 35%,
      var(--color-purple-02) 4%,
      var(--color-purple-15) 100%
    );
}

*,
*::before,
*::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--color-purple-500);
    background-color: transparent;
    transition: color 0.3s, background-color 0.3s;
}

button {
    cursor: pointer;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
  background-color: inherit;
}

input,
input:focus,
select:focus,
textarea:focus{
    outline: none
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

::selection {
  color: var(--color-white);
  background-color: var(--color-purple-200);
}


/* KEYFRAME STYLING */
@keyframes jiggle {
  0% {
    transform: translate(0, 0) rotate(0);
  }

  25% {
    transform: translate(-2%, 4%) rotate(-5deg);
  }

  50% {
    transform: translate(-4%, 8%) rotate(5deg);
  }

  75% {
    transform: translate(-2%, 4%) rotate(-5deg);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}

@keyframes reverseJiggle {
  0% {
    transform: translate(0, 0) rotate(0);
  }

  25% {
    transform: translate(2%, -4%) rotate(5deg);
  }

  50% {
    transform: translate(4%, -8%) rotate(-5deg);
  }

  75% {
    transform: translate(2%, -4%) rotate(5deg);
  }

  100% {
    transform: translate(0, 0) rotate(0);
  }
}

`;

export default GlobalStyles;
