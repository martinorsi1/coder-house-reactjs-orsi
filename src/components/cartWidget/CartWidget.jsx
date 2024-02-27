import './cartWidget.css'
const CartWidget = () => {
    return(
        <div className='cartContainer'>
            <img className='cart' src="./img/carrito.png" alt="carrito"/>
            <span className='badge'>7</span>
        </div>
    )
}

export default CartWidget