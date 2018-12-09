import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { ViewChild } from '@angular/core';
declare var Date;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  dateRange:any;
  startDate:string=new Date().toDateString();
  endDate:string=new Date().toDateString();
  tweetsPerCol=10;
  @ViewChild(DaterangePickerComponent)
  private picker: DaterangePickerComponent;  
  constructor() { }
 
    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false,
    };
 
    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
       
        this.startDate=value.start._d.toDateString();
        this.endDate=value.end._d.toDateString();
 
        // any object can be passed to the selected event and it will be passed back here
        
   
      
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

  updateSettings(){
    let tweetPerCol:any=this.tweetsPerCol;
    localStorage.setItem("StartDate",this.startDate);
    localStorage.setItem("EndDate",this.endDate);
    localStorage.setItem("TweetsPerCol",tweetPerCol);
  }

}
