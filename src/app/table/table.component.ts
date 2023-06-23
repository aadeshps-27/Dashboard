
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


 
  
  
  

}
export interface PeriodicElement {
  name: string;
  position: number;
  marketcap: string;
  growth: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Bitcoin(BTC)', marketcap: "$ 522.55 B", growth: '20.1%'},
  {position: 2, name: ' Ethereum (ETH)', marketcap: "$ 208.1 B", growth: '15.1%'},
  {position: 3, name: 'Tether (USDT)', marketcap:"$ 37.55 B", growth: '13.1%'},
  {position: 4, name: ' Binance Coin (BNB)',marketcap: "$ 77.55 B", growth: '10.1%'},
  {position: 5, name: 'U.S. Dollar Coin (USDC)', marketcap: "$ 22.55 B", growth: '9.1%'},
  {position: 6, name: 'XRP (XRP)', marketcap: "$ 33.55 B", growth: '6.1%'},
  {position: 7, name: 'Cardano (ADA)', marketcap: "$ 8.55 B", growth: '8.1%'},
  {position: 8, name: ' Dogecoin (DOGE)', marketcap: "$ 7.55 B", growth: '4.1%'},
  {position: 9, name: ' Solana (SOL)', marketcap: "$ 7.55 B",growth: '0.78%'},
  {position: 10, name: 'TRON (TRX)', marketcap: "$ 8.55 B", growth: '0.1%'},
  
];
