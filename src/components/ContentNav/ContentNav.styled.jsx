import styled from 'styled-components'
import * as router from 'react-router-dom'

export const Nav = styled.div`
	display: ${props => (props.stretch ? 'flex' : 'grid')};
	background: var(--light-green);
`
export const NavLink = styled(router.NavLink)`
	display: flex;
	align-items: center;
	justify-content: ${props => (props.stretch ? 'center' : 'start')};
	width: ${props => (props.stretch ? '100%' : '')};
	height: ${props => (props.stretch ? '' : '50px')};
	padding-left: ${props => (props.stretch ? '' : '20px')};
	color: var(--white);

	&.active {
		background: var(--green);
	}

	&:hover {
		cursor: pointer;
		background: var(--green);
	}
`
