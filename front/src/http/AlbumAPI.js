import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createComplaint = async (complaints) => {
    const {data} = await $authHost.post('api/complaints', complaints)
    return data
}

export const fetchComplaint = async () => {
    const {data} = await $host.get('api/complaints')
    return data
}

export const createImage = async (brand) => {
    const {data} = await $authHost.post('api/photos', photos)
    return data
}

export const fetchImage = async () => {
    const {data} = await $host.get('api/photos')
    return data
}

export const createAlbum = async (galleries) => {
    const {data} = await $authHost.post('api/galleries', galleries)
    return data
}

export const fetchAlbum  = async (galleries) => {
    const {data} = await $host.get('api/device')
    return data
}
