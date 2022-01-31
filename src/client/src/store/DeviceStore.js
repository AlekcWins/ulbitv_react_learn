import {makeAutoObservable} from "mobx";

export default class DeviceStore {

    constructor() {
        this._types = [
            {id: 1, name: "Холодильники"},
            {id: 2, name: "Телефоны"},
            {id: 3, name: "Что то "},
        ];
        this._brands = [
            {id: 1, name: "Брэнд1"},
            {id: 2, name: "Брэнд2"},
            {id: 3, name: "Брэнд3"},
        ];
        this._devices = [
            {
                id: 1,
                name: "Name1",
                price: 1,
                rating: 5,
                img: "https://appleinsider.ru/wp-content/uploads/2020/04/sberbank_app_new.jpg"
            },
            {
                id: 2,
                name: "Name2",
                price: 1,
                rating: 5,
                img: "https://appleinsider.ru/wp-content/uploads/2020/04/sberbank_app_new.jpg"
            },
            {
                id: 3,
                name: "Name3",
                price: 1,
                rating: 5,
                img: "https://appleinsider.ru/wp-content/uploads/2020/04/sberbank_app_new.jpg"
            },
        ];
        this._selectedType = {}
        this._selectedBrand = {}
        makeAutoObservable(this)
    }

    setSelectedType(type) {
        this._selectedType = type
    }

    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }


    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedType() {
        return this._selectedType
    }

    get selectedBrand() {
        return this._selectedBrand
    }
}
