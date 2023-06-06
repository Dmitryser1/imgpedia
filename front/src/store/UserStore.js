import { makeAutoObservable} from 'mobx'
export default class UserStore {
    constructor() {
        this._isAuth=false
        this._user =[]
        this._photos=[]
        this._albums=[]
        this._appeal=[]
        makeAutoObservable(this)
    }

    setIsAuth(bool){
        this._isAuth = bool
    }

    setUser(user){
        this._user = user
    }

    isAuth(){
        return this._isAuth
    }


    getUser(){
        return this._user
    }

    getUserId(){
        return (this._user).id
    }

    getUsersWithId(id) {
        console.log(id)
        return this._users.find(item => item.id === parseInt(id));
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

    setAlbum(albums){
        this._albums = albums
    }

    getAlbum(){
        return this._albums
    }

    setAppeal(appeal){
        this._appeal = appeal
    }

    getAppeal(){
        return this._appeal
    }
    
    
    getAlbumWithId(id) {
        return this._users.find(item => item.id === parseInt(id));
    }


}