import styled from 'styled-components'

export const Wrapper = styled.div`
	display: grid;
	height: 100vh;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	place-content: center;
`
export const LogoBlock = styled.div`
	display: grid;
	place-content: center;
	border: 2px solid var(--red);
	grid-area: 2 / 2 / 3 / 3;
`

export const SignIn = styled.div`
	display: grid;
	grid-template-columns: 0, 5fr 1fr 1fr 0.5fr;
	place-content: center;
	gap: 10px 10px;
	border: 2px solid var(--green);
	grid-area: 2 / 3 / 3 / 4;
	grid-template-areas:
		'. name name .'
		'. password password .'
		'. enter reg .';
`

export const InputName = styled.input`
	grid-area: name;
`
export const InputPassword = styled.input`
	grid-area: password;
`

export const ButtonEnter = styled.button`
	grid-area: enter;
`

export const ButtonReg = styled.button`
	grid-area: reg;
`
