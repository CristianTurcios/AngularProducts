import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Para que funcionen nuestras rutas
import {routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddProductComponent,
    DeleteProductComponent,
    EditProductComponent,
    ListProductComponent,
    UploadImageComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
