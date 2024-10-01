import { useContext } from 'react';
import './index.css';
import { MyContex } from '../Context/ShoppingListProvider';
const AddItemForm = () => {
    const { actualizar, verificar, guardar } = useContext(MyContex)
    return (
        <>
            {
                <div>
                    <h3>Lista</h3>
                    <input type="text" value={guardar} onChange={(e) => actualizar(e.target.value)} />
                    <button onClick={() => verificar()}>agregar</button>
                </div>
            }
        </>
    );
}
export default AddItemForm