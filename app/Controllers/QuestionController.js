import QuestionService from "../Services/QuestionService.js";
import store from "../store.js";

//Private
function _draw() {
  let questions = store.State.questions;
  let template = /*html*/ `
  <h3>Question</h3>
  <button onclick="app.questionController.getQuestions()">Get Question</button>
  `
  questions.forEach(q => template += q.Template)
  document.getElementById("questions").innerHTML = template

}

//Public
export default class QuestionController {
  constructor() {
    store.subscribe("questions", _draw);
  }

  getQuestions() {
    QuestionService.getQuestions();
  }

}