const SelectProducts = ({
	products,
	filterSelectProduct,
	handlerSelectProduct,
}) => {
	return (
		<select
			value={filterSelectProduct}
			onChange={event => handlerSelectProduct(event)}
		>
			<option selected value={null}>
				Выберите продукт
			</option>
			{products.map(s => {
				return (
					<>
						<option key={s.id} value={s.id}>
							{s.name}
						</option>
					</>
				)
			})}
		</select>
	)
}

export default SelectProducts
