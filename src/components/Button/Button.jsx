import { ButtonType } from './Button.styled'
const Button = ({ children, onClick, color }) => {
	return (
		<ButtonType onClick={onClick} color={color}>
			{children}
		</ButtonType>
	)
}

export default Button
