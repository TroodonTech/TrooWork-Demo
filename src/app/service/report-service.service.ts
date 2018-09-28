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
  getpievalues(currentdate)
  {
    return this
    .http
    .get('http://localhost:3000/api/allWorkordertype?date='+currentdate+'&empkey='+2861+'&userkey='+2861+'&OrganizationID='+21);
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

   getFloor(key)
   {
    return this
    .http
    .get('http://localhost:3000/api/domainvaluesByKey?domain=facilityOnly&key='+key+'&OrganizationID='+21);
   }
   getZone(fkey,floorkey)
   {
    return this
    .http
    .get('http://localhost:3000/api/zoneByFacility_Floor?fkey='+fkey+'&floorkey='+floorkey+'&OrganizationID='+21);
   }

   getRoom(fkey,floorkey)
   {
    return this
    .http
    .get('http://localhost:3000/api/roomtypeByFacility_Floor?fkey='+fkey+'&floorkey='+floorkey+'&OrganizationID='+21);
     }


     generateBarcodeReportService(FacilityKey,FloorKey,RoomTypeKey,ZoneKey)
    {
    const url='http://localhost:3000/api/barcodeReportByallFilters';
    const obj = {
      OrganizationID:21,
      manager: 2861,
      facilitykey:FacilityKey,
      floorKey:FloorKey,
      roomTypeKey:RoomTypeKey,
      zoneKey:ZoneKey

    
     };
    return this
      .http
      .post (url,obj);

     }
     generateBarcodeByEqupiment(EquipmentKey,EquipmentTypeKey)
     {
      const url='http://localhost:3000/api/barcodeReportByEquipment';
      const obj = {
        OrganizationID:21,
        employeekey: 2861,
        EquipmentTypeKey:EquipmentTypeKey,
        EquipmentKey:EquipmentKey
  
      
       };
      return this
        .http
        .post (url,obj);    
       }
   //code by Anju Ends
}
