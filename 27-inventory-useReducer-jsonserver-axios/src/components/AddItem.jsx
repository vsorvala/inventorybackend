import axios from "axios"
//eslint korjattava:
const AddItem = ({ formData, dispatch, dispatchFormAction }) => {
    
  const handleSubmit = async (event) => {
    event.preventDefault()

    //alert(JSON.stringify(inputs));
    const response = await axios.post("/api/items", formData)
    console.log("id ", response.data)
    dispatch({ type: "ADD_ITEM", payload: response.data })
  }

  const handleChange = (event) => {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    //setInputs(values => ({...values, [name]: value}))
    dispatchFormAction({
      type: "INPUT_TEXT",
      field: name,
      payload: value,
    })
  }

  return (
    <div>
      <h2 className="text-3xl my-4">Add Item</h2>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="picture"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {" "}
            Choose a picture:{" "}
          </label>

          <select
            name="picture"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="🍌">🍌</option>
            <option value="🍓">🍓</option>
            <option value="🍒">🍒</option>
            <option value="💎">💎</option>
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter Name:
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter price:
          </label>
          <input
            name="price"
            type="number"
            min="0"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Enter quantity:
          </label>
          <input
            name="quantity"
            type="number"
            min="0"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Type:
          </label>
          <select
            name="type"
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="fruit">fruits</option>
            <option value="vegetable">vegetables</option>
            <option value="foods">foods</option>
          </select>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Item
        </button>
      </form>
    </div>
  )
}

export default AddItem
