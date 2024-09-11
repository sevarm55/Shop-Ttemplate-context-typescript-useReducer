import { useContext, useEffect, useState } from 'react'
import BasketItem from './BasketItem'
import { ProductsContext } from '../context/context'
import { ITotalState } from '../context/types'

const Basket = () => {
	const [total, setTotal] = useState<ITotalState>(0)
	const context = useContext(ProductsContext)
	if (!context) {
		throw new Error('Context not found')
	}
	const {state: { basket }} = context

	useEffect(() => {
		setTotal(basket.reduce((total,prod) => total + (prod.price * (prod.count || 1)), 0))
	},[basket])

	return (
		<div className="col-md-5">
			<h4>Total: {total} $</h4>
			<div
				style={{
					position: 'sticky',
					top: '20px',
				}}
			>
				<table className="table table-dark table-bordered">
					<thead>
						<tr>
							<th>product</th>
							<th>price</th>
							<th>count</th>
							<th>subtotal</th>
							<th>actions</th>
						</tr>
					</thead>
					<tbody>
						{basket.map((elm) => (
							<BasketItem key={elm.id} {...elm} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Basket
