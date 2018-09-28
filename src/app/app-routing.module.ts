import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './control-and-view/dashboard/login/login.component';
import { WelcomepageComponent } from './control-and-view/dashboard/welcomepage/welcomepage.component';
import { ManagerDashBoardComponent } from './control-and-view/dashboard/manager-dash-board/manager-dash-board.component';

import { BuildingViewComponent } from './control-and-view/inventory/building-view/building-view.component';
import { CreatebuildingComponent } from './control-and-view/inventory/createbuilding/createbuilding.component';
import { BuildingEditComponent } from './control-and-view/inventory/building-edit/building-edit.component';

import { CreateEmployeeComponent } from './control-and-view/people/create-employee/create-employee.component';

import { FloorViewComponent } from './control-and-view/inventory/floor-view/floor-view.component';
import { FloorCreateComponent } from './control-and-view/inventory/floor-create/floor-create.component';
import { FloorEditComponent } from './control-and-view/inventory/floor-edit/floor-edit.component';

import { ManageLoginCredentialsComponent } from './control-and-view/people/manage-login-credentials/manage-login-credentials.component';
import { ResetPassWordComponent } from './control-and-view/people/reset-pass-word/reset-pass-word.component';
import { InspectiontemplateCreateComponent } from './control-and-view/inspection/inspectiontemplate-create/inspectiontemplate-create.component';

import { ZoneViewComponent } from './control-and-view/inventory/zone-view/zone-view.component';
import { ZoneEditComponent } from './control-and-view/inventory/zone-edit/zone-edit.component';
import { ZoneCreateComponent } from './control-and-view/inventory/zone-create/zone-create.component';

import { InspectionCreateComponent } from './control-and-view/inspection/inspection-create/inspection-create.component';
import { InspectionReportComponent } from './control-and-view/reports/inspection-report/inspection-report.component';
import { BarcodeReportComponent } from './control-and-view/reports/barcode-report/barcode-report.component';
import { DashboardReportComponent } from './control-and-view/reports/dashboard-report/dashboard-report.component';

import { DepartmentCreateComponent } from './control-and-view/inventory/department-create/department-create.component';
import { DepartmentEditComponent } from './control-and-view/inventory/department-edit/department-edit.component';
import { DepartmentViewComponent } from './control-and-view/inventory/department-view/department-view.component';

import { EquipmentCreateComponent } from './control-and-view/inventory/equipment-create/equipment-create.component';
import { EquipmentEditComponent } from './control-and-view/inventory/equipment-edit/equipment-edit.component';
import { EquipmentViewComponent } from './control-and-view/inventory/equipment-view/equipment-view.component';
import { EquipmentTypeCreateComponent } from './control-and-view/inventory/equipment-type-create/equipment-type-create.component';
import { EquipmentTypeEditComponent } from './control-and-view/inventory/equipment-type-edit/equipment-type-edit.component';
import { EquipmentTypeViewComponent } from './control-and-view/inventory/equipment-type-view/equipment-type-view.component';

import { RoomViewComponent } from './control-and-view/inventory/room-view/room-view.component';
import { RoomTypeViewComponent } from './control-and-view/inventory/room-type-view/room-type-view.component';
import { RoomTypeCreateComponent } from './control-and-view/inventory/room-type-create/room-type-create.component';
import { RoomTypeUpdateComponent } from './control-and-view/inventory/room-type-update/room-type-update.component';
import {InspectiontemplateEditComponent} from './control-and-view/inspection/inspectiontemplate-edit/inspectiontemplate-edit.component';
import { FloorTypeViewComponent } from './control-and-view/inventory/floor-type-view/floor-type-view.component';
import { FloorTypeCreateComponent } from './control-and-view/inventory/floor-type-create/floor-type-create.component';
import { FloorTypeEDitComponent } from './control-and-view/inventory/floor-type-edit/floor-type-edit.component';
import {InspectiontemplateandquestionsViewComponent} from './control-and-view/inspection/inspectiontemplateandquestions-view/inspectiontemplateandquestions-view.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'welcomePage',
    component: WelcomepageComponent
  },
  {
    path: 'Buildview',
    component: BuildingViewComponent
  },
  {
    path: 'Createbuilding',
    component: CreatebuildingComponent
  },
  {
    path: 'Buildedit/:Facility_Key',
    component: BuildingEditComponent
  },
  {
    path: 'addEmployee',
    component: CreateEmployeeComponent
  },
  {

    path: 'Floorview',
    component: FloorViewComponent
  },
  {
    path: 'Createfloor',
    component: FloorCreateComponent
  },
  {
    path: 'Flooredit/:Floor_Key/:Facility_Key',
    component: FloorEditComponent
  },
  {
    path: 'manageLoginCredentials',
    component: ManageLoginCredentialsComponent
  },
  {
    path: 'resetPassword/:EmpKey',
    component: ResetPassWordComponent
  },
  {
    path: 'Zoneview',
    component: ZoneViewComponent
  },
  {
    path: 'Zonedit/:Floor_Key/:Facility_Key/:Zone_Key',
    component: ZoneEditComponent
  },
  {
    path: 'Createzone',
    component: ZoneCreateComponent
  },
  {
    path: 'Inspection-Report',
    component: InspectionReportComponent
  },
  {
    path: 'BarcodeReport',
    component: BarcodeReportComponent

  },
  {
    path: 'InspectionCreate',
    component: InspectionCreateComponent
  },
  {
    path: 'CreateInspectionTemplate',
    component: InspectiontemplateCreateComponent
  },
  {
    path: 'Dashboard-Report',
    component: DashboardReportComponent
  },
  {
    path: 'createDepartment',
    component: DepartmentCreateComponent
  },
  {
    path: 'departmentEdit/:DeptKey',
    component: DepartmentEditComponent
  },
  {
    path: 'DepartmentView',
    component: DepartmentViewComponent
  },
  {
    path: 'EquipmentView',
    component: EquipmentViewComponent
  },
  {
    path: 'EquipmentCreate',
    component: EquipmentCreateComponent
  },
  {
    path: 'EquipmentEdit',
    component: EquipmentEditComponent
  },
  {
    path: 'EquipmentTypeCreate',
    component: EquipmentTypeCreateComponent
  },
  {
    path: 'EquipmentTypeView',
    component: EquipmentTypeViewComponent
  },
  {
    path: 'EquipmentTypeEdit/:EquipTypeKey',
    component: EquipmentTypeEditComponent
  },
  {
    path: 'roomView',
    component: RoomViewComponent
  },
  {
    path: 'roomTypeView',
    component: RoomTypeViewComponent
  },
  {
    path: 'roomTypeCreate',
    component: RoomTypeCreateComponent
  },
  {
    path: 'roomTypeEdit/:RoomTypeKey',
    component: RoomTypeUpdateComponent
  },
  {
    path: 'FloorTypeView',
    component: FloorTypeViewComponent
  },
  {
    path: 'FloorTypeCreate',
    component: FloorTypeCreateComponent
  },
  {
    path: 'FloorTypeEdit/:FloorTypeKey',
    component: FloorTypeEDitComponent
  },
  {
    path: 'InspectiontemplateandquestionsView',
    component:InspectiontemplateandquestionsViewComponent
  },
  {
    path: 'InspectiontemplateEdit',
    component:InspectiontemplateEditComponent
  }
];


@NgModule({
  imports: [
    CommonModule, RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
