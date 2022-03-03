import React from "react";

const initialState = {
  user: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL_POSTS":
      return { ...state, posts: action.payload, loading: false };
    case "LOGIN_USER":
      // console.log(state);
      return { ...state, user: action.payload };

    case "LOGOUT_USER":
      return { ...state, user: action.payload };
    // state.posts.push(action.payload);
    // console.log("State",state);
    // console.log(state);
    // return state;
    case "resetFindPost":
      const findPost = { id: null, find: false };
      return { ...state, findPost: findPost };
    case "togglePostModal":
      return { ...state, postModal: !state.postModal };
    case "DELETE_POST":
      const filterPosts = state.posts.filter(
        (post) => post._id !== action.payload
      );
      return { ...state, posts: filterPosts };
    case "PostLike":
      const updatePosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      return { ...state, posts: updatePosts };
    case "updatePost":
      const updatedPosts = state.posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
      return { ...state, posts: updatedPosts };
    case "postFind":
      return { ...state, findPost: { id: action.payload, find: true } };
    default:
      return state;
  }
};
//

export default user;
