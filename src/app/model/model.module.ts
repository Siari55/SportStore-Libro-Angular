/* Feature module, permite que el data model sea usado más facilmente en cualquier lugar de la aplicación
se define por un "@NgModule" */

import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ProductRepository, StaticDataSource]
})

export class ModelModule{ }