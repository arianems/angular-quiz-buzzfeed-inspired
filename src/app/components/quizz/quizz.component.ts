import { Component, OnInit } from '@angular/core';
import quizz_questions from 'src/assets/data/quizz_questions.json'


@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  title : string = '';

  questions:any;
  selectedQuestion:any;

  answers:string[] = [];
  selectedAnswer:string = '';

  questionIndex:number = 0;
  maxIndex:number = 0;

  finished:boolean = false;

  result:string = '';

  ngOnInit(): void {

    this.questionIndex = 0;

    if(quizz_questions) {
      this.finished = false;
      this.title = quizz_questions.title;

      this.questions = quizz_questions.questions;
      this.selectedQuestion = this.questions[this.questionIndex];

      this.maxIndex = this.questions.length;

    }


  }

  isFinished() : boolean {
    while (this.questionIndex < this.maxIndex) {
      return this.finished = false;
    }
    return this.finished = true
  }

  pickAnswer(value:any):void {
    this.selectedAnswer = value;
    this.answers.push(this.selectedAnswer);

    this.questionIndex += 1;

    this.getNextQuestion();

  }

  getNextQuestion() {
    this.selectedQuestion = this.questions[this.questionIndex];

    if (this.isFinished()) {
      console.log("teste finalizado");
      this.getResult();
    }
  }

  getResult() {
    let good = this.answers.filter(value => value == 'A').length;
    let bad = this.answers.filter(value => value == 'B').length;

    if (good > bad) {
      this.result = quizz_questions.results.A;
    }
    else {
      this.result = quizz_questions.results.B;
    }
  }


}
