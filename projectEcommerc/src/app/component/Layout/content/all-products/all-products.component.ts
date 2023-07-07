import { Component, OnInit } from '@angular/core';
import { AllProductsService } from '../sreves/all-products.service';
import { Iproducts } from '../inter face/iproducts';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  products:any[] = []

 constructor (private service:AllProductsService){}
 
  ngOnInit(): void {
   this.getProduct()
  }
  getProduct(){
    this.service.getAllProducts().subscribe((res:any) => {
          this.products = res 
          console.log(res)
    })
  }
  
  }

