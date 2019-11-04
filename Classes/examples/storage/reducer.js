import { AsyncStorage } from 'react-native'
import { firestore } from './firebase'

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

        case 'AUTH':
            return {
                ...state,
                user: action.props
            }
        case 'ADD_ITEMS':
            var items = state.items
            return {
                ...state,
                items: items.concat(action.props)
            }

        case 'SET_ITEMS':
                var items = state.items
                return {
                    ...state,
                    items: action.props
                }
        
        case 'ADD_ITEM':
            var items = state.items

            // add item locally
            items.push(action.props)

            // add item remotely
            firestore.collection('items').add(action.props)

            return {
                ...state,
                items
            }
        
        case 'DELETE_ITEM':
            // delete item from local store
            var items = state.items.filter(item => item.id != action.props.id)
            
            // delete from firestore
            firestore.collection('items').doc(action.props.id).delete()

            return {
                ...state,
                items
            } 

        case 'SET_ITEM_COLOR':
            firestore.collection('items').doc(action.props.id).update({color: action.props.color})

            // update values in place
            var items = state.items.map(item => {
                if(item.id == action.props.id) {
                    item.color = action.props.color
                }

                return item
            })

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