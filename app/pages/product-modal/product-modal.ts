import { Component } from '@angular/core';
import { NavController, ViewController, NavParams } from 'ionic-angular';
import { ProductService } from './../../providers/product-service/product-service';

@Component({
  templateUrl: 'build/pages/product-modal/product-modal.html',
})
export class ProductModalPage {
  product: any;

  constructor(private nav: NavController, private view: ViewController, private productService: ProductService, private params: NavParams) {
    this.product = params.get('product') || {};
  }

  close() {
    this.view.dismiss();
  }

  save() {
    if (this.product.id != undefined) {

      this.productService.update(this.product)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log('Erro ao atualizar produto', error);
        });

    } else {
      this.productService.insert(this.product)
        .then((res) => {
          if (res) {
            this.view.dismiss();
          }
        }, (error) => {
          console.log('Erro ao cadastrar produto', error);
        });

    }
  }
}
