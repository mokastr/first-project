import { useState } from 'react'
import Home from './pages/Home/Home'
import Layout from './pages/Layout/Layout'

function App() {
	return (
		<div className="App">
			<Main />
		</div>
	)
}

function Main() {
	const [openLayout, setOpenLayout] = useState(false)
	console.log('Main ~ openLayout:', openLayout)
	const enterLayout = () => {
		setOpenLayout(!openLayout)
	}
	if (openLayout) return <Home />
	return <Layout enterLayout={enterLayout} />
}

export default App
