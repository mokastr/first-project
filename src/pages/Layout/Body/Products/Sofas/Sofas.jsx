import ProductPage from '../../../../../components/ProductPage/ProductPage'
import { SofaCard } from './Sofas.styled'

const Sofas = ({ currentIdProduct, currentPage, products }) => {
	if (currentIdProduct)
		return (
			<ProductPage products={products} currentIdProduct={currentIdProduct} />
		)
	return (
		<>
			{products.map(s => {
				return (
					<SofaCard key={s.id} onClick={() => currentPage(s.id)}>
						{s.name}
					</SofaCard>
				)
			})}
		</>
	)
}

export default Sofas
