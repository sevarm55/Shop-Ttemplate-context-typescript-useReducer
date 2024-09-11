import { useContext } from 'react'
import { ProductsContext } from '../context/context'
import Product from './Product'

const ProductList = () => {
	const context = useContext(ProductsContext)
	if (!context) {
		throw new Error('Context not found')
	}
	const { state: { products }} = context

	return (
		<div className="col-md-7">
			<p>ProductList</p>
			<div className="row">
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</div>
	)
}

export default ProductList
