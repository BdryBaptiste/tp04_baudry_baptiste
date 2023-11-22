import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import { AppComponent } from './app.component';
import { ProduitListeComponent } from './composants/produit/produit-liste/produit-liste.component';
import { RechercheProduitComponent } from './composants/recherche-produit/recherche-produit.component';
import { ProduitState } from 'src/shared/states/produit-state';
import { ProduitModule } from './composants/produit/produit.module';

@NgModule({
  declarations: [
    AppComponent,
    RechercheProduitComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([ProduitState]),
    ProduitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
