import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  linkStatus = 'recipes';

  getLinkStatus(event: {link: string}) {
    this.linkStatus = event.link;
  }
}
