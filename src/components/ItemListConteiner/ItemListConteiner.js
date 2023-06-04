import ItemCount from "../ItemCount/ItemCount"

const ItemListConteiner = ({ greeting }) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount initial={1} stock={10} onAdd={cantidad => console.log('Cantidad agregada', cantidad)}/>
        </div>

    )

}

export default ItemListConteiner