import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent {

ngOnInit(){
  this.barChartPercent()
    this.PieChartPercent()
    this.doughnutChartPercent()
    this.lineChartPercent()
    this.polarAreaChartPercent()
    this.radarChartPercent()
}
  
  
  myBarChart:any

  pieChartValue:any=[52.75,11,66,77,99,22,101,47,121,85,165,40]


  SecondData:any=[150,175,255,45,10,8,65,55,78,105,199,14]

  currentMonthShortList:any=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
 clr:any=['pink','red','green','orange','yellow','black','grey','blue','Purple','aliceblue','blanchedalmond','brown']

  myPieChart: any;

  radarChartPercent(){
    this.myBarChart = new Chart("radarChart", {
      type: 'radar',
      data: {
        labels: this.currentMonthShortList,
        datasets: [{
          label: 'Sales Point',
          data: this.pieChartValue,
          borderWidth: 1,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor:['grey']
        }]
      },
      options: {
        indexAxis: 'x',
        responsive:true,
        maintainAspectRatio:true

      }
    });
  }

  polarAreaChartPercent(){
    this.myBarChart = new Chart("polarAreaChart", {
      type: 'polarArea',
      data: {
        labels: this.currentMonthShortList,
        datasets: [{
          label: 'Count',
          data: this.pieChartValue,
          borderWidth: 1,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor:this.clr
        }]
      },
      options: {
        indexAxis: 'x',
        responsive:true,
        maintainAspectRatio:true

      }
    });
  }

  lineChartPercent(){
    this.myBarChart = new Chart("lineChart", {
      type: 'line',
      data: {
        labels: this.currentMonthShortList,
        datasets: [{
          label: 'Sales Point',
          data:this.pieChartValue,
          borderWidth: 1,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor:['red']
        },
        {
          label: 'Sales Point 2',
          data: this.SecondData, // Second set of sales data
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: ['orange'],
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'x',
        responsive:true,
        maintainAspectRatio:true

      }
    });

  }

  barChartPercent() {
    this.myBarChart = new Chart("manifestdeliverchart", {
      type: 'bar',
      data: {
        labels: this.currentMonthShortList,
        datasets: [{
          label: 'Sales Point',
          data: this.pieChartValue,
          borderWidth: 1,
          borderColor: 'rgba(54, 162, 235, 1)',
          backgroundColor:['aliceblue']
        },
        {
          label: 'Sales Point 2',
          data: this.SecondData, // Second set of sales data
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'x',
        responsive:true,
        maintainAspectRatio:true

      }
    });

  }

  PieChartPercent(){
    this.myPieChart = new Chart("manifestPiechart", {
      type: 'pie',
      data:{
        labels: this.currentMonthShortList,
        datasets:[{
          data:this.pieChartValue,
          backgroundColor: this.clr,
          borderRadius:1,
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth:1,
          hoverOffset:4
        },
        {
          label: 'Sales Point 2',
          data: this.SecondData, // Second set of sales data
          backgroundColor: this.clr,
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }],
      },
      options: {
        indexAxis: 'x',
        responsive:true,
        maintainAspectRatio:true

      }
    });
  }

  doughnutChartPercent(){
    this.myPieChart = new Chart("doughChart", {
      type: 'doughnut',
      data:{
        labels: this.currentMonthShortList,
        datasets:[{
          data:this.pieChartValue,
          backgroundColor:this.clr,
          borderRadius:1,
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth:1,
          hoverOffset:4
        }],
      },
      options: {
        indexAxis: 'x',
        responsive:true,
        maintainAspectRatio:true

      }
    });

  }
}
