import QuestionsService from "../Services/QuestionService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  let template = /*html*/ `
  <h1>Question</h1>
  <button onclick="app.questionController()">Get Question</button>
  `
  questions.forEach(q => template += q.template)
  document.getElementById("questions").innerHTML = template

}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("questions", _draw);
  }

  getQuestions() {
    QuestionsService.getQuestions();
  }

}