import { ProductsContext } from '../context/context'
import { IProduct } from '../context/types'
import { useContext } from 'react'

const Product = (props: IProduct) => {
	const { name, photo, price,id } = props
 
    const context = useContext(ProductsContext)
    if(!context) {
        throw new Error("Context not found")
    }
    const {dispatch} = context
    
    
	return (
		<div className="col-md-4">
			<img
				src={photo}
				style={{ width: 200, height: 200, objectFit: 'cover' }}
			/>
			<p>{name}</p>
			<p>
				<strong>{price} USD</strong>
			</p>
			<button onClick={() => {
			dispatch({type: "movToCart", payload:id })}} className="btn btn-primary">move</button>
		</div>
	)
}

export default Product
