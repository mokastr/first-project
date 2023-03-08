import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import { Styles } from './index.styled'
import Home from './pages/Home/Home'
import Registration from './pages/Home/Registration/Registration'
import Layout from './pages/Layout/Layout'

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Main />
				<Styles />
			</BrowserRouter>
		</div>
	)
}

function Main() {
	const [openLayout, setOpenLayout] = useState(true)
	const [openRegistration, setOpenRegistration] = useState(true)
	const enterRegistration = () => {
		setOpenRegistration(!openRegistration)
	}
	const enterLayout = () => {
		setOpenLayout(!openLayout)
		setOpenRegistration(true)
	}
	if (!openLayout) return <Layout enterLayout={enterLayout} />
	if (!openRegistration) return <Registration enterLayout={enterLayout} />

	return (
		<Home enterLayout={enterLayout} enterRegistration={enterRegistration} />
	)
}

export default App
