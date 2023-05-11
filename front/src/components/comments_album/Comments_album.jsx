import Comment_album from "../comment_album/Comment_album";
import "./comments_album.scss";

const Comments_album = () => {
  //TEMPORARY
  const comment_album = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
        "https://t3.ftcdn.net/jpg/02/48/42/64/240_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg",
    },
  ];

  return <div className="posts">
    {comment_album.map(comment_album=>(
      <Comment_album comment_album={comment_album} key={comment_album.id}/>
    ))}
  </div>;
};

export default Comments_album;
