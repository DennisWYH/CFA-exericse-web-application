import { Component, OnInit,Input} from '@angular/core';
import { ExerciseListComponent } from '../exercise-list/exercise-list.component';

@Component({
  selector: 'app-core-component',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit{

  @Input() reading;
  @Input() filter;

  constructor() { }

  ngOnInit() {
  }

  onreadingFilter(readingSelected){
    this.reading=readingSelected;
  }
  onmodulefilter(filter){
    console.log("core has been notified the event", filter[0],filter[1]);
    this.filter=filter;
  }
}