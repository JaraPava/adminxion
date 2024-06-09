import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
    status: number;
    data:   Data[];
}

interface Data {
    id:      number;
    periodo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent {
  title = 'admixion';
  constructor(private http: HttpClient) {
    this.fetchData();
  }


  //Guardar la respuesta de la API en una variable
  response:Response = {status: 0, data: []};

  fetchData() {
    this.http.get('https://sisgeact-dev.deptoactext.com/api/v1/periodos/').subscribe({
      next: (response) => {
        // Obtener la data de la respuesta de esta api
        this.response = response as Response;
        console.log('Response:', this.response);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }
}
