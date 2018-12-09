import { Component, OnInit } from '@angular/core';
declare var Math:any;
declare var Date:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tweets :aTweet[][]=[];
  totalCols:number=0;
  allUsers=["@MakeSchool","@ycombinator","@newsycombinator"];
  constructor() { }

  ngOnInit() {
    this.generateRandom();
  }

  generateRandom(){
    let startDate:any=localStorage.getItem("StartDate");
    let endDate:any=localStorage.getItem("EndDate");
    let tweetsPerCol:any=localStorage.getItem("TweetsPerCol");
    if(!tweetsPerCol)
    {
      tweetsPerCol=10;
    }

    this.totalCols=Math.floor(30/tweetsPerCol)
    
    
    if(!startDate)
    {
      startDate=new Date();
      startDate.setDate(startDate.getDate()-30);
    }
    else{
      startDate=new Date(startDate);
    }
    endDate=endDate ? new Date(endDate) : new Date();
   
    
    for(let i=0;i<tweetsPerCol;i++)
    {
      this.tweets[i]=[];
      for(let j=0;j<this.totalCols;j++)
      {
        this.tweets[i][j]={
          user:this.allUsers[this.getRandomInt(0,2)],
          date:this.getRandomDate(startDate, endDate).toDateString(),
          content:"hey this is my tweet"
        };

      }
      
     
      
    }
    console.log(this.tweets)
  }

 getRandomDate(start,end){
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

 }

  getRandomInt(min, max):number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

}




interface aTweet{
  user:string,
  date:string,
  content:string
}
