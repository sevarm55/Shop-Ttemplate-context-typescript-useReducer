import { useContext } from 'react'
import { IProduct } from '../context/types'
import { ProductsContext } from '../context/context'

const BasketItem = (props: IProduct) => {
    const context = useContext(ProductsContext)
    if(!context) {
        throw new Error("Context not found")
    }
    const {dispatch} = context
    
    
	const { id, name, price, count } = props
	return (
		<tr key={id}>
			<td>{name}</td>
			<td>{price} $</td>
			<td>{count || 1}</td>
			<td>{(count || 1) * price} $</td>

			<td
				style={{
					display: 'flex',
					gap: '4px',
				}}
			>
				<button onClick={() => dispatch({type: "countMinus", payload: id})} className="btn btn-outline-info">-</button>
                <button onClick={() => dispatch({type: "countPlus", payload:id})} className="btn btn-outline-info">+</button>
                <button onClick={() => dispatch({type: "deleteProduct", payload: id})} className="btn btn-outline-info">x</button>
			</td>
		</tr>
	)
}

export default BasketItem
