
// import { ProductService } from './../product.service';
// import { Component, inject } from '@angular/core';
// import { routes } from '../app.routes';
// import { ActivatedRoute } from '@angular/router';
// import { HttpClient, HttpClientModule } from '@angular/common/http';

// @Component({
//   selector: 'app-product-detail',
//   standalone: true,
//   imports: [HttpClientModule],
//   templateUrl: './product-detail.component.html',
//   styleUrl: './product-detail.component.css'
// })
// export class ProductDetailComponent {  
//   product:any = {title:""};
//   constructor(private routes: ActivatedRoute){
//   }
//   httpClient = inject(HttpClient);
//   ngOnInit(){
//     let id = this.routes.snapshot.paramMap.get('id');
    
//     this.getDetailProductById(Number(id));
//   }
//   getDetailProductById(id:number){
//     // console.log(id);  
//     this.httpClient.get(`http://localhost:3000/products/${id}`)
//     .subscribe((response:any)=>{
//         // console.log(response);
//         this.product = response;
//     })  
//   }
// }
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service'; // Import your product service
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService } from './../cart.service';
import { routes } from '../app.routes';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  id = this.routes.snapshot.paramMap.get('id');
  product:any={id:"",name:""};
  productForm: any;
  
  constructor(
    private routes: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService // Inject your CartService
  ) {}
  httpClient = inject(HttpClient);
  ngOnInit(): void {
    let id = this.routes.snapshot.paramMap.get('id');
    // this.productId = this.route.snapshot.paramMap.get('id');

    this.getProductByID(this.id);
      console.dir(this.routes)
      }
      // getDetailProductById(id:number){
      //   // console.log(id);  
      //   this.httpClient.get(`http://localhost:3000/products/${id}`)
      //   .subscribe((response:any)=>{
      //       // console.log(response);
      //       this.product = response;
      //   })  
      // }
      getProductByID(id:any){
        this.httpClient.get('http://localhost:3000/products/'+id).subscribe((data:any) =>{
              this.product = data;  
              this.productForm.setValue({
                name: data.name,
                price: data.price,
                cate_id: data.cate_id,
                image: data.image,
                detail: data.detail
              })
                     
        });
      }
  addToCart(productId: string, productName: string, productImage: string, productPrice: number): void {
    // Assuming CartService has a method like addToCart, adjust accordingly
    this.cartService.addToCart({
      id: productId,
      name: productName,
      image: productImage,
      price: productPrice,
      quantity: 1, // Assuming you add one unit for each click
    });

    // Optionally, you can provide user feedback (e.g., a toast message) here.
  }
}
