import { useState } from "react"
import GlobalStateContext from "../Global/GlobalStateContext"

const GlobalState = ({ children }) => {
    const [restaurant, setRestaurante] = useState({})
    
    const addToCart = (product,quantity, newRestaurante) =>{
        if(newRestaurante.id === restaurant.id){
            setCart([...cart,{...product,quantity}])
            setRestaurante(newRestaurante)

        }else{
            setCart([{...product,quantity}])

        }
        setCart([...cart,{...product,quantity}])
    }


    const removeToCart = (id) =>{
        const index = cart.findIndex((product)=> product.id === id)
        const newCart =[...cart]
        newCart.splice(index,1)
        setCart(newCart)
    }
    const [cart, setCart] = useState([])
    const states = { cart }
    const requests = {addToCart,removeToCart}
    const setters = {}
    console.log(cart)

    return <GlobalStateContext.Provider value={{ states, requests, setters }}>
        {children}
    </GlobalStateContext.Provider>

}


export default GlobalState