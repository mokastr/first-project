import styled from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	grid-template-columns: auto 300px minmax(320px, 1200px) auto;
	grid-template-rows: auto 1fr auto;
	gap: 10px;
	grid-template-areas:
		'. header header .'
		'. sidebar body .'
		'. footer footer .';
	min-height: 100vh;
`
