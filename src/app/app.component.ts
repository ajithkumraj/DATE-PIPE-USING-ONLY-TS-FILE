import { DatePipe } from '@angular/common';
import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  datePipeString : string;
Date: Date;
  
  

  constructor(private datePipe: DatePipe) { 
    this.datePipeString = datePipe.transform(Date.now(),'yyyy-MM-dd');
    //  this.datePipeString = datePipe.transform(Date.now(), 'hh:mm:ss'); 
// this.datePipeString = datePipe.transform(Date.now(),'hh:mm:ss','UTC' );
//  this.datePipeString = datePipe.transform(Date.now(),'hh:mm:ss','MST' ); 


 }  

  onclick(){
    console.log(this.datePipeString);
  }
  ngOnInit() {
  }


}
