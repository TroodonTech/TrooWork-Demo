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
    getworkorder(on_date,emp_key,page_no,iems_perpage,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/viewworkorder?viewdate='+on_date+'&employeekey='+emp_key+'&pageno='+page_no+'&itemsPerPage='+iems_perpage+'&OrganizationID='+org_id);
    }
    getWoFilter(viewWorkOrder)
    {
      const url = 'http://localhost:3000/api/workorderByallFilters';
      return this
        .http
        .post (url, viewWorkOrder);
    }
    getallEquipment(facility_key,floor_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/getEquipmentBuildFloor?FacilityKey='+facility_key+'&FloorKey='+floor_key+'&OrganizationID='+org_id);
    }
    getEquipment_typechange(equip_type,facility,floor,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/getEquipmentEquTypeChange?FacilityKey='+facility+'&FloorKey='+floor+'&EquipmentTypeKey='+equip_type+'&OrganizationID='+org_id);
    }
    addWorkOrderWithOutEqup(obj) {
      const url = 'http://localhost:3000/api/addNewWorkorder';
      return this
        .http
        .post (url, obj);
    }
    addWorkOrderEqup(obj) {
      const url = 'http://localhost:3000/api/addworkorderwithEquipment';
      return this
        .http
        .post (url, obj);
    }
    search_WO(obj)
    {
      const url = 'http://localhost:3000/api/searchWorkorderByallFilters';
      return this
        .http
        .post (url, obj);
    }
    delete_WO(obj)
    {
      const url = 'http://localhost:3000/api/deleteWorkOrders';
    return this
      .http
      .post (url, obj);
    }
    getWO_edit(WO_Key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/workorderDetails?SearchKey='+WO_Key+'&OrganizationID='+org_id);
    }
    getFloor( WOrder_Key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/getFloorKeyForEquipWorkOrder?workorderkey='+WOrder_Key+'&OrganizationID='+org_id);
    }
    deleteCurrent_WO(obj)
    {
      const url = 'http://localhost:3000/api/deleteByWorkorderKey';
      return this
        .http
        .post (url, obj);
    }
    checkforcheckForWorkOrderType(newworkordertypetext, emp_key,org_id)
    {
      return this
      .http
      .get('http://localhost:3000/api/checkforcheckForWorkOrderType?WorkorderTypeName='+newworkordertypetext+'&employeekey='+emp_key+'&OrganizationID='+org_id);
    }
    AddnewWOT(obj)
    {
      const url = 'http://localhost:3000/api/addworkordertype';
      return this
        .http
        .post (url, obj);
    }

// ****Pooja's code starts here****

    getallBuildingsForEmployee(empk,orgid){
      return this
      .http
      .get('http://localhost:3000/api/allfacility?empkey='+empk+'&OrganizationID='+orgid);
    }
    getallFloorNames(key,orgid){
      return this
      .http
      .get('http://localhost:3000/api/domainvaluesByKey?domain=facilityOnly'+'&key='+key+'&OrganizationID='+orgid);
    }
    getallZones(facikey,flkey,orgid){
      return this
      .http
      .get('http://localhost:3000/api/zoneByFacility_Floor?fkey='+facikey+'&floorkey='+flkey+'&OrganizationID='+orgid);

    }
    getallRoomType(facikey,flkey,orgid){
      return this
      .http
      .get('http://localhost:3000/api/roomtypeByFacility_Floor?fkey='+facikey+'&floorkey='+flkey+'&OrganizationID='+orgid); 
    }
    getWOdetailsForEmployee(curr_date,empk,orgid){
      return this
      .http
      .get('http://localhost:3000/api/viewworkorder?viewdate='+curr_date+'&employeekey='+empk+'&pageno='+1+'&itemsPerPage='+25+'&OrganizationID='+orgid);
    }
    getworkOrderTablewithOnDateOnly(date1,tosrvempky,orgid)
    {
      return this
      .http
      .get('http://localhost:3000/api/viewworkorder?viewdate='+date1+'&employeekey='+tosrvempky+'&pageno='+1+'&itemsPerPage='+25+'&OrganizationID='+orgid);
    }
    getworkOrderTablewithOnDateandToDateFilter(date1,date2,tosrvempky,orgid,FacKey,Flrky,RmTypKy,ZnKy)
    {
      const url = 'http://localhost:3000/api/workorderEmployeeByallFilters';
      const obj = {
        manager : tosrvempky,
        workorderDate :date1,
        workorderDate2: date2,
        facilitykey:FacKey,
        roomTypeKey:RmTypKy,
        floorKey:Flrky,
        zoneKey:ZnKy,
        OrganizationID:orgid
        };
       return this
         .http
         .post (url,obj);
    }
    SearchwoByEmployee(SearchValue, date1, date2,tosrvempky,orgid,FacKey,Flrky,RmTypKy,ZnKy)
    {
      const url = 'http://localhost:3000/api/myWorkOrderSearchList';
    const obj = {
      searchWO : SearchValue,
      workorderDate :date1,
      workorderDate2: date2,
      manager:tosrvempky,
      OrganizationID:orgid,
      facilitykey:FacKey,
      floorKey:Flrky,
      roomTypeKey:RmTypKy,
      zoneKey:ZnKy
      };
     return this
       .http
       .post (url,obj);
    }
    BarcodeRoomCheck(BarcodeValue,workorderkey,OrganizationID)
    {
      return this
      .http
      .get('http://localhost:3000/api/barcodeRoom_check?barcode=' + BarcodeValue + "&wkey=" + workorderkey+ "&OrganizationID="+OrganizationID);
    }
    BarcodeRoom(BarcodeValue,toServeremployeekey,workorderkey,type,OrganizationID)
    {
      return this
      .http
      .get('http://localhost:3000/api/barcodeRoom?barcode=' + BarcodeValue + "&employeekey=" + toServeremployeekey + "&wkey=" + workorderkey + "&updatetype=" + type+ "&OrganizationID="+OrganizationID);
    }
    UpdatewobyPhotoForEmployee(fileName,toServeremployeekey,workorderkey,orgid)
    {
      return this
      .http
      .get('http://localhost:3000/api/updateWorkorderByPhoto?pho=' + fileName + "&employeekey=" + toServeremployeekey + "&wkey=" + workorderkey+"&OrganizationID="+orgid);
    }
    CompletewoByempWithoutPhotoandBarcd(toServeremployeekey,workorderkey,OrganizationID)
    {
      return this
      .http
      .get('http://localhost:3000/api/workCompleted?employeekey=' + toServeremployeekey + "&wkey=" + workorderkey+"&OrganizationID="+OrganizationID);
    }
    // ****Pooja's code ends here****
}
