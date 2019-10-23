import Store from './flux'
import reducer from './reducer'

// Define initial store state
const initialState = {
    number: 10
}


// initialize store
const store = new Store(reducer, initialState)
export default store