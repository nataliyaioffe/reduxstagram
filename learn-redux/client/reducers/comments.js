// A reducer takes in 2 things:
// 1. The action (Info about what happened)
// 2. Copy of current state


function postComments(state = [], action) {


  switch (action.type) {
    case "ADD_COMMENT":
    // return existing state + new comment
    console.log(state);
      return [
        ...state, {
          user: action.author,
          text: action.comment
        }
      ]
    case "REMOVE_COMMENT":
      return [
        // from the start to the one we want to delete
        ...state.slice(0,action.i),
        // after the deleted one, to the end
        ...state.slice(action.i +1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if (typeof action.postId !== "undefined") {
    return {
      // take the current state
      ...state, 
      // overwrite this post with a new one
      [action.postId]: postComments(state[action.postId], action)
    }

  }
  return state;
}

export default comments;
