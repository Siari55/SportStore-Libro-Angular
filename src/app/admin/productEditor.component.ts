import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { Product } from '../model/product.model';
import { ProductRepository } from '../model/product.repository';

@Component({
  templateUrl: 'productEditor.component.html'
})

export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product();
  id: number = 0;

  constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params['mode'] === 'edit';
    this.id = activeRoute.snapshot.params['id'];

    if (this.editing) {
      Object.assign(this.product, repository.getProduct(this.id));
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl('/admin/main/products');
  }
}
