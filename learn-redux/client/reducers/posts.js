// A reducer takes in 2 things: 
// 1. Copy of current state
// 2. The action (Info about what happened)

function posts(state = [], action) {

    switch(action.type) {
        case "INCREMENT_LIKES" :
        const i = action.index;
        return [
            ...state.slice(0,i), // before the one we are updating
            {...state[i], likes:state[i].likes + 1}, // update the one post we need updated
            ...state.slice(i + 1 ), // after the one we are udpdating
        ]
        // return the updated state
        default: 
            return state;
    }

}

export default posts; 