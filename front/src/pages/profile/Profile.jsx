import "./profile.scss";
import Stories from "../../components/stories/Stories"
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import Image_list from "../../components/Imagelist/Image_list_prof"
import imgbg from "../../assets/img1.jpg";
import profile_image from "../../assets/kermit.jpg";
import { observer } from "mobx-react-lite";

const Profile = observer(() => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src={imgbg}
          alt=""
          className="cover"
        />
        <img
          src={profile_image}
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">           
          </div>
          <div className="center">
            <span>John Doe</span>
            <div>
                <a> Info about user</a>
            </div>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Russia</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Imgpedia.com</span>
              </div>
            </div>
          </div>
          <div className="right">
          </div>
        </div>
        <Image_list/>
      </div>
    </div>
  );
});

export default Profile;
