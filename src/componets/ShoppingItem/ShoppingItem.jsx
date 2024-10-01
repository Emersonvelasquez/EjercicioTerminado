import { useContext } from "react";
import { MyContex } from "../Context/ShoppingListProvider";

const ShoppingItem = () => {
    const { nuevaLista, eliminar, terminado } = useContext(MyContex)
    return (
        <>
            {
                nuevaLista?.map((tarea, index) => (
                    <li key={index}>
                        <span
                            style={{
                                textDecoration: tarea.completada ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => terminado(index)}>{tarea.texto}</span>
                        <button onClick={() => eliminar(index)} >Eliminar</button>
                    </li>
                ))
            }
        </>
    );
}

export default ShoppingItem;