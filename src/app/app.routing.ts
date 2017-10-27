import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//import Components
import { HomeComponent } from './components/home/home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'AddProduct', component: AddProductComponent},
  {path: 'DeleteProduct', component: DeleteProductComponent},
  {path: 'EditProduct', component: EditProductComponent},
  {path: 'ListProduct', component: ListProductComponent},
  {path: 'UploadImage', component: UploadImageComponent},
  {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
