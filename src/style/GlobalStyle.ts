import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
}

:root {
	--color01: #FF4040;
	--color02: #7e7e7e;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	box-sizing: border-box;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	width: 100vw;
	min-height: 100vh;
	color: #222;
	font-family: 'Pretendard-Regular';
	color: #fff;
	line-height: 1.2;
	cursor: none;
	background-color: hsl(0, 0%, 18%);
  background-size: 3px 3px;
  background-image: linear-gradient(
      0deg,
      hsla(0, 0%, 0%, 0) 0,
      hsla(0, 0%, 10%, 1) 3px
    ),
    linear-gradient(90deg, hsla(0, 0%, 0%, 0) 0, hsla(0, 0%, 10%, 1) 5px);
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a, a:hover, a:active, a:link, a:visited {
	color: inherit;
	text-decoration: none;
}
* {
	::selection {
		background-color: var(--color01);
		color: #fff;
	}
}
`;

export default GlobalStyle;
