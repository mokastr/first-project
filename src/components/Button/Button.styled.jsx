import styled from 'styled-components'

export const ButtonType = styled.button`
	background: ${props => (props.color ? 'var(--light-green)' : null)};
	border-radius: 10px;
	border: none;
	color: var(--white);
	cursor: pointer;
	&:hover {
		background: ${props => (props.color ? 'var(--green)' : null)};
	}
`
