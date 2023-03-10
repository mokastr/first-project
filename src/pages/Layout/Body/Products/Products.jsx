import {
	Route,
	Routes,
	Navigate,
	useLocation,
	useParams,
} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Chairs from './Chairs/Chairs'
import Tables from './Tables/Tables'
import Sofas from './Sofas/Sofas'
import ContentNav from '../../../../components/ContentNav/ContentNav'
import { ProductsBlock, ProductWrapper } from './Products.styled'
import FilterAction from '../../../../components/FilterAction/FilterAction'
import { arrayNavTypeProducts } from '../../../../helpers/array/arrayNavTypeProducts'
import { arrayProducts } from '../../../../helpers/array/arrayProducts'

const Products = () => {
	const location = useLocation()
	const filterAll = arrayProducts.filter(type =>
		location.pathname.includes(`/products/${type.type}`)
	)
	const [currentIdProduct, setCurrentIdProduct] = useState(null)
	const currentPage = id => {
		setCurrentIdProduct(id)
	}
	const [search, setSearch] = useState('')
	const [filterProducts, setFilterProducts] = useState([])
	const [filterSelectProduct, setFilterSelectProduct] = useState('')
	const [load, setLoad] = useState(false)
	const handlerSelectProduct = e => {
		if (e.target.value === '') setFilterSelectProduct('')
		setFilterSelectProduct(e.target.value)
	}
	const handlerSearch = e => {
		setSearch(e.target.value)
	}

	const resetFilter = () => {
		setFilterProducts(filterProducts)
	}

	useEffect(() => {
		if (load) return
		const result = filterProducts.filter(s => {
			if (filterSelectProduct) return s.id === Number(filterSelectProduct)
			return s.name.toLowerCase().includes(search.toLowerCase())
		})
		setFilterProducts(result)
		setLoad(true)
	}, [search, filterSelectProduct, filterProducts, load])

	return (
		<>
			<ContentNav links={arrayNavTypeProducts} stretch />
			<ProductWrapper>
				<FilterAction
					products={filterAll}
					search={search}
					handlerSearch={handlerSearch}
					filterSelectProduct={filterSelectProduct}
					handlerSelectProduct={handlerSelectProduct}
					resetFilter={resetFilter}
				/>
				<ProductsBlock>
					<Routes>
						<Route
							path=":sofas"
							element={
								<Sofas
									products={filterAll}
									currentIdProduct={currentIdProduct}
									currentPage={currentPage}
								/>
							}
						/>
						<Route path=":chairs" element={<Chairs />} />
						<Route path=":tables" element={<Tables />} />
						<Route path="" element={<Navigate replace to="sofas" />} />
					</Routes>
				</ProductsBlock>
			</ProductWrapper>
		</>
	)
}

export default Products

// To reset the filtering by select in a React JS application, you can implement a function that clears the state value of the select input. Here is an example code snippet:

// const [selectedOption, setSelectedOption] = useState("");

// const handleResetFilter = () => {
//   setSelectedOption("");
// }

// return (
//   <div>
//     <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
//       <option value="">Select an option</option>
//       <option value="option1">Option 1</option>
//       <option value="option2">Option 2</option>
//       <option value="option3">Option 3</option>
//     </select>
//     <button onClick={handleResetFilter}>Reset Filter</button>
//   </div>
// )
// In this example, the selectedOption state is used to track the selected option in the select input. When the handleResetFilter function is called, it sets the
