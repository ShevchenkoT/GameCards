import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private updates: SwUpdate) {
    updates.available.subscribe(() => {
      updates.activateUpdate().then(() => {
        document.location.reload();
      }).catch((err) => {
        console.log('Error:', err);
      })
    })
  }
}
