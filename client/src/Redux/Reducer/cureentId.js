const initalState = '';
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state=initalState , action) {
    switch(action.type){
        case 'SET_ID':
            return state=action.payload
        default: return state
    }
}