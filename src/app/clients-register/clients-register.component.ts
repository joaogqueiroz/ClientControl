import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


// FormGroup catch all data from the form
// FormControl cath every field in form (e. g. Name and Email) 
// Validators Validate each fiel (e. g. Name and Email) 

@Component({
  selector: 'app-clients-register',
  templateUrl: './clients-register.component.html',
  styleUrls: ['./clients-register.component.css']
})
export class ClientsRegisterComponent implements OnInit {

message ="";

  //Http client needs dependency injection 
//We do it using constructor method below
  constructor(private httpClient:HttpClient ) 
    {

    }

  //This method is executed when the component starts
  ngOnInit(): void {
  }

  // Creating a object to catch the form
  formRegister = new FormGroup({

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

  //Creating a object to  show error messages in
  // html pages
  get form(): any {
    return this.formRegister.controls;
  }
  //Creating a  function to recive the submit from
  // form sended by html page
  onSubmit(): void {
    //Calling the API
    this.httpClient.post('http://localhost:2706/api/Clients', 
    this.formRegister.value,
    {responseType:'text'} //Return type from API    
    )
    .subscribe( //catch API return (Promisse)
      (success) => {
        
        this.message = success;
        this.formRegister.reset();
      },
      (error) =>{
        console.log(error);
        this.message = "Unable to register the client";
      }      
    )
  }

}
