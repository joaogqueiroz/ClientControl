import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients-consult',
  templateUrl: './clients-consult.component.html',
  styleUrls: ['./clients-consult.component.css']
})
export class ClientsConsultComponent implements OnInit {

  clients = [
    {
      clientID: '',
      name: '',
      email: '',
      registrationDate: ''
    }
  ];
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:2706/api/Clients')
      .subscribe( //catch API return (Promisse)
        (success) => {
          this.clients = success as any [];
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
