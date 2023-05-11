import "./album.scss";
import Image_list_album from "../../components/Imagelist/Image_list_album";
import imgbg from "../../assets/img1.jpg";
import { Typography, Avatar, Box, Tab, Tabs, Card, CardContent, Button, CardActions } from "@mui/material";
import profile_image from "../../assets/kermit.jpg";
import InfoIcon from '@mui/icons-material/Info';
import Dialog from "../../components/dialog/Dialog";
import Upload from "../../components/uploadimage/UploadImage"
import Comments_album from "../../components/comments_album/Comments_album";
import Share from "../../components/share/Share"
import Appeal from "../../components/appeal/Appeal"
import ImageListItem from '@mui/material/ImageListItem';


  

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
                        <Comments_album/>
                        <Appeal/>
                    </div>
                </div>
                    <div className="image_list">
                    <ImageListItem>
                    <img
                         src={imgbg}
                        loading="lazy"
                    />
                    </ImageListItem>
                        <Image_list_album/>
                    </div>
            </div>

        </div>

    );
    
};




export default Album;