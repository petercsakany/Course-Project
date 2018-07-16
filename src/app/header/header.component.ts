import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() toggleLink = new EventEmitter<{link: string}>();

  onLinkClicked(status: string) {
    this.toggleLink.emit({link: status});
  }
}
