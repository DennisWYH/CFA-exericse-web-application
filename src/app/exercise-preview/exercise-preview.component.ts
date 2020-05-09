import { Component, OnInit } from '@angular/core';
import { exercises } from '../exercises';
import { Output, EventEmitter}  from '@angular/core';

@Component({
  selector: 'app-exercise-preview',
  templateUrl: './exercise-preview.component.html',
  styleUrls: ['./exercise-preview.component.css']
})
export class ExercisePreviewComponent implements OnInit {

  constructor() { 
  }
  
  exercises = exercises;
  myMap;

  @Output() readingFilter = new EventEmitter;
  @Output() moduleFilter = new EventEmitter;

  // 模块初始化方法
  // 初始化，preview栏目，使得preview里面包含exercises.ts里面含有的reading数据。
  ngOnInit() {
    let myMap = new Map();
    let moduleSet = new Set();
    let moduleNo;
    let readingNo;
    for (let exercise of exercises) {
      readingNo = exercise.reading;
      moduleNo = exercise.module;
      if(myMap.has(readingNo)){
        let newModuleSet = new Set();
        newModuleSet = myMap.get(readingNo).add(moduleNo);
        myMap.set(readingNo,newModuleSet);        
      }else{
        let newModuleSet = new Set();
        newModuleSet.add(moduleNo);
        myMap.set(readingNo,newModuleSet);
      }
    }
    this.myMap = myMap;
  }

  // 当用户点击 preview中的reading标题的时候，触发这个方法。
  filter_by_reading(reading){
    this.readingFilter.emit(reading);
  }
  // 当用户点击 preview中的module 按钮，触发这个方法。
  filter_by_module(reading,module){
    let filter = [reading,module]
    console.log("module button has been clicked.", filter[0],filter[1]);
    this.moduleFilter.emit(filter);
  }
}