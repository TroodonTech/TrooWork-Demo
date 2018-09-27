import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StaticSymbolResolver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  //http: HttpClient
  getBuildings() {
    return this
      .http
      .get('http://localhost:3000/api/allfacilityByPageNo?pageno=' + 1 + '&itemsperpage=' + 1000 + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }
  EditFacility(facKey) {
    return this
      .http
      .get('http://localhost:3000/api/getfacilityById?facKey=' + facKey + '&OrganizationID=' + 21);

  }
  EditFloorAutoGenerate(floorKey, facKey) {
    return this
      .http
      .get('http://localhost:3000/api/getFloorById?facKey=' + facKey + '&floorKey=' + floorKey + '&OrganizationID=' + 21);
  }
  UpdateBuilding(FacilityName, FacilityKey) {
    // debugger;
    // return this
    //   .http
    //   .get('http://localhost:3000/api/updateFacility?facility_key=' + FacilityKey + '&facility_name=' + FacilityName + '&employeekey=' + 2861 + '&OrganizationID=' + 21)
    //   .subscribe(res => console.log('Done'));
    const url = 'http://localhost:3000/api/updateFacility';
    const obj = {
      facility_key: FacilityKey,
      facility_name: FacilityName,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this
      .http
      .post(url, obj).subscribe(res => console.log('Done'));

  }
  DeleteBuilding(facility_key) {
    // debugger;
    // return this
    //   .http
    //   .get('http://localhost:3000/api/deleteFacility?facility_key=' + facility_key + '&employeekey=' + 2861 + '&OrganizationID=' + 21)
    const url = 'http://localhost:3000/api/deleteFacility';
    const obj = {
      facility_key: facility_key,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this
      .http
      .post(url, obj);

  }
  DeleteFloor(FacilityKey, FloorKey) {
    // debugger;
    // return this
    //   .http
    //   .get('http://localhost:3000/api/deleteFloor?FacilityKey=' + FacilityKey + '&FloorKey=' + FloorKey + '&employeekey=' + 2861 + '&OrganizationID=' + 21)
    const url = 'http://localhost:3000/api/deleteFloor';
    const obj = {
      FacilityKey: FacilityKey,
      FloorKey: FloorKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this
      .http
      .post(url, obj);

  }
  SearchBuilding(SearchFacility) {
    return this
      .http
      .get('http://localhost:3000/api/searchBuildingList?OrganizationID=' + 21 + '&searchFacility=' + SearchFacility)


  }
  SearchFloor(SearchFloor) {
    return this
      .http
      .get('http://localhost:3000/api/getSearchFloor?OrganizationID=' + 21 + '&searchFloor=' + SearchFloor)


  }
  getFloors() {
    // debugger;
    return this
      .http
      .get('http://localhost:3000/api/getAllfacility_floor?pagenumber=' + 1 + '&itemsPerPage=' + 1000 + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }
  getZones() {
    // debugger;
    return this
      .http
      .get('http://localhost:3000/api/getAllfacility_floor_zone?pageno=' + 1 + '&itemsperpage=' + 1000 + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }
  createFloors(FacilityKey, FloorName, FloorDescription) {
    // debugger;
    // return this
    //   .http
    //   .get('http://localhost:3000/api/addnewfloor?FacilityKey=' + FacilityKey + '&FloorDescription=' + FloorDescription + '&FloorName=' + FloorName + '&OrganizationID=' + 21 + '&employeekey=' + 2861)
    //   .subscribe(res => console.log('Done'));
    const url = 'http://localhost:3000/api/addnewfloor';
    const obj = {
      FacilityKey: FacilityKey,
      FloorDescription: FloorDescription,
      FloorName: FloorName,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this
      .http
      .post(url, obj).subscribe(res => console.log('Done'));
  }
  createZones(FacilityKey, FloorName, ZoneName) {
    //debugger;
    // return this
    //   .http
    //   .get('http://localhost:3000/api/addnewZone?facility=' + FacilityKey + '&floor=' + FloorName + '&zone=' + ZoneName + '&OrganizationID=' + 21 + '&employeekey=' + 2861)
    //   .subscribe(res => console.log('Done'));
    const url = 'http://localhost:3000/api/addnewZone';
    const obj = {
      facility: FacilityKey,
      floor: FloorName,
      zone: ZoneName,
      OrganizationID: 21,
      employeekey: 2861
    };
    return this
      .http
      .post(url, obj).subscribe(res => console.log('Done'));
  }

  getallBuildingList() {
    return this
      .http
      .get('http://localhost:3000/api/allfacility?empkey=' + 2861 + '&OrganizationID=' + 21);
  }
  getallFloorList(facKey) {
    return this
      .http
      .get('http://localhost:3000/api/floorvaluesByfacKey?key=' + facKey + '&OrganizationID=' + 21);
  }
  UpdateFloor(FacilityKey, FloorKey, FloorName, FloorDescription) {
    // return this
    //   .http
    //   .get('http://localhost:3000/api/updateFloor?FacilityKey=' + FacilityKey + '&FloorKey=' + FloorKey + '&FloorName=' + FloorName + '&FloorDescription=' + FloorDescription + '&employeekey=' + 2861 + '&OrganizationID=' + 21)
    //   .subscribe(res => console.log('Done'));
    const url = 'http://localhost:3000/api/updateFloor';
    const obj = {
      FacilityKey: FacilityKey,
      FloorKey: FloorKey,
      FloorName: FloorName,
      FloorDescription: FloorDescription,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this
      .http
      .post(url, obj).subscribe(res => console.log('Done'));
  }

  // @rodney starts....
  searchZone(SearchZone) {
    return this
      .http
      .get('http://localhost:3000/api/searchZoneList?OrganizationID=' + 21 + '&searchZone=' + SearchZone)
  }

  EditZoneAutoGenerate(zoneKey) {
    return this
      .http
      .get('http://localhost:3000/api/getZoneById?zoneKey=' + zoneKey + '&OrganizationID=' + 21);
  }


  checkForZone(FacilityKey, FloorKey, ZoneName) {
    return this
      .http
      .get('http://localhost:3000/api/checkForNewZone?FacilityKey=' + FacilityKey + '&FloorKey=' + FloorKey +
        '&ZoneName=' + ZoneName + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }

  updateZone(facilityKey, facilityName, floorName, floorKey, zoneKey, zoneName) {
    const uri = "http://localhost:3000/api/updateZone";
    const obj = {
      FacilityKey: facilityKey,
      FloorKey: floorKey,
      FacilityName: facilityName,
      FloorName: floorName,
      ZoneKey: zoneKey,
      ZoneName: zoneName,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }


  DeleteZone(FacilityKey, FloorKey, ZoneKey) {
    const uri = "http://localhost:3000/api/deleteZoneById";
    const obj = {
      facility: FacilityKey,
      floorkey: FloorKey,
      zoneKey: ZoneKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  checkForNewDepartment(DeptName) {
    return this
      .http
      .get('http://localhost:3000/api/checkForNewInventory?checkValue=' + DeptName + '&type=department' + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }
  addDepartment(DeptName) {
    const uri = "http://localhost:3000/api/addNewDepartment";
    const obj = {
      DepartmentName: DeptName,
      empkey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }


  getDepartmentList() {
    return this
      .http
      .get('http://localhost:3000/api/viewDepartmentpage?pageno=' + 1 + '&itemsPerPage=' + 1000 + '&empkey=' + 2861 + '&OrganizationID=' + 21);
  }

  SearchDepartment(DeptName) {
    return this
      .http
      .get('http://localhost:3000/api/searchDepartmentType?OrganizationID=' + 21 + '&searchDepartment=' + DeptName)
  }

  DeleteDepartment(deptKey) {
    const uri = "http://localhost:3000/api/deleteDepartment";
    const obj = {
      DepartmentKey: deptKey,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  EditDepartment(deptKey) {
    return this
      .http
      .get('http://localhost:3000/api/editviewDepartment?DepartmentKey=' + deptKey + '&OrganizationID=' + 21);

  }
  UpdateDepartment(departmentName, departmentKey) {
    const uri = "http://localhost:3000/api/editSelectedDepartment";
    const obj = {
      DepartmentKey: departmentKey,
      DepartmentName: departmentName,
      empkey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }


  SearchEquipment(EquipName) {
    return this
      .http
      .get('http://localhost:3000/api/searchequipment?OrganizationID=' + 21 + '&searchEquipment=' + EquipName);
  }

  getEquipmentList() {
    return this
      .http
      .get('http://localhost:3000/api/getAllEquipmentTypeEquipment?pageno=' + 1 + '&itemsperpage=' + 1000 + '&empkey=' + 2861 + '&OrganizationID=' + 21);
  }


  DeleteEquipment(EquipKey) {
    const uri = "http://localhost:3000/api/deleteEquipmentById";
    const obj = {
      EquipmentKey: EquipKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  getEquipmentTypeList() {
    return this
      .http
      .get('http://localhost:3000/api/getAllEquipmentTypes?pageno=' + 1 + '&itemsperpage=' + 1000 + '&empkey=' + 2861 + '&OrganizationID=' + 21);
  }
  SearchEquipmentType(EquipTypeName) {
    return this
      .http
      .get('http://localhost:3000/api/searchEquipmentTypeList?OrganizationID=' + 21 + '&searchEquipmentType=' + EquipTypeName);
  }

  DeleteEquipmentType(EquipTypeKey) {
    const uri = "http://localhost:3000/api/deleteEquipmentTypeById";
    const obj = {
      equipmentTypeKey: EquipTypeKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  checkForNewEquipmentType(EquipmentTypeName) {
    return this
      .http
      .get('http://localhost:3000/api/checkForNewInventory?checkValue=' + EquipmentTypeName + '&type=equipmenttype' + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }

  addEquipmentType(EquipmentTypeName, EquipmentTypeDescription) {
    const uri = "http://localhost:3000/api/addnewEquipmentType";
    const obj = {
      EquipmentType: EquipmentTypeName,
      EquipmentTypeDescription: EquipmentTypeDescription,
      EquipmentTypeKey: -99,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  getEquipmentTypeListEdit(equipTypeKey) {
    return this
      .http
      .get('http://localhost:3000/api/getEquipmentTypeKeyById?equipmentTypeKey=' + equipTypeKey + '&OrganizationID=' + 21);
  }

  UpdateEquipmentType(equipType, equipTypeDesc, equipTypeKey) {
    const uri = "http://localhost:3000/api/updateEquipmentType";
    const obj = {
      EquipmentType: equipType,
      EquipmentTypeDescription: equipTypeDesc,
      EquipmentTypeKey: equipTypeKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }



  getRoomTypeList() {
    return this
      .http
      .get('http://localhost:3000/api/getAllRoomType?pageno=' + 1 + '&itemsperpage=' + 1000 + '&empkey=' + 2861 + '&OrganizationID=' + 21);
  }
  SearchRoomType(RoomType) {
    return this
      .http
      .get('http://localhost:3000/api/searchroomType?OrganizationID=' + 21 + '&searchRoomType=' + RoomType);
  }

  DeleteRoomType(RoomTypeKey) {
    const uri = "http://localhost:3000/api/deleteRoomTypeById";
    const obj = {
      roomTypeKey: RoomTypeKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  getMetricValues() {
    return this
      .http
      .get('http://localhost:3000/api/metricTypevalues?OrganizationID=' + 21);
  }

  checkRoomType(RoomTypeName) {
    return this
      .http
      .get('http://localhost:3000/api/checkForNewInventory?checkValue=' + RoomTypeName + '&type=roomtype' + '&employeekey=' + 2861 + '&OrganizationID=' + 21);
  }

  addRoomType(roomTypeName, MetricTypeValue, metricType) {
    const uri = "http://localhost:3000/api/addnewRoomtype";
    const obj = {
      RoomTypeName: roomTypeName,
      metric: 1,
      MetricType: metricType,
      TypeValue: MetricTypeValue,
      EquipmentTypeKey: -99,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }

  getFloorTypeList() {
    return this
      .http
      .get('http://localhost:3000/api/allFloorType?pagenumber=' + 1 + '&itemsPerPage=' + 1000 + '&empkey=' + 2861 + '&OrganizationID=' + 21);
  }
  SearchFloorType(FloorType) {
    return this
      .http
      .get('http://localhost:3000/api/searchFloorTypeList?OrganizationID=' + 21 + '&searchFloorType=' + FloorType);
  }

  DeleteFloorType(FloorTypeKey) {
    const uri = "http://localhost:3000/api/deleteFloorTypeById";
    const obj = {
      floortypekey: FloorTypeKey,
      employeekey: 2861,
      OrganizationID: 21
    };
    return this.http.post(uri, obj);
  }




  getRoomList() {
    return this
      .http
      .get('http://localhost:3000/api/getAllRooms?pageno=' + 1 + '&itemsperpage=' + 1000 + '&empkey=' + 2861 + '&OrganizationID=' + 21);
  }
  SearchRoom(Room) {
    return this
      .http
      .get('http://localhost:3000/api/searchRoomOnTable?OrganizationID=' + 21 + '&searchRoom=' + Room + '&employeekey=' + 2861);
  }

  DeleteRoom(RoomKey) {
    const uri = "http://localhost:3000/api/deleteRoomById?roomkey=" + RoomKey + "&employeekey=" + 2861 + "&OrganizationID=" + 21;
    const obj = {};
    return this.http.post(uri, obj);
  }
  // @rodney ends....
}
