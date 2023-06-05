import { makeAutoObservable} from 'mobx'
export default class ImageStore {
    constructor() {
        this._photos =[

        ]

        makeAutoObservable(this)
    }


    setImage(photos){
        this._photos = photos
    }

    getAllImagesfr(id){
        return this._photos.filter(item => item.GalleryId === id);
    }
    getAllImagesfd(id){
        return this._photos.find(item => item.GalleryId === parseInt(id));
    }
    getImage(){
        return this._photos
    }

}