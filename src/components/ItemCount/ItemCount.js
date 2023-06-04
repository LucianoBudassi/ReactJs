import { useState } from "react"



const ItemCount = ({ stock, initial, onAdd }) => {
    const [cantidad, setCantidad] = useState(initial)

    const incrementar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }

    const decrementar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }
    return (
        <div className="contador">
            <div className="controles">
                <button className="Button" onClick={decrementar}>-</button>
                <h4 className="Number">{cantidad}</h4>
                <button className="Button" onClick={incrementar}>+</button>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(cantidad)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
export default ItemCount;