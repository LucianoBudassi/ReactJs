import CardWidget from "../CardWidget/CardWidet";

const NavBar = () => {
    return (
        <nav>
            <h3>Bienvenidos</h3>
            <div>
                <button>Inicio</button>
                <button>Catalogo</button>
                <button>Contacto</button>
            </div>
            <CardWidget/>
        </nav>

    )

}

export default NavBar;