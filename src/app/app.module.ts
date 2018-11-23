import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C7inbuiltpipesComponent } from './c7inbuiltpipes/c7inbuiltpipes.component';
import { FormsModule} from '@angular/forms';
import { C25improovngmodelComponent } from './c25improovngmodel/c25improovngmodel.component';
import { C25portalComponent } from './c25portal/c25portal.component';

@NgModule({
  declarations: [
    AppComponent,
    C7inbuiltpipesComponent,
    C25improovngmodelComponent,
    C25portalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
