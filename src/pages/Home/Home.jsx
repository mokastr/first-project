import {
	Wrapper,
	LogoBlock,
	SignIn,
	InputName,
	InputPassword,
	ButtonEnter,
	ButtonReg,
} from './Home.styled'

const Home = ({ enterLayout, enterRegistration }) => {
	return (
		<Wrapper>
			<LogoBlock>Логотип</LogoBlock>
			<SignIn>
				<InputName />
				<InputPassword />
				<ButtonEnter onClick={enterLayout}>Войти</ButtonEnter>
				<ButtonReg onClick={enterRegistration}>Регистрация</ButtonReg>
			</SignIn>
		</Wrapper>
	)
}

export default Home
