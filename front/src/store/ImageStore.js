import { makeAutoObservable} from 'mobx'
export default class ImageStore {
    constructor() {
        this._photos ={}
        makeAutoObservable(this)
    }


    setImage(photos){
        this._photos = photos
    }

    getImage(){
        return this._photos
    }

}