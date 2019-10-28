import { AsyncStorage } from 'react-native'

function saveToLocalStorage(state) {
    AsyncStorage.setItem("STATE", JSON.stringify(state))
}

export default function reducer(state, action) {
    // console.log(state, action.type, action.props)
 
    let newState = {}

    switch (action.type) {
        case 'HYDRATE':
            return {
                ...state,
                ...action.props
            }

        case 'ADD_ITEM':
            const items = state.items
            items.push(action.props)
            return {
                ...state,
                items
            }

        case 'RANDOM_NUMBER':
            const newRandomNumber = Math.floor(Math.random() * 100)

            newState = {
                ...state,
                number: newRandomNumber
            }

            break;

        case 'MULTIPLY_TEN':

            newState = {
                ...state,
                number: state.number * 10
            }

            break;
        
        case 'SET_NUMBER': 

            newState = {
                ...state,
                number: action.props.value
            }

            break;
    
        default:
            newState = state
            break;
    }

    // we're after the switch statement
    // newState is already updated here
    saveToLocalStorage(newState)

    return newState
}