/* Feature module, permite que el data model sea usado más facilmente en cualquier lugar de la aplicación
se define por un "@NgModule" */

import { NgModule } from '@angular/core';
import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.model';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, StaticDataSource, Cart, Order, OrderRepository, RestDataSource, AuthService,
        {provide: StaticDataSource, useClass: RestDataSource }]
})

export class ModelModule { }
