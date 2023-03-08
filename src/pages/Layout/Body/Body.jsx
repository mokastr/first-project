import { BodyBlock } from './Body.styled'
import { Routes, Route } from 'react-router-dom'
import Products from './Products/Products'
import Blog from './Blog/Blog'
import Settings from './Settings/Settings'

const Body = () => {
	return (
		<BodyBlock>
			<Routes>
				<Route path="products/*" element={<Products />} />
				<Route path="blog/*" element={<Blog />} />
				<Route path="settings/*" element={<Settings />} />
			</Routes>
		</BodyBlock>
	)
}

export default Body
