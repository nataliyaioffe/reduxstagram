// A reducer takes in 2 things:
// 1. The action (Info about what happened)
// 2. Copy of current state

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;