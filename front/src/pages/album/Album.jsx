import "./album.scss";
import Stories from "../../components/stories_album/Stories";
import imgbg from "../../assets/img1.jpg";
import { Typography, Avatar, Box, Tab, Tabs, Card, CardContent, Button, CardActions } from "@mui/material";
import profile_image from "../../assets/kermit.jpg";
import InfoIcon from '@mui/icons-material/Info';
import Dialog from "../../components/dialog/Dialog";
import Upload from "../../components/uploadimage/UploadImage"
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share"
import Appeal from "../../components/appeal/Appeal"


  

const Album = () => {

    const tags = ['digital_art', 'drawning', 'fantasy', 'Digital 2D', 'Concept Art']
    
    return (
        <div className="album">
            <div className="top_panel">
                <div className="left_panel">
                    
                    <div className="avatar">
                        <Tabs value={1} aria-label="disabled tabs example">
                            <InfoIcon sx={{mt:1.6, px:1}}/>
                            <Tab label= "Information" disabled /> 
                        </Tabs>
                    <Avatar src={profile_image} className="avatar"/>
                    </div>
                    <div className="info">
                                        <Card sx={{ minWidth: 275 }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            Игорь
                                            </Typography>
                                            
                                            <Typography variant="body2" sx={{mt:10}}>
                                            Добрый день, я не знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсети не знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсети
                                            </Typography>
                                            <Box sx={{ boxShadow: 0,  displayPrint: 'inline', px:5 }} >
                                                <ul>
                                                    {tags.map((person, index)=>
                                                    <li key = {index}>{person}</li>)}
                                                </ul>
                                            </Box>
                                        </CardContent>
                                        <CardActions>
                                            <div className="dialog_icon">
                                                <Dialog/>
                                                <Upload/>
                                            </div>
                                        </CardActions>
                                        </Card>
                    
                    </div>
                    <div className="Posts">
                    <Tabs value={1} aria-label="disabled tabs example">
                            <Tab label= "Posts" disabled /> 
                        </Tabs>
                        <Share/>
                        <Posts/>
                        <Appeal/>
                    </div>
                </div>
                    <div className="image_list">
                        <Stories/>
                    </div>
            </div>

        </div>

    );
    
};




export default Album;

//<Box sx={{ width: '100%', maxWidth: 500, mt: 10, px : 27, border: 1} }>
//<Typography variant="p" component="p" >
//Добрый день, я не знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсети не знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсети
//</Typography>
//</Box>
//<Typography variant="body2" sx={{mt:10, color: 'gray'}}>
//#digital_art #drawning #fantasy #Digital 2D #Concept Art
//</Typography>