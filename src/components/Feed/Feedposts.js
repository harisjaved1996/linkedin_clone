import React, { useEffect, useState } from "react";
import Feedpostaction from "./Feedpostaction";

import { db } from "../../Firebase";
import avatar from "../../assets/images/user.png";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import SendIcon from "@mui/icons-material/Send";

import "./Feedposts.css";
const Feedposts = () => {
  const [postsData, setPostsData] = useState([]);

  const fetchPosts = async () => {
    db.collection("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) =>
        setPostsData(
          snapshot.docs.map((doc) => ({
            avatar: doc.data().avatar,
            description: doc.data().description,
            postMessage: doc.data().postMessage,
            name: doc.data().name,
            createAt: doc.data().createdAt,
            //   id: doc.id,
          }))
        )
      );
  };

  /*
  //
  const fetchPosts = async () => {
    const response = await db
      .collection("posts")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        setPostsData(
          docs.map((doc) => ({
            postMessage: doc.data().postMessage,
          }))
        )
      )
      .catch((error) => console.log(error));
  };
  */
  useEffect(() => {
    fetchPosts();
  }, []);
  //   useEffect(() => {
  //     console.log(postsData);
  //   }, [postsData]);
  return (
    <div>
      {postsData &&
        postsData.map((data, index) => (
          <div className="userPostInformation" key={index}>
            <div className="userPostInformationflex">
              <p className="user-avatar">
                <img
                  alt="user "
                  src={data.avatar ? `${data.avatar}` : avatar}
                />
              </p>
              <div className="userBasicInformation">
                <p className="user-name">{data.name}</p>
                <p className="user-description">{data.description}</p>
              </div>
            </div>
            <p className="user-message">{data.postMessage}</p>
            <div className="postActions">
              <Feedpostaction icon={ThumbUpAltOutlinedIcon} title="Like" />
              <Feedpostaction
                icon={InsertCommentOutlinedIcon}
                title="Comment"
              />
              <Feedpostaction icon={ArrowRightAltIcon} title="Share" />
              <Feedpostaction icon={SendIcon} title="Send" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Feedposts;
