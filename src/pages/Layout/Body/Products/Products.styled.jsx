import styled from 'styled-components'

export const ProductWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 40px 1fr;
`

export const ProductsBlock = styled.div`
	display: grid;
	padding: 20px;
	grid-template-columns: repeat(auto-fit, 200px);
	grid-template-rows: repeat(2, 250px);
	grid-auto-rows: 250px;
	gap: 10px;
`
