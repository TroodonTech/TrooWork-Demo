import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GenerateQrCodeListComponent } from "./generate-qr-code-list.component";
// import { ManagerDashBoardModule } from "../../../dashboard/user-dashboards/manager-dash-board/manager-dash-board.module";

const routes: Routes = [
  {
    path: '',
    component: GenerateQrCodeListComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MDBBootstrapModule,
    // ManagerDashBoardModule,
    FormsModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GenerateQrCodeListComponent]
})
export class GenerateQrCodeListModule { }
