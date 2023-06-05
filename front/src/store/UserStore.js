import { makeAutoObservable} from 'mobx'
export default class UserStore {
    constructor() {
        this._isAuth=false
        this._user =[]
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
}