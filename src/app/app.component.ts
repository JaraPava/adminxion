import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'admixion';
  constructor(private http: HttpClient) {
    this.fetchData();
  }
  fetchData() {
    this.http.get('https://sisgeact-dev.deptoactext.com/api/v1/periodos/').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
