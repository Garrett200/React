import React, { useState } from 'react';

function Counter() {
    const [cart, setCart] = useState({
        item: "apple",
        quantity: 0,
    });

    function removeApple() {
        // Use a callback to get the previous value
        // Spread out all the properties of the prev state
        // Only chage the property that you need to change
        setCart((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity - 1,
        }))
    }
    
    function addApple() {

        setCart((prevCart) => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    return (
        <div>
            <button onClick={removeApple}>-</button>
            {cart.quantity}
            {cart.item}
            <button onClick={addApple}>+</button>
        </div>
    )
}

export default Counter;