import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clients-report',
  templateUrl: './clients-report.component.html',
  styleUrls: ['./clients-report.component.css']
})
export class ClientsReportComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

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
    var startDate = this.formReport.value.startDate
    var finishDate = this.formReport.value.finishDate

    this.httpClient
    .get("http://localhost:2706/api/Clients/ClientReport/" + startDate + "/" + finishDate,
    {responseType:'arraybuffer'})
    .subscribe(
      (success) =>{
        var archive = new Blob([success],{type:'application/pdf'});
        var archiveName = "Client_report.pdf";

      //download
      var url = window.URL.createObjectURL(archive);
      var downloadFile = document.createElement('a');
      downloadFile.href = url;
      downloadFile.download = archiveName;

      document.body.appendChild(downloadFile);
      downloadFile.click();
      document.body.removeChild(downloadFile);


      },
      (error) => {
        console.log(error)
      }
    )
    console.log(this.formReport.value);
  }
}
