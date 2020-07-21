export default (state, action) => {
    switch(action.type){

        case 'DELETE_CODE':
            return {
                ...state,
                codes: state.codes.filter(code => code.id !== action.payload)
            }
        default:
            return state
    }
}