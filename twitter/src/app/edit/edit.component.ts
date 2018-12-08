import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }
  public daterange: any = {};
 
    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false,
    };
 
    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        console.log(value);
 
        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;
 
        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }
    movies = [
      '@MakeSchool',
      '@newsycombinator',
      '@ycombinator'
    ];
  
    drop(event: CdkDragDrop<string[]>) {
      moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
    }

  ngOnInit() {
  }

}
