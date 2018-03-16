import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user: JSON;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getUser(1).subscribe(data => {
      this.user = data;
      console.log(data);
    });
  }
}
