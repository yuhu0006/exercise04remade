import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    BrowserModule,
    FormsModule
  ]
})
export class TemplateModule { }
