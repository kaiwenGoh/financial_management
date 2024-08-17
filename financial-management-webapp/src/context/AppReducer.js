export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,  
                transactions: [...state.transactions, action.payload]
            }
        case 'SET_TRANSACTION':
            return{
                ...state,
                transactions: action.payload
            }
        case 'SET_ANALYSIS':
            return{
                ...state,
                analysis: action.payload
            }
        default:
            return state;
    }
}
  