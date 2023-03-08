import { Outlet } from 'react-router-dom'
import { Nav, NavLink } from './ContentNav.styled'

const ContentNav = ({ links, stretch }) => {
	return (
		<Nav stretch={stretch}>
			{links.map(nav => {
				return (
					<NavLink to={nav.path} key={nav.path} stretch={stretch}>
						{nav.name}
					</NavLink>
				)
			})}
			<Outlet />
		</Nav>
	)
}

export default ContentNav
