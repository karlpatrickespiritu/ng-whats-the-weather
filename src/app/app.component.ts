import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  searchKey: string;

  search(event: any) {
    this.searchKey = event.target.value;

    alert(this.searchKey)
  }
}
