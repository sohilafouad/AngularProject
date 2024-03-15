import { Component } from '@angular/core';
import { OneprouctComponent } from '../oneprouct/oneprouct.component';
import { Iproduct } from '../../models/Iproduct';
import productList from '../../../assets/prouducLlist';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [OneprouctComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  products:Iproduct[]= productList;

}
