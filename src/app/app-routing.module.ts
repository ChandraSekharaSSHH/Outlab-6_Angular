import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';

import { FormComponent } from './form/form.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes=[
  {path: 'contact',component:ContactComponent},
  {path: 'form',component:FormComponent},
  {path: '',redirectTo:'contact',pathMatch:'full'},
  {path: '**',redirectTo:'contact'},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
