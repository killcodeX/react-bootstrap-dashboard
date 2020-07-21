export default (state, action) => {
    switch(action.type){

        case 'GET_CANDIDATES':
        return {
            ...state,
            loading: false,
            candidates: action.payload
        }
        case 'UPDATE_CANDIDATE':
        return {
            ...state,
            loading: false,
            candidates: action.payload
        }
        default:
            return state
    }
}