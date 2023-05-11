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
import imgbg from "../../assets/img1.jpg";
import profile_image from "../../assets/kermit.jpg";

const Profile = () => {
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
            <span>Игорь Барсуков</span>
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
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Stories/>
      <Posts/>
      </div>
    </div>
  );
};

export default Profile;
