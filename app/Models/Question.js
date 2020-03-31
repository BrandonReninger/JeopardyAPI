export default class Question {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return `<p>${this.title}</p>`
    }
}