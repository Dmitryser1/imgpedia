import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createComplaint = async (complaints) => {
    const {data} = await $authHost.post('api/complaints', {complaints})
    return data
}

export const fetchComplaint = async () => {
    const {data} = await $host.get('api/complaints')
    return data
}

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
    console.log(data)
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

export const fetchAlbum  = async (galleries) => {
    const {data} = await $host.get('api/device')
    return data
}
