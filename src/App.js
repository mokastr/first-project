import { useState } from 'react'
import Home from './pages/Home/Home'
import Registration from './pages/Home/Registration/Registration'
import Layout from './pages/Layout/Layout'

function App() {
	return (
		<div className="App">
			<Main />
		</div>
	)
}

function Main() {
	const [openLayout, setOpenLayout] = useState(true)
	console.log('Main ~ openLayout:', openLayout)
	const [openRegistration, setOpenRegistration] = useState(true)
	console.log('Main ~ openRegistration:', openRegistration)
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
