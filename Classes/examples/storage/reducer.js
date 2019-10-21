export default function reducer(state, { type, props, asyncType }) {
    switch (type) {
        case 'RANDOM_NUMBER':
            const newRandomNumber = Math.floor(Math.random() * 100)

            return {
                ...state,
                number: newRandomNumber
            }
    
        default:
            return state
    }
}