import { useReducer, useEffect } from "react"
import {
  inventoryReducer,
  initialState,
  formReducer,
} from "../reducers/inventoryReducer"
import { FETCH_ACTIONS } from "../actions"
import AddItem from "./AddItem"

import axios from "axios"

const baseUrl = "/api/items"

const InventoryList = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  }

  const delete_style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
    color: "red",
    float: "right"
  }
  //Tämä liittyy listanhakuun, aiemmin tehty.
  const [state, dispatch] = useReducer(inventoryReducer, initialState)

  const { items, loading, error } = state

  console.log(items, loading, error)

  useEffect(() => {
    dispatch({ type: FETCH_ACTIONS.PROGRESS })

    const getItems = async () => {
      try {
        let response = await axios.get(baseUrl)
        if (response.status === 200) {
          dispatch({ type: FETCH_ACTIONS.SUCCESS, data: response.data })
        }
      } catch (err) {
        console.error(err)
        dispatch({ type: FETCH_ACTIONS.ERROR, error: err.message })
      }
    }

    getItems()
  }, [])

  //const [inputs, setInputs] = useState({});

  const [formData, dispatchFormAction] = useReducer(formReducer, {
    picture: "🍌",
    name: "",
    price: 0,
    quantity: 0,
    type: "fruits",
  })

  console.log("Current Data", formData)

  const changeQuantity = async (id, quantity) => {
    const response = await axios.get(baseUrl + "/" + id)
    console.log("item quantity: ", response.data)
    const itemToChange = response.data
    const sum = Number(itemToChange.quantity) + Number(quantity)
    const changedItem = {
      ...itemToChange,
      quantity: Number(sum),
    }
    await axios.put(baseUrl + "/" + id, changedItem)
    dispatch({ type: "MODIFY_ITEM", payload: changedItem })
  }

  const deleteItem = async (id) => {
    const response = await axios.delete(baseUrl + "/" + id)
    console.log("item to delete ", response.data)
    dispatch({ type: "DELETE_ITEM", payload: id })
  }

  return (
    <>
      <div className="flex flex-col m-8 w-2/5">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="flex flex-col">
            <h2 className="text-3xl my-4">Item List</h2>
            {items.map((item) => (
              <li
                className="flex flex-col p-2 my-2 bg-gray-200 border rounded-md"
                key={item.id}
              >
                <p className="my-2 text-xl">
                  <strong>{item.name}</strong> {item.picture} of type
                  <br />
                  <strong>{item.type}</strong> costs <br />
                  <strong>{item.price}</strong> INR/KG.
                </p>
                <p className="mb-2 text-lg">
                  Available in Stock:
                  <button
                    onClick={() => changeQuantity(item.id, -1)}
                    style={style}
                  >
                    -1
                  </button>
                  <button
                    onClick={() => changeQuantity(item.id, -5)}
                    style={style}
                  >
                    -5
                  </button>
                  <strong>{item.quantity}</strong>
                  <button
                    onClick={() => changeQuantity(item.id, 1)}
                    style={style}
                  >
                    +1
                  </button>
                  <button
                    onClick={() => changeQuantity(item.id, 5)}
                    style={style}
                  >
                    +5
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    style={delete_style}
                  >
                    X
                  </button>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <AddItem
        formData={formData}
        dispatch={dispatch}
        dispatchFormAction={dispatchFormAction}
      />
    </>
  )
}

export default InventoryList
