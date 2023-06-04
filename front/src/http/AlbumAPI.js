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

export const createImage = async (id,photos) => {
    const {data} = await $authHost.post(`api/galleries/${id}/update`, {photos})
    return data
}

export const fetchImage = async () => {
    const {data} = await $host.get('api/photos')
    return data
}

export const createAlbum = async (galleries, photos) => {
    const formData = new FormData();
    formData.append('GallerieName', galleries);
    formData.append('Mainphoto', photos);

    const config = {
        headers: {
            'Content-Type': 'multipart/x-www-form-urlencoded',
        },
    };

    const {data} = await $authHost.post('api/galleries', formData, config)
    return data
}

export const fetchAlbum  = async (galleries) => {
    const {data} = await $host.get('api/device')
    return data
}
