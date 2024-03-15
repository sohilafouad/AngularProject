import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { TableComponent } from '../table/table.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent,TableComponent,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  searchText: string = '';
  clientName: string="";
  imageUrl: string = "assets/c (6).jpeg";
  isBtnDisabled: boolean = false;

  constructor(){
    setTimeout(()=>{
  this.isBtnDisabled=true;
    },3000)}
    show:boolean =true;
    handeltoggelImG(){
  this.show=!this.show;
    }


 

}
