const SearchProducts = ({ search, handlerSearch }) => {
	return (
		<div>
			<input
				style={{ height: '40px' }}
				value={search}
				onChange={event => handlerSearch(event)}
			/>
		</div>
	)
}

export default SearchProducts
