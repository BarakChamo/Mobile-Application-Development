export default function reducer(state, action) {
    console.log(action.type, action.props)
 
    switch (action.type) {
        case 'RANDOM_NUMBER':
            const newRandomNumber = Math.floor(Math.random() * 100)

            return {
                ...state,
                number: newRandomNumber
            }

        case 'MULTIPLY_TEN':

            return {
                ...state,
                number: state.number * 10
            }
        
        case 'SET_NUMBER': 

            return {
                ...state,
                number: action.props.value
            }
    
        default:
            return state
    }
}