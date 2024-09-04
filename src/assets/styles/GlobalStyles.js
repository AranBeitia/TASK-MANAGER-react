import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
	  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
		line-height: 1.5;
		font-weight: 400;

		color-scheme: light dark;
		color: ${({ theme }) => theme.text};
		background-color:  ${({ theme }) => theme.bodyBackground};

		font-synthesis: none;
		text-rendering: optimizeLegibility;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
`

export default GlobalStyles