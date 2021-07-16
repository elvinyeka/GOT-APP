

export default class GotService {
    constructor() {
        this._apiBase = 'https://www.anapioficeandfire.com/api';
    }

    getResorse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`);
        }
        return await res.json();
    }

    getAllCharacters = async () => {
        const result = await this.getResorse('/characters?page=5&pageSize=10');
        return result.map(this._transformCharacter);
    }

    getCharacterById = async (id) => {
        const character = await this.getResorse(`/characters/${id}`);
        return this._transformCharacter(character);
    }

    getAllHouse = async () => {
        const res = await this.getResorse(`/houses/`);
        return res.map(this._transformHouse);
    }

    getHouseById = async (id) => {
        const house = await this.getResorse(`/houses/${id}`);
        return this._transformHouse(house);
    }

    getAllBooks = async () => {
        const res = await this.getResorse('/books/');
        return res.map(this._transformBook);
    }
    getBooksById = async (id) => {
        const book = await this.getResorse(`/books/${id}`);
        return this._transformBook(book);
    }

    isSet(data) {
        if (data) {
            return data
        } else {
            return 'no data :('
        }
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)$/;
        return item.url.match(idRegExp)[1]
    }



    _transformCharacter = (char) => {
        return {
            id: this._extractId(char),
            name: this.isSet(char.name),
            gender: this.isSet(char.gender),
            born: this.isSet(char.born),
            died: this.isSet(char.died),
            culture: this.isSet(char.culture)
        }
    }

    _transformHouse = (house) => {
        return {
            id: this._extractId(house),
            name: this.isSet(house.name),
            region: this.isSet(house.region),
            words: this.isSet(house.words),
            titles: this.isSet(house.titles),
            overlords: this.isSet(house.overlords),
            ancentralWeapons: this.isSet(house.ancentralWeapons),
        }
    }

    _transformBook = (book) => {
        return {
            id: this._extractId(book),
            name: this.isSet(book.name),
            numberOfPages: this.isSet(book.numberOfPages),
            publisher: this.isSet(book.publisher),
            released: this.isSet(book.released),
        }
    }
}




