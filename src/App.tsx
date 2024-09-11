import { ProductsContext, initialState } from './context/context'
import { useReducer } from 'react'
import ProductList from './components/ProductList'
import Basket from './components/Basket'
import { reducer } from './context/reducer'

import './App.css'

function App() {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<>
			<h1>Online Shop</h1>
			<div className="row">
				<ProductsContext.Provider value={{ state, dispatch }}>
					<ProductList />
					<Basket />
				</ProductsContext.Provider>
			</div>
		</>
	)
}

export default App
