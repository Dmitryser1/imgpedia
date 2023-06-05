import "./album.scss";
import imgbg from "../../assets/img1.jpg";
import { Typography, Avatar, Box, Tab, Tabs, Card, CardContent, Button, CardActions, ImageList } from "@mui/material";
import profile_image from "../../assets/kermit.jpg";
import InfoIcon from '@mui/icons-material/Info';
import Upload from "../../components/uploadimage/UploadImage"
import Comments_album from "../../components/comments_album/Comments_album";
import Share from "../../components/share/Share"
import Appeal from "../../components/appeal/Appeal"
import ImageListItem from '@mui/material/ImageListItem';
import { useContext, useEffect, useState } from "react";
import { Context } from "../../index";
import { getAllAlbums, getAllPhotos } from "../../http/AlbumAPI";
import { useLocation } from "react-router-dom";




const Album = () => {

    const tags = ['digital_art', 'drawning', 'fantasy', 'Digital 2D', 'Concept Art']
    const { user } = useContext(Context);
    const [albums, setAlbums] = useState([])
    const [images, setImages] = useState([])
    const location = useLocation()

    const getLastItem = thePath => thePath.substring(thePath.lastIndexOf('/') + 1)
    const ProfNum = getLastItem(location.pathname)
    const KrutaiaFunction = async () => {
        let data
        let data2
        data = await getAllAlbums();
        data2 = await getAllPhotos(ProfNum);
        user.setAlbum(data)
        user.setImage(data2)
        console.log(user)
        let len = (user.getAlbum().length)
        console.log(user.getAllImagesfr(ProfNum))
        let len2 = (user.getAllImagesfr(ProfNum).length)
        console.log(len)
        console.log(user.getAlbum()[0].Mainphoto)

        var albums = []
        var Images = []
        for (var i = 0; i < len; i += 1) {
            console.log(i)
            albums.push(user.getAlbum()[i])
        }
        for (var j = 0; j < len2; j += 1) {
            console.log(i)
            Images.push(user.getAllImagesfr(ProfNum - 1)[i].photo)
        }
        setAlbums(albums)
        setImages(Images)
        console.log(albums)
        console.log(Images)

    };


    useEffect(() => {
        KrutaiaFunction()
    }, [])

    return (
        <div className="album">
            <div className="top_panel">
                <div className="left_panel">

                    <div className="avatar">
                        <Tabs value={1} aria-label="disabled tabs example">
                            <InfoIcon sx={{ mt: 1.6, px: 1 }} />
                            <Tab label="Information" disabled />
                        </Tabs>
                        <Avatar src={profile_image} className="avatar" />
                    </div>
                    <div className="info">
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {user.getUser().email}
                                </Typography>

                                <Typography variant="body2" sx={{ mt: 10 }}>
                                    Добрый день, я не знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсети не знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсетине знаю кто с горы, приятно познакомиться, вот мои ссылки на соцсети
                                </Typography>
                                <Box sx={{ boxShadow: 0, displayPrint: 'inline', px: 5 }} >
                                    <ul>
                                        {tags.map((person, index) =>
                                            <li key={index}>{person}</li>)}
                                    </ul>
                                </Box>
                            </CardContent>
                            <CardActions>
                                <div className="dialog_icon">
                                    <Upload />
                                </div>
                            </CardActions>
                        </Card>

                    </div>
                    <div className="Posts">
                        <Appeal />
                    </div>
                </div>
                <div className="image_list">
                    <ImageListItem>
                        <img
                            src={`http://localhost:5000/${user.getAlbum()[ProfNum - 1].Mainphoto}?w=164&h=164&fit=crop&auto=format`}
                            loading="lazy"
                        />
                    </ImageListItem>
                    <ImageList
                        sx={{ width: 1, height: 1 }}
                        variant="quilted"
                        cols={4}
                    >

                        {albums.map((item) => (
                            <ImageListItem key={`http://localhost:5000/${item}`} cols={item.cols || 1} rows={item.rows || 1}>
                                <img
                                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    loading="lazy"
                                />

                            </ImageListItem>
                        ))}
                    </ImageList>
                </div>
            </div>

        </div>

    );

};




export default Album;