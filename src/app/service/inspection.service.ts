import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  constructor(private http: HttpClient) { }
  getTemplateName() {
    return this
      .http
      .get('http://localhost:3000/api/getTemplates?employeekey='+2861+'&OrganizationID='+21);
  }
  getScoreTypeList(){
    return this
    .http
    .get('http://localhost:3000/api/scoringtype?OrganizationID='+21);
  }
  createInspectionTemplate(ScoreTypeKey,InspTempName,QustArry) {
     const url='http://localhost:3000/api/addTemplatequestion';
     const obj = {
      scoringTypeKey : ScoreTypeKey,
      question : QustArry,
      templatename :InspTempName,
      employeekey: 2861,
      OrganizationID:21
      };
     return this
       .http
       .post (url,obj).subscribe(res => console.log('Done'));
  }
  getTemplateNameList(){
    return this
    .http
    .get('http://localhost:3000/api/getTempDetailsForDropdown?employeekey='+2861+'&OrganizationID='+21);
  }
  getInspectionTemplateTable(key){
    return this
    .http
    .get('http://localhost:3000/api/getTemplateFilterByTemplateID?key='+key+'&OrganizationID='+21);
  }
  DeleteInspectionTemplate(templateID,templateQuestionID){
    const url='http://localhost:3000/api/deleteInspectionTemplateQuestions';
    const obj = {
      templateID : templateID,
      templateQuestionID : templateQuestionID,
      updatedBy :2861,
      OrganizationID: 21     
      };
     return this
       .http
       .post (url,obj);
  }
  getInspectionTemplateDetails(){
    return this
    .http
    .get('http://localhost:3000/api/getTemplateDetails?pageno='+1+'&itemsPerPage='+25+'&empkey='+2861+'&OrganizationID='+21);

  }
  DeleteTemplate(templateID){
    const url='http://localhost:3000/api/deleteInspectionTemplate';
    const obj = {
      templateID : templateID,
      updatedBy :2861,
      OrganizationID: 21     
      };
     return this
       .http
       .post (url,obj);
  }
  SearchTemplate(searchMytemp){
    return this
      .http
      .get('http://localhost:3000/api/searchMytemplate?OrganizationID='+21+'&searchMytemp='+searchMytemp)
  }
  }

