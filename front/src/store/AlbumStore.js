import { makeAutoObservable} from 'mobx'
export default class AlbumStore {
    constructor() {
        this._albums ={}
        makeAutoObservable(this)
    }


    setAlbum(albums){
        this._albums = albums
    }

    getAlbum(){
        return this._albums
    }

}