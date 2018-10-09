import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WorkOrderServiceService {

  constructor(private http: HttpClient) {}
    getallEmployee(emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/employeeForManager?empkey='+emp_key+'&OrganizationID='+org_id);
    }
    getallFacility(emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/allfacility?empkey='+emp_key+'&OrganizationID='+org_id);
    }
    getallPriority(org_id)
    {
      
      return this
      .http
      .get('http://localhost:3000/api/allpriority?OrganizationID='+org_id);
    }
    addQuickWorkOrder(obj) {
      const url = 'http://localhost:3000/api/addQuickworkorder';
      return this
        .http
        .post (url, obj);
    }
    getallEmployeeName(emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/allemployees?empkey='+emp_key+'&OrganizationID='+org_id);
    }
    getallScheduleName(emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/getBatchScheduleName?empkey='+emp_key+'&OrganizationID='+org_id);
    }
    getallFloor(facilityName,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/domainvaluesByKey?domain=facilityOnly&key='+facilityName+'&OrganizationID='+org_id);
    }
    getzone_facilityfloor(floor,facility,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/zoneByFacility_Floor?fkey='+facility+'&floorkey='+floor+'&OrganizationID='+org_id);
    }
    getroomType_facilityfloor(floor,facility,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/roomtypeByFacility_Floor?fkey='+facility+'&floorkey='+floor+'&OrganizationID='+org_id);
    }
    getRoom_facilityfloor(floor,facility,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/roomByFacility_Floor?fkey='+facility+'&floorkey='+floor+'&OrganizationID='+org_id);
    }
    getRoomtype_zone_facilityfloor(zone,floor,facility,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/roomtypeByFacility_Floor_zone?fkey='+facility+'&floorkey='+floor+'&zonekey='+zone+'&OrganizationID='+org_id);
    }
    getRoom_zone_facilityfloor(zone,floor,facility,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/roomByFacility_Floor_zone?fkey='+facility+'&floorkey='+floor+'&zonekey='+zone+'&OrganizationID='+org_id);
    }
    getRoom_Roomtype_zone_facilityfloor(roomtype,zone,floor,facility,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/roomByFacility_Floor_Zone_RoomType?fkey='+facility+'&floorkey='+floor+'&zonekey='+zone+'&roomtype='+roomtype+'&OrganizationID='+org_id);
    }
    getallworkStatus(domain_name,emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/getAllValueByDomain?domainName='+domain_name+'&empkey='+emp_key+'&OrganizationID='+org_id);
    }
    getallworkorderType(emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/allWorkordertype?empkey='+emp_key+'&OrganizationID='+org_id);
    }
   
}
