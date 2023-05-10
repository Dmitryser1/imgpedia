import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import Image_list from "../../components/Imagelist/Image_list"

const Home = () => {
  return (
    <div className="home">
      <Stories/>
      <Share/>
      <Image_list/>
      <Posts/>
    </div>
  )
}

export default Home