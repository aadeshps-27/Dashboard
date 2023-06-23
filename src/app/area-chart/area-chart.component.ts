import { Component } from '@angular/core';
import HC_exporting from 'highcharts/modules/exporting'
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  Highcharts =  Highcharts

  chartOptions={}
  constructor(){
    this.chartOptions= {
        chart: {
            type: 'area'
          
        },
        title: {
            text: ' Your Investment Monthly Chart',
            align: 'center'
            
        },
       
        xAxis: {
            categories: ['January', 'Febuary', 'March', 'April', 'May', 'June',
                'July', 'Augest', 'September', 'October', 'November','December']
        },
        yAxis: {
            title: {
                text: 'Average Production'
            }
            
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Bitcoin production',
            data: [60.8, 40.3, 40.8, 66.8, 60.5, 55.3, 64.9, 63.6, 45.7, 65.9, 32.7,40.1
            ]
        }, {
            name: 'Etherum production',
            data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5,27.2
            ]
        }, {
            name: 'Teter Production',
            data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2,6.4]
        }]
    }
    HC_exporting(Highcharts);
    
  }
}
