import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-clients-consult',
  templateUrl: './clients-consult.component.html',
  styleUrls: ['./clients-consult.component.css']
})
export class ClientsConsultComponent implements OnInit {
  //Fields that is gatting in the API
  clients = [
    {
      clientID: '',
      name: '',
      email: '',
      registrationDate: ''
    }
  ];
  //Get client ID and saves in this var
  clientIDDelete = '';

  // Creating a object to catch the form
  formEdit = new FormGroup({
    clientID: new FormControl('', []), //hidde field

    name: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(150)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])

  });

//Creating an atribute to record page number
page = 1;

  //Creating a object to  show error messages in
  // html pages
  get form(): any {
    return this.formEdit.controls;
  }

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get('http://localhost:2706/api/Clients')
      .subscribe( //catch API return (Promisse)
        (success) => {
          this.clients = success as any[];
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //Method to get the client id that will be deleted
  getDeleteClient(clientID: string): void {
    this.clientIDDelete = clientID
  }

  //
  confirmDeleteClient(): void {
    this.httpClient.delete('http://localhost:2706/api/Clients/' + this.clientIDDelete,
      { responseType: 'text' })
      .subscribe( //catch API return (Promisse)
        (success) => {
          alert(success);
          this.ngOnInit();
        },
        (error) => {
          console.log(error);
        }
      );
  }
    //Method to get the client data and put it in the form
    getEditClient(item : any): void {
      this.formEdit.controls.clientID.setValue(item.clientID);
      this.formEdit.controls.name.setValue(item.name);
      this.formEdit.controls.email.setValue(item.email);
      
    }
  onSubmit() : void{
        //Calling the API
        this.httpClient.put('http://localhost:2706/api/Clients/', 
        this.formEdit.value,
        {responseType:'text'} //Return type from API    
        )
        .subscribe( //catch API return (Promisse)
          (success) => {
            
            alert(success);
            this.ngOnInit();
          },
          (error) =>{
            console.log(error);
          }      
        )
  }
//Function to use pagination
handlePageChange(event : number) {
  this.page = event;
}


}
