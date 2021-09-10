import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-clients-report',
  templateUrl: './clients-report.component.html',
  styleUrls: ['./clients-report.component.css']
})
export class ClientsReportComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // Creating a object to catch the form
  formReport = new FormGroup({

    startDate: new FormControl('', [
      Validators.required,
    ]),
    finishDate: new FormControl('', [
      Validators.required,
    ])

  });

  //Creating a object to  show error messages in
  // html pages
  get form(): any {
    return this.formReport.controls;
  }

  onSubmit(): void{
    console.log(this.formReport.value);
  }
}
