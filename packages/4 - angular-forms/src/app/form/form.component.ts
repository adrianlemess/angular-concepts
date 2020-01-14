import { Component, OnInit } from '@angular/core';
import { Skill } from '../shared/skill';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  skills: Skill[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      new Skill('JavaScript', false),
      new Skill('HTML', false),
      new Skill('CSS', false),
      new Skill('Go', false),
      new Skill('Python', false),
      new Skill('Rust', false),
      new Skill('Java', false),
    ];
  }

}
