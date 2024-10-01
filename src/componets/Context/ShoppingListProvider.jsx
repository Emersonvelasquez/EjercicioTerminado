import { createContext, useState } from "react";

export const MyContex = createContext()
export const ShoppingListProvider = ({children}) => {
const [guardar , setGuardar] = useState('')
const [nuevaLista , setNuevaLista] = useState([])

    const actualizar = (e) => {
        setGuardar(e)
    }

    const verificar = () => {
        if(guardar.trim === '')return
        const nuevaTarea = { texto:guardar , completada : false}
        setNuevaLista([...nuevaLista , nuevaTarea])
        setGuardar('')
    }
    
    const eliminar = (e) => {
        const filtrar = nuevaLista.filter((item , index) => e != index)
        setNuevaLista(filtrar)
    }

    const terminado = (e) => {
        const nuevo =  nuevaLista.map((item , index) => {
            if(e === index){
                return {...item , completada: !item.completada}
            }
            return item
        })
        setNuevaLista(nuevo)
    }

    return (
        <>
        <MyContex.Provider value={{guardar , setGuardar , nuevaLista , setNuevaLista , actualizar , verificar ,
        eliminar , terminado
        }}>
            {children}
        </MyContex.Provider>
        </>
    );
}