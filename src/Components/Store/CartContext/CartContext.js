import React from 'react'

const CartContext = React.createContext(

    {
        cartItems: [],
        addtoCartOne: () => { },
        addtoCartTwo: () => { },
        addtoCartThree: () => { },
    }
)


export default CartContext;