const initalState = []
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState,action) => {
    switch(action.type){
        case 'FATCH_ALL':
            return state=action.payload;
        case 'CREATE_POST':
            return state=[action.payload , ...state];
        case 'UPDATE':
        case 'LIKE_COUNT':
            return state.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'DELETE_POST':
            return state = state.filter(post => post._id !== action.payload)
        default: return state
    }
}