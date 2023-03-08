import { createGlobalStyle } from 'styled-components'

export const Styles = createGlobalStyle`
:root {
	--light-green: #7ac751;
	--black: #000;
	--light-gray: #f9f9f9;
	--green: #568c39;
	--red: #a20c0c;
	--primary: #2d9d19;
	--primary-hover: #1d6111;
	--white: #ffffff;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	overflow-x: hidden;
	max-width: 100vw;
}

body {
	font-family: 'Noto Sans', sans-serif;
}

a {
	text-decoration: none;
	color: inherit;
}

`
