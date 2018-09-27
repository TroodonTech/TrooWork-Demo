import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionReportComponent } from './inspection-report/inspection-report.component';
import { BarcodeReportComponent } from './barcode-report/barcode-report.component';
import { DashboardReportComponent } from './dashboard-report/dashboard-report.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InspectionReportComponent,BarcodeReportComponent, DashboardReportComponent]
})
export class ReportsModule { }
