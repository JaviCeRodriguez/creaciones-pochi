import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, ul, li {
		margin: 0;
		padding: 0;
		list-style:none
	}

	html,
	body {
		margin: 0;
		padding: 0;
		background: #e9f0f6;
		font-family: Open-Sans, Helvetica, Sans-Serif;
	}
`;

export default GlobalStyle;
