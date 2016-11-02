import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';
import { ProductPage} from './../product/product';
import { CategoryPage} from './../category/category';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

  tabRoot1: any;
  tabRoot2: any;

  constructor(private navController: NavController) {
    this.tabRoot1 = ProductPage;
    this.tabRoot2 = CategoryPage;
  }
}
