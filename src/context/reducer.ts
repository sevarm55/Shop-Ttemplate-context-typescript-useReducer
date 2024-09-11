import { IAction, IState } from './types'

export const reducer = (state: IState, action: IAction): IState => {
	switch (action.type) {
		case 'movToCart':
            const found = state.basket.find(product => product.id == action.payload as number)
            if(found) {
                return {
                    ...state,
                    basket: state.basket.map(product => product.id == action.payload
                        ? {...product, count: (product.count || 1) + 1}
                        : product
                    )
                }
            }else {
                const product = state.products.find(product => product.id == action.payload as number)
                if(product) {
                    return {
                        ...state,
                        basket:[...state.basket,{...product, count: 1}]
                    }
                }
            }
        case "countPlus" :
            return {
                ...state,
                basket:state.basket.map(product => 
                    product.id === action.payload
                    ? {...product, count: (product.count || 1) + 1}
                    : product
                )
            }
        case "countMinus" :
            return {
                ...state,
                basket:state.basket.map(product => 
                    product.id === action.payload
                    ? {...product, count: (product.count || 1) - 1}
                    : product
                )
            }
        case "deleteProduct":
            return {
                ...state,
                basket:state.basket.filter(product => product.id !== action.payload)
            }
		default:
			return state
	}
}
