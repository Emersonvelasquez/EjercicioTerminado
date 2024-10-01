import AddItemForm from "./componets/AddItemForm/AddItemForm"
import { ShoppingListProvider } from "./componets/Context/ShoppingListProvider"
import ShoppingItem from "./componets/ShoppingItem/ShoppingItem"

function App() {


  return (
    <>
      <ShoppingListProvider>
    <AddItemForm/>
    <ShoppingItem/>
      </ShoppingListProvider>
    </>
  )
}
export default App