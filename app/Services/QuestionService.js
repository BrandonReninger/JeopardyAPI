import store from "../store.js";
import Question from "../Models/Question.js"


// @ts-ignore
let _api = new axios.create({
    baseURL: "http://jservice.io/api/",
    timeout: 10000
})


class QuestionService {
    constructor() {
        this.getQuestions()
    }

    getQuestions() {
        _api.get('random')
            .then(res => {
                console.log(res.data)
                let questions = res.data.map(rawQuestionData => new Question(rawQuestionData))
                store.commit("questions", questions)
            }).catch(err => {
                console.error(err)
            })
    }

}


const service = new QuestionService();
export default service;