import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportServiceService {

  constructor(private http: HttpClient) { }
   // code by sudina starts
  getallsupervisor() {
    return this
      .http
      .get('http://localhost:3000/api/supervisorname?employeekey='+2861+'&OrganizationID='+21);
  }
  getinspectionreport(fromdate,todate,SupervisorKey)
  {

    return this
      .http
      .get('http://localhost:3000/api/viewinspection_Filter?key='+SupervisorKey+'&searchDT='+fromdate+'&searchDT2='+todate+'&OrganizationID='+21);
  }
  getinspectionreport_bydate(fromdate,todate)
  {
    return this
    .http
    .get('http://localhost:3000/api/viewinspectionReport_FilterByDates?employeekey='+2861+'&searchDT='+fromdate+'&searchDT2='+todate+'&OrganizationID='+21);
  }
  getallemployee()
  {
    return this
    .http
    .get('http://localhost:3000/api/allemployees?employeekey='+2861+'&OrganizationID='+21);
  }
  getallworkordertype()
  {
    return this
    .http
    .get('http://localhost:3000/api/allWorkordertype?employeekey='+2861+'&OrganizationID='+21);
  }
  getdashboardreport(currentdate,currentdate1,em_Key,Workorder_TypeKey)
  {
    const url='http://localhost:3000/api/getEmployeeForPie';
    const obj = {
      date: currentdate,
      date1:currentdate1,
      empkey:em_Key,
      WorkorderTypeKey:Workorder_TypeKey,
      managerKey: 2861,
      OrganizationID:21

//       Date: "2018-09-16"
// Date1: "2018-09-16"
// EmployeeKey: null
// OrganizationID: 21
// WorkorderTypeKey: null
// managerKey: "2861"
     };
    return this
      .http
      .post (url,obj);
  }
   // code by sudina ends
   // code by Anju starts
   getBarcodeReport()
   {
     return this
     .http
     .get('http://localhost:3000/api/allfacility?empkey='+2861+'&OrganizationID='+21);
   }

   getEquipmentType()
   {
    return this
    .http
    .get('http://localhost:3000/api/allequiptype?employeekey='+2861+'&OrganizationID='+21);
   }

   getEquipment()
   {
    return this
    .http
    .get('http://localhost:3000/api/getallEquipments?employeekey='+2861+'&OrganizationID='+21);
   }

   getFloor(FacilityKey)
   {
    return this
    .http
    .get('http://localhost:3000/api/domainvaluesByKey?domain=facilityOnly&key='+FacilityKey+'&OrganizationID='+21);
   }

   //code by Anju Ends
}
