import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient } from '@angular/common/http';
import { Axis } from 'highcharts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  graph: Chart;

  constructor(private httpClient: HttpClient) {
    this.graph = new Chart({});
  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:2706/api/Clients/DatesSummation")
      .subscribe(
        (success) => {

          var data = success as any[];

          var array: any[] = [];
          var names: any[] = [];
          for (let index = 0; index < data.length; index++) {
            array.push([
              data[index].registrationDate, data[index].amount
            ]);
            names.push([
              data[index].registrationDate
            ])
          }
          this.graph = new Chart({
            chart: {
              type: 'column',
            },
            title: {
              text: 'Client registration history by date '
            },
            subtitle: {
              text: 'Summary of registrations performed'
            },
            xAxis: {
              categories: names
            },
            yAxis: {
              min: 0,
              title: {
                text: 'Amount of registred clients'
              }
            },
            legend:{
              enabled:false
            },
            tooltip:{
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' + 
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            },
            credits:{
              enabled: false
            },
            series:[{
              data:array,
              type: undefined as any
            }]
          });
        },
        (error) => {
          console.log(error);
        }
      )
  }

}
