import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { ProduitListeComponent } from './produit-liste/produit-liste.component';
import { ProduitState } from 'src/shared/states/produit-state';
import { ProduitStoreComponent } from './produit-store/produit-store.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxsModule.forFeature([ProduitState]),
  ],

  declarations: [ProduitListeComponent, ProduitStoreComponent],
  exports: [ProduitListeComponent, ProduitStoreComponent],
})
export class ProduitModule {}