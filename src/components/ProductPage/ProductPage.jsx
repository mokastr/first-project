const ProductPage = ({ products, currentIdProduct }) => {
	return (
		<>
			{products.map(s => {
				if (currentIdProduct === s.id) return <>{s.name}</>
			})}
		</>
	)
}
export default ProductPage
