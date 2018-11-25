import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C7inbuiltpipesComponent } from './c7inbuiltpipes/c7inbuiltpipes.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { C25improovngmodelComponent } from './c25improovngmodel/c25improovngmodel.component';
import { C25portalComponent } from './c25portal/c25portal.component';
import { TeacherComponent } from './c25portal/teacher/teacher.component';
import { StudentComponent } from './c25portal/student/student.component';
import { RouterModule } from '@angular/router';
import {routes} from './Routes';
import { C26TemplateDrivenFormComponent } from './c26-template-driven-form/c26-template-driven-form.component';
import { C27TDFValidationComponent } from './c27-tdfvalidation/c27-tdfvalidation.component';
import { C28ReactiveFormsComponent } from './c28-reactive-forms/c28-reactive-forms.component';
@NgModule({
  declarations: [
    AppComponent,
    C7inbuiltpipesComponent,
    C25improovngmodelComponent,
    C25portalComponent,
    TeacherComponent,
    StudentComponent,
    C26TemplateDrivenFormComponent,
    C27TDFValidationComponent,
    C28ReactiveFormsComponent,
    
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  // entryComponents:[TeacherComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
