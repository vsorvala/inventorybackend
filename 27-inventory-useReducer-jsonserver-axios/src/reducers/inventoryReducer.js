import { FETCH_ACTIONS } from "../actions"

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const inventoryReducer = (state, action) => {

  switch (action.type) {
    case FETCH_ACTIONS.PROGRESS: {
      return {
        ...state,
        loading: true,
      }
    }

    case FETCH_ACTIONS.SUCCESS: {
      return {
        ...state,
        loading: false,
        items: action.data,
      }
    }

    case FETCH_ACTIONS.ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      }

    }
    case "ADD_ITEM":
      {
        console.log(state.items)
        const item = action.payload 
        console.log("rr", item)
        console.log("ar ", [...state.items, item])
        const items = [...state.items, item]
        return { ...state, items };
      }
    case "MODIFY_ITEM":
      {
        const changedItem = action.payload
        
        const items = state.items.map((item)=>changedItem.id===item.id?changedItem:item)
        return { ...state, items };
      }
    case "DELETE_ITEM":
      {
        const id = action.payload
        
        const items = state.items.filter(item=>item.id!==id)
        return { ...state, items };
      }

    default: {
      return state;
    }
  }

}

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_TEXT": {
      const data = { ...state, [action.field]: action.payload }
      console.log("INPUT_text: ", data)
      return data
    }
    case "MODIFY_ITEM": {
      const data = { ...state, [action.field]: action.payload }
      console.log("data: ", data)
      return data
    }

    default:
      return state;
  }
};

export { inventoryReducer, initialState, formReducer };