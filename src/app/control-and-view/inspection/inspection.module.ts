import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InspectionCreateComponent } from './inspection-create/inspection-create.component';
import { InspectiontemplateCreateComponent } from './inspectiontemplate-create/inspectiontemplate-create.component';
import { InspectiontemplateandquestionsViewComponent } from './inspectiontemplateandquestions-view/inspectiontemplateandquestions-view.component';
import { InspectiontemplateEditComponent } from './inspectiontemplate-edit/inspectiontemplate-edit.component';
import { InspectiontemplatedetailEditComponent } from './inspectiontemplatedetail-edit/inspectiontemplatedetail-edit.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InspectionCreateComponent, InspectiontemplateCreateComponent, InspectiontemplateandquestionsViewComponent, InspectiontemplateEditComponent, InspectiontemplatedetailEditComponent]
})
export class InspectionModule { }
