import { makeAutoObservable} from 'mobx'
export default class ImageStore {
    constructor() {
        this._photos ={}
        makeAutoObservable(this)
    }


    setPhoto(photos){
        this._photos = photos
    }

    getPhoto(){
        return this._photos
    }

}