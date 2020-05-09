import { Component } from '@angular/core';

import { exercises } from '../exercises';
import {Input} from '@angular/core';
import { isNull } from '@angular/compiler/src/output/output_ast';

import {OnChanges, OnInit} from '@angular/core';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})

export class ExerciseListComponent implements OnInit, OnChanges{
  @Input() new_exercises=[]
  @Input() exercises = exercises;
  @Input('reading') reading; 
  @Input('reading_module') filter;
  module;
  
  ngOnInit(){
    this.exercises= exercises;
  }

  ngOnChanges(changes){
    console.log("changes have been observed.");
    // cler the exercise list when there is a new changes.
    this.new_exercises = [];
    // 用户点击了module
    if(changes.reading==null){
      console.log("changes on module");
      this.reading=changes.filter.currentValue[0];
      console.log("exercise-list reading has been changed",this.reading);
      this.module = changes.filter.currentValue[1];
      console.log("exercise-list module has been changed",this.module);
      for( let exercise in exercises ){
        if((exercises[exercise].reading == this.reading)&&(exercises[exercise].module==this.module)){
          this.new_exercises.push(exercises[exercise]);
        }
      }
    }
    // 用户点击了reading
    if(changes.filter==null){
      console.log("changes on reading");
      this.reading=changes.reading.currentValue;
      console.log("exercise-list reading has been changed",this.reading);
      this.module=null;
      console.log("exercise-list module has not been changed",this.module);
      for( let exercise in exercises ){
        if(exercises[exercise].reading == this.reading){
          this.new_exercises.push(exercises[exercise]);
        }
      }
    }
    this.exercises= this.new_exercises;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/