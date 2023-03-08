import styled from 'styled-components'

export const FooterBlock = styled.div`
	display: grid;
	grid-template-columns: 1fr 0.5fr 150px;
	border-radius: 10px 10px 0 0;
	background: var(--green);
	color: var(--white);
	font-size: 16px;
	line-height: 18px;
	font-weight: 400;
	padding: 15px;
	grid-area: footer;
	text-align: center;
	align-items: center;
	span:first-child {
		text-align: left;
	}
`

export const IconBlock = styled.div`
	display: flex;
	justify-content: space-between;

	svg {
		cursor: pointer;
	}
`
