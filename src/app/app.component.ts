import { Component } from '@angular/core';
class Button{


}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app';

  show :boolean = false;

  array:any=[ ];
  time:string='';
  state:string='';

  displayText(){

    if(this.show === !this.show){
      this.show = true;
    }else{
      this.show = !this.show;

    }
    this.pushArr();
    console.log(this.displayText);
  }

  pushArr(){
    this.array.push({

      time:Date(),
      state:this.show
    });

    
  }

 
}
