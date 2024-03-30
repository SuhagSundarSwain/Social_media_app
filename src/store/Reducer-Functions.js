export function selectedTabReducer(state, tabName) {
  return tabName;
}

export function postListReducer(state, action) {
  if (action.type === "CREATE_POST") {
    return [action.payload.newPost, ...state];
  }
  if (action.type === "DELETE_POST") {
    return state.filter((f) => f.id !== action.payload.postId);
  }
  if (action.type === "ADD_INITIAL_POSTS") {
    return action.payload.postLists;
  }
  return state;
}
