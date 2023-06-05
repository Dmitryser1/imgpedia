import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";


export const updateImage = async (GalleryId,photos) => {
    const formData = new FormData();
    formData.append('GalleryId', GalleryId);
    formData.append('photos', photos);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };
    console.log(GalleryId)
    console.log(photos)
    console.log(formData)
    const {data} = await $authHost.post(`api/galleries/${GalleryId}/update`, formData,config)
    console.log(data)
    return data
}

export const getAllPhotos = async (GalleryId) => {
    console.log(GalleryId)
    const {data} = await $host.get(`api/galleries/${GalleryId}`)
    return data
}

export const createAlbum = async (galleries, photos) => {

    const formData = new FormData();
    formData.append('GalleryName', galleries);
    formData.append('photos', photos);

    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    console.log(galleries)
    console.log(photos)
    console.log(formData)
    const {data} = await $authHost.post('api/galleries', formData, config);
    console.log("data", data)
    return data
}


export const getAllAlbums = async () => {
    const {data} = await $host.get(`api/galleries`)
    console.log(data)
    return data
}
