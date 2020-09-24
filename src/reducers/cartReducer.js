
let items = JSON.parse(localStorage.getItem('cart')) || []

let myState = {
    products: items,
    count: items.length
}

const cartReducer = (state = myState, action) => {

    switch(action.type) {
            
            case 'ADDITEM': {
                return { ...state, products: action.payload, count: action.payload.length }
            }

            default: {
                return state
            }

        }
}

export default cartReducer;