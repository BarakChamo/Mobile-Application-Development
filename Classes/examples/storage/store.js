import Store from './flux'
import reducer from './reducer'

// Define initial store state
const initialState = {
    number: 10,
    items: [],
    user: null
}


// initialize store
const store = new Store(reducer, initialState)
export default store