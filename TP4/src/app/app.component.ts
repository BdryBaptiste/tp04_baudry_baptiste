import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProduitState } from 'src/shared/states/produit-state';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP3';

  @Select(ProduitState.getNbProduit) nb$!: Observable<number>;
  constructor() {}
}
