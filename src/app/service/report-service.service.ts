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
  getdashboardreport(date1,date2,em_Key,Workorder_TypeKey)
  {
    debugger;
    const url='http://localhost:3000/api/getEmployeeForPie';
    const obj = {
      date: date1,
      date1:date2,
      empkey:em_Key,
      WorkorderTypeKey:Workorder_TypeKey,
      managerKey: 2861,
      OrganizationID:21
     };
    return this
      .http
      .post (url,obj);
  }
  getvaluesfilterbypie(date1,date2,em_Key,Workorder_TypeKey,org_id,Manager)
  {
    debugger;
    const url='http://localhost:3000/api/workorderByfilterPie';
    const obj = {
      manager :Manager,
      workorderDate:date1,
      workorderDate2 :date2,
      employeekey :em_Key,      
      workorderTypeKey : Workorder_TypeKey,      
       OrganizationID : org_id
    };
    return this
      .http
      .post (url,obj);

  }
   // code by sudina ends


   // code by Anju starts
   //Services for barcode reporting 
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

       //services for workorder reporting
       getEmployee()
     {
      return this
     .http
      .get('http://localhost:3000/api/getAllValueByDomain?domainName=employees&empkey'+2861+'&OrganizationID='+21);
   }

   getWorkstatus()
   {
    return this
    .http
     .get('http://localhost:3000/api/getAllValueByDomain?domainName=workstatus&empkey'+2861+'&OrganizationID='+21);
   }

   getRooms(fkey,floorkey,zonekey)
   {
    return this
    .http
     .get('http://localhost:3000/api/roomByFacility_Floor_zone?fkey='+fkey+'&floorkey='+floorkey+'&zonekey='+zonekey+'&OrganizationID='+21 );
   }

   generateWorkOrderReportService(FacilityKey,FloorKey,RoomTypeKey,ZoneKey,fromdate,todate,RoomKey,Employeekey,workorderStatusKey)
   {
   const url='http://localhost:3000/api/workorderReportByallFilters';
   const obj = {
     OrganizationID:21,
     manager: 2861,
     workorderDate:fromdate,
     workorderDate2:todate,
     facilitykey:FacilityKey,
     floorKey:FloorKey,
     roomTypeKey:RoomTypeKey,
     zoneKey:ZoneKey,
     roomKey:RoomKey,
     employeekey:Employeekey,
     workorderStatusKey:workorderStatusKey

   
    };
   return this
     .http
     .post (url,obj);

    }

   //code by Anju Ends
}
