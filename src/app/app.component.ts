import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogSystem';



  gosearch(k: string) {
    location.reload();
    console.log(k);
  }


}
