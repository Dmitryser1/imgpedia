import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import "./posts.scss";
import { getAllAppeals } from "../../http/AlbumAPI";
import { Container } from "react-bootstrap";
import { Context } from "../../index";

const Posts = () => {
  //TEMPORARY
  const {user} = useContext(Context)
  const [appeals,setAppeals]= useState([])

  const KrutaiaFunction = async () => {
    let data
    data = await getAllAppeals();
    console.log(data)
    user.setAppeal(data)
    console.log(user.getAppeal().rows[0].text)
    let len = (user.getAppeal().rows.length)
    console.log(len)
    var appeals = []
    for (var i = 0; i < len; i += 1) {
      console.log(i)
      appeals.push(user.getAppeal().rows[i])
    }
    setAppeals(appeals)
    console.log(appeals)

  };


  useEffect(() => {
    KrutaiaFunction()
  }, [])
  return <div className="posts">
 {appeals.map(appeal=>(
      <Post post={appeal} key={appeal.id}/>
 ))}
  </div>;
};

export default Posts;
