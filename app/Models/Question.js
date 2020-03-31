export default class Question {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}