import { Wrapper } from './Layout.styled'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const Layout = ({ enterLayout }) => {
	return (
		<Wrapper>
			<Header enterLayout={enterLayout} />
			<Sidebar />
			<Body />
			<Footer />
		</Wrapper>
	)
}

export default Layout
