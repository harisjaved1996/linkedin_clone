import React from "react";

export const signUpUser = () => async (dispatch) => {
  try {
    const { data } = null;
    dispatch({ type: "FETCH_ALL_POSTS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    // console.log(user);
    // const { data } = await api.createPost(newpost);
    // console.log("===============================Action Creators creat post");
    // console.log(data);
    // console.log("===============================");
    dispatch({ type: "LOGOUT_USER", payload: null });
  } catch (error) {
    console.log(error);
  }
};

// export const deletePostAction = (id) => async (dispatch) => {
//   try {
//     await api.deletePost(id);
//     console.log("===============================Deete Post Action Fired");

//     console.log("===============================");
//     dispatch({ type: "DELETE_POST", payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const likePostAction = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.likePost(id);
//     console.log("===================post action");
//     console.log(data);
//     console.log("===============================");
//     dispatch({ type: "PostLike", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const updatePostAction = (id, post) => async (dispatch) => {
//   try {
//     const { data } = await api.updatePost(id, post);
//     console.log("===================post action");
//     console.log(data);
//     console.log("===============================");
//     dispatch({ type: "updatePost", payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
// findPostPostAction
// export const findPostPostAction = (id) => async (dispatch) => {
//   try {
//     dispatch({ type: "postFind", payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const resetFindPostAction = () => async (dispatch) => {
//   try {
//     dispatch({ type: "resetFindPost", payload: null });
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const togglePostModalAction = () => async (dispatch) => {
//   try {
//     dispatch({ type: "togglePostModal", payload: null });
//   } catch (error) {
//     console.log(error);
//   }
// };
