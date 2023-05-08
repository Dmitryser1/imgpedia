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
import Posts from "../../components/posts/Posts"

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://www.readingmuseum.org.uk/sites/default/files/styles/main_image__r/public/images/Trinity%20I%20Albert%20Irvin%20%281%29%20%281%29.jpg?itok=UzINy2yO"
          alt=""
          className="cover"
        />
        <img
          src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">           
          </div>
          <div className="center">
            <span>Joe Who</span>
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
