import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuizApplication } from '../../entities/quiz';

@Component({
  selector: 'quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.scss'],
})
export class QuizCardComponent implements AfterViewInit, OnInit {
  options: string[] = [];

  givenAnswer: string = '';
  correctAnswer: string = '';
  disabled = false;

  @Input()
  quizApplication: QuizApplication = {
    category: '',
    id: '',
    tags: [],
    difficulty: '',
    regions: [],
    isNiche: false,
    question: undefined,
    correctAnswer: '',
    incorrectAnswers: [],
    type: '',
  };

  @Output()
  increment = new EventEmitter();

  optionsFormGroup: FormGroup = new FormGroup({
    options: new FormControl(''),
  });

  constructor(private cdRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    //Disable mat options once an answer is given
    //Trigger incrementation once a corrent answer is given
    this.optionsFormGroup.valueChanges.subscribe((option) => {
      if (option.options) {
        this.disabled = true;
      }
      if (option.options === this.quizApplication.correctAnswer) {
        this.increment.emit();
      }
    });
  }

  /*The returned API object doesnt have all options,therefore they are constructed by incorrect answers + correct answer,
    The shuffling is needed because the correct answer would always be the first one otherwise.
  */
  getShuffledOptions(): string[] {
    let shuffled = [
      this.quizApplication.correctAnswer,
      ...this.quizApplication.incorrectAnswers,
    ]
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return shuffled;
  }
  //The manual change detection is needed because the values have been changed after the automatic angular change detection happened
  ngAfterViewInit() {
    this.options = this.getShuffledOptions();
    this.cdRef.detectChanges();
  }

  onCheckAnswer() {
    this.givenAnswer = this.optionsFormGroup.value.options;
    this.correctAnswer = this.quizApplication.correctAnswer;
  }
}
