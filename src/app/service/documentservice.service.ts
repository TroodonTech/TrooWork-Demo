import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
@Injectable({
  providedIn: 'root'
})
export class DocumentserviceService {

  constructor(private http: HttpClient) { }

  getDocumentFoldersDataTable(empkey,orgid){
    return this
    .http
    .get('http://localhost:3000/api/getFormDetails?pageno='+1+'&itemsPerPage='+25+'&empkey='+empkey+'&OrganizationID='+orgid);
  }
  SearchDocFolder(orgid,SearchValue){
    return this
    .http
    .get('http://localhost:3000/api/searchFormList?OrganizationID='+orgid+'&searchForm='+SearchValue);
  }
  CreateNewDocumentFolder(DocFolderName,servempkey,orgid){
    const url = 'http://localhost:3000/api/addNewForms';
    const obj = {
      newform: DocFolderName,
      serverEmpKey: servempkey,
      OrganizationID: orgid
    };
    return this
      .http
      .post(url, obj);
    
    // return this
    // .http
    // .get('http://localhost:3000/api/addNewForms?newform='+DocFolderName+'&serverEmpKey='+servempkey+'&OrganizationID='+orgid);
  }
  EditDocFolderName(Docfoldername,orgid){
    // debugger;
    return this
    .http
    .get('http://localhost:3000/api/getEditFormDetails?FormtypeId='+Docfoldername+'&OrganizationID='+orgid);
  }
  UpdateDocumentFolderName(formtypeid,formtype,empkey,orgid){
    const url = 'http://localhost:3000/api/updateFormDetails';
    const obj = {
      FormtypeId: formtypeid,
      FormType: formtype,
      empkey:empkey,
      OrganizationID: orgid
    };
    return this
      .http
      .post(url, obj);
  }    
  DeleteDocFolder(deldfkey,orgID){
    const url = 'http://localhost:3000/api/deleteForm';
    const obj = {
      FormtypeId: deldfkey,
      OrganizationID: orgID
    };
    return this
      .http
      .post(url, obj);
  }
  getDocumentFolderNamesfordropdown(empkey,orgID)
  {
    return this
    .http
    .get('http://localhost:3000/api/allFormtype?empkey='+empkey+'&OrganizationID='+orgID);
  }
  getRecentUploads(empkey,orgID)
  {
    return this
    .http
    .get('http://localhost:3000/api/view_uploads?pageno='+1+'&itemsPerPage='+25+'&empkey='+empkey+'&OrganizationID='+orgID);
  }
  SearchFileNameandDescName(orgID,SearchValue){
    return this
    .http
    .get('http://localhost:3000/api/searchViewFormList?OrganizationID='+orgID+'&searchForm='+SearchValue);
  }
  getFileDetailsTablewithDropdown(formtype,empkey,orgID){
    return this
    .http
    .get('http://localhost:3000/api/uploadsByFormType?formType='+formtype+'&empkey='+empkey+'&OrganizationID='+orgID);
  }
//   downloadFile(id): Observable<Blob> {
//     let options = new RequestOptions({responseType: ResponseContentType.Blob });
//     return this.http.get(this._baseUrl + '/' + id, options)
//         .map(res => res.blob())
//         .catch(this.handleError)
// }
}
