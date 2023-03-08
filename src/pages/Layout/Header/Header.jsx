import Button from '../../../components/Button/Button'
import { Logo } from '../../../helpers/icons'
import { HeaderBlock } from './Header.styled'

const Header = ({ enterLayout }) => {
	return (
		<HeaderBlock>
			<Logo />
			<Button color onClick={enterLayout}>
				Выйти
			</Button>
		</HeaderBlock>
	)
}

export default Header
