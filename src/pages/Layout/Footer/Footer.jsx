import { FooterBlock, IconBlock } from './Footer.styled'
import { format } from 'date-fns'
import { Facebook, Instargam, Telegram } from '../../../helpers/icons'

const Footer = () => {
	return (
		<FooterBlock>
			<span>© 2021 - {format(new Date(), 'yyyy')} Все права защищены</span>
			<span>Пользовательское соглашение</span>
			<IconBlock>
				<Facebook />
				<Instargam />
				<Telegram />
			</IconBlock>
		</FooterBlock>
	)
}

export default Footer
