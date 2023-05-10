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
      <Share/>
      <Posts/>
      <Box
        component="img"
        sx={{
          height: 1000,
          width: 50,
          
        }}
        alt="damn igor's pic."
        src="https://sun7-18.userapi.com/impg/zALbsVUrFDmhK-emYSbkjEnxLASWsqvHT2PXqg/yDSTdlkoo-E.jpg?size=1600x900&quality=96&sign=2f7127f28bbbbf715b8175fdec3c9c7e&type=album"
      />
    </div>
  )
}

export default Home