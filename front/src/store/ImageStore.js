import { makeAutoObservable} from 'mobx'
export default class ImageStore {
    constructor() {
        this._photos =[
            {
                img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
                title: 'Pic_name',
                author: '@author',
              },
              {
                img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
                title: 'Pic_name',
                author: '@author',
              },
              {
                img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
                title: 'Pic_name',
                author: '@author',
              }, 
              {
                img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
                title: 'Pic_name',
                author: '@author',
              }, 
              {
                img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
                title: 'Pic_name',
                author: '@author',
                rows: 2,
                cols: 2,
              }, 
              {
                img: 'https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg',
                title: 'Pic_name',
                author: '@author',
              }, 
        ]
        makeAutoObservable(this)
    }


    setPhoto(photos){
        this._photos = photos
    }

    getPhoto(){
        return this._photos
    }

}