export default class Question {
    constructor(data) {
        this.question = data.question
    }

    get Template() {
        return `<p>${this.question}</p>`
    }
}