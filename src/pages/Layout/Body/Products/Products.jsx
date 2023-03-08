import { Route, Routes, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Chairs from './Chairs/Chairs'
import Tables from './Tables/Tables'
import Sofas from './Sofas/Sofas'
import ContentNav from '../../../../components/ContentNav/ContentNav'
import { arrayProducts } from '../../../../helpers/array/arrayProducts'
import { arraySofas } from '../../../../helpers/array/arraySofas'
import { ProductsBlock, ProductWrapper } from './Products.styled'
import FilterAction from '../../../../components/FilterAction/FilterAction'

const Products = () => {
	const [currentIdProduct, setCurrentIdProduct] = useState(null)
	const currentPage = id => {
		setCurrentIdProduct(id)
	}
	const [search, setSearch] = useState('')
	const [filterProducts, setFilterProducts] = useState([])
	const [filterSelectProduct, setFilterSelectProduct] = useState('')
	console.log('Products ~ filterSelectProduct:', filterSelectProduct)

	const handlerSelectProduct = e => {
		setFilterSelectProduct(e.target.value)
	}
	console.log(filterProducts)
	const handlerSearch = e => {
		setSearch(e.target.value)
	}

	const resetFilter = () => {
		setFilterProducts(arraySofas)
	}
	useEffect(() => {
		setFilterProducts(arraySofas)
	}, [])

	useEffect(() => {
		const result = arraySofas.filter(s => {
			if (filterSelectProduct) return s.id === Number(filterSelectProduct)
			return s.name.toLowerCase().includes(search.toLowerCase())
		})
		setFilterProducts(result)
	}, [search, filterSelectProduct])

	return (
		<>
			<ContentNav links={arrayProducts} stretch />
			<ProductWrapper>
				<FilterAction
					products={arraySofas}
					search={search}
					handlerSearch={handlerSearch}
					filterSelectProduct={filterSelectProduct}
					handlerSelectProduct={handlerSelectProduct}
					resetFilter={resetFilter}
				/>
				<ProductsBlock>
					<Routes>
						<Route
							path="sofas"
							element={
								<Sofas
									products={filterProducts}
									currentIdProduct={currentIdProduct}
									currentPage={currentPage}
								/>
							}
						/>
						<Route path="chairs" element={<Chairs />} />
						<Route path="tables" element={<Tables />} />
						<Route path="" element={<Navigate replace to="sofas" />} />
					</Routes>
				</ProductsBlock>
			</ProductWrapper>
		</>
	)
}

export default Products
