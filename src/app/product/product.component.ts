import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products;
  constructor() {

   this.products=[
    {id:1,name:"ph hp",price:300},
    {id:1,name:"ph hp",price:300},
    {id:1,name:"ph hp",price:300},
  ]

   }

  ngOnInit(): void {
  }

}
