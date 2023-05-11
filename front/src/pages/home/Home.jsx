import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import Image_list from "../../components/Imagelist/Image_list"
import {Avatar, Box } from '@mui/material';

const Home = () => {
  return (
    <div className="home">
      <Image_list/>
    </div>
  )
}
export default Home