import { Routes } from "@angular/router";
import { C25portalComponent } from './c25portal/c25portal.component';
import { TeacherComponent } from './c25portal/teacher/teacher.component';
import { StudentComponent } from './c25portal/student/student.component';
import {C26TemplateDrivenFormComponent} from './c26-template-driven-form/c26-template-driven-form.component';
import {C27TDFValidationComponent} from './c27-tdfvalidation/c27-tdfvalidation.component';
import {C28ReactiveFormsComponent} from './c28-reactive-forms/c28-reactive-forms.component';
import {C31NgcontentHomeComponent} from './c31-ngcontent-home/c31-ngcontent-home.component';

export const routes:Routes=[

    {path:'portal',component:C25portalComponent},
    {path:'teacher',component:TeacherComponent},
    {path:'student',component:StudentComponent},
    {path:'tdf',component:C26TemplateDrivenFormComponent},
    {path:'tdfValidation',component:C27TDFValidationComponent},
    {path:'reactiveForms',component:C28ReactiveFormsComponent},
    {path:'ngContentHome',component:C31NgcontentHomeComponent}
    
];