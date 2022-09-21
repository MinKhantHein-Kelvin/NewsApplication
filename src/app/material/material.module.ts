import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

const MaterailComponents : any = [
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [MaterailComponents],
  exports: [MaterailComponents]
})
export class MaterialModule { }
