import Button from '../Button/Button'
import SearchProducts from '../SearchProducts/SearchProducts'
import SelectProducts from '../SelectProducts/SelectProducts'
import { FilterBlock } from './FilterAction.styled'

const FilterAction = ({
	products,
	search,
	handlerSearch,
	filterSelectProduct,
	handlerSelectProduct,
	resetFilter,
}) => {
	return (
		<FilterBlock>
			<SearchProducts search={search} handlerSearch={handlerSearch} />
			<SelectProducts
				products={products}
				filterSelectProduct={filterSelectProduct}
				handlerSelectProduct={handlerSelectProduct}
			/>
			<Button onClick={resetFilter}>Reset</Button>
		</FilterBlock>
	)
}

export default FilterAction
