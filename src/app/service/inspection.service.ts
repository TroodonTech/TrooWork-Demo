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
}
