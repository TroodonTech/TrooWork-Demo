import { Component, OnInit, OnChanges, Directive, HostListener, ElementRef, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { workorder } from '../../../../model-class/work-order';
import { WorkOrderServiceService } from '../../../../service/work-order-service.service';

@Component({
  selector: 'app-view-batch-workorder',
  templateUrl: './view-batch-workorder.component.html',
  styleUrls: ['./view-batch-workorder.component.scss']
})
export class ViewBatchWorkorderComponent implements OnInit {
  public convert_DT(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");

  }

  // adding properties and methods that will be used by the igxDatePicker
  public date: Date = new Date(Date.now());
  private dayFormatter = new Intl.DateTimeFormat('en', { weekday: 'long' });
  private monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });
  public formatter = (_: Date) => {
    return `You selected ${this.dayFormatter.format(_)}, ${_.getDate()} ${this.monthFormatter.format(_)}, ${_.getFullYear()}`;

  }
  loading: boolean;// loading
  EmployeeOption: workorder[];
  facilitylist: workorder[];
  scheduleList: workorder[];
  FloorList: workorder[];
  zonelist: workorder[];
  RoomTypeList: workorder[];
  workStatusList: workorder[];
  workorderTypeList: workorder[];
  RoomList: workorder[];
  domain_name: string;
  workorderList;
  checkValue = [];
  FacilityKey;
  FloorKey;
  ZoneKey;
  RoomTypeKey;
  RoomKey;
  BatchScheduleNameKey;
  WorkorderStatusKey;
  EmployeeKey;
  WorkorderTypeKey;
  ondate: Date;
  todate: Date;
  viewWorkOrder;
  isRecurring = false;
  marked = false;
  workorderKey = [];
  searchWorkorder;

  role: String;
  name: String;
  employeekey: Number;
  IsSupervisor: Number;
  OrganizationID: Number;
  pageno: Number = 1;
  items_perpage: Number = 25;
  showHide1: boolean;
  showHide2: boolean;
  pagination: Number;

  url_base64_decode(str) {
    var output = str.replace('-', '+').replace('_', '/');
    switch (output.length % 4) {
      case 0:
        break;
      case 2:
        output += '==';
        break;
      case 3:
        output += '=';
        break;
      default:
        throw 'Illegal base64url string!';
    }
    return window.atob(output);
  }

  searchform: FormGroup;
  regexStr = '^[a-zA-Z0-9_ ]*$';
  @Input() isAlphaNumeric: boolean;
  constructor(private formBuilder: FormBuilder, private WorkOrderServiceService: WorkOrderServiceService, private el: ElementRef) { }
  @HostListener('keypress', ['$event']) onKeyPress(event) {
    return new RegExp(this.regexStr).test(event.key);
  }

  @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
    this.validateFields(event);
  }
  validateFields(event) {
    setTimeout(() => {

      this.el.nativeElement.value = this.el.nativeElement.value.replace(/[^A-Za-z ]/g, '').replace(/\s/g, '');
      event.preventDefault();

    }, 100)

  }
  previousPage() {
    var on_date = this.convert_DT(new Date());
    this.pageno = +this.pageno - 1;
    this.WorkOrderServiceService
      .getBatchworkorder(on_date, this.employeekey, this.pageno, this.items_perpage, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.workorderList = data;
        for (var i = 0; i < this.workorderList.length; i++) {
          this.workorderList[i].workorderCheckValue = false;
        }
        if (this.pageno == 1) {
          this.showHide2 = true;
          this.showHide1 = false;
        } else {
          this.showHide2 = true;
          this.showHide1 = true;
        }
      });
  }

  nextPage() {
    var on_date = this.convert_DT(new Date());
    this.pageno = +this.pageno + 1;
    this.WorkOrderServiceService
      .getBatchworkorder(on_date, this.employeekey, this.pageno, this.items_perpage, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.workorderList = data;
        for (var i = 0; i < this.workorderList.length; i++) {
          this.workorderList[i].workorderCheckValue = false;
        }
        this.pagination = +this.workorderList[0].totalItems / (+this.pageno * (+this.items_perpage));
        if (this.pagination > 1) {
          this.showHide2 = true;
          this.showHide1 = true;
        }
        else {
          this.showHide2 = false;
          this.showHide1 = true;
        }
      });
  }
  ngOnInit() {
    this.loading = true;
    var token = localStorage.getItem('token');
    var encodedProfile = token.split('.')[1];
    var profile = JSON.parse(this.url_base64_decode(encodedProfile));
    this.role = profile.role;
    this.IsSupervisor = profile.IsSupervisor;
    this.name = profile.username;
    this.employeekey = profile.employeekey;
    this.OrganizationID = profile.OrganizationID;
    this.domain_name = 'workstatus';
    this.FacilityKey = "";
    this.FloorKey = "";
    this.ZoneKey = "";
    this.RoomTypeKey = "";
    this.RoomKey = "";
    this.EmployeeKey = "";
    this.WorkorderTypeKey = "";
    this.BatchScheduleNameKey = "";

    var on_date = this.convert_DT(new Date());
    this.WorkOrderServiceService
      .getallFacility(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.facilitylist = data;
      });
    this.WorkOrderServiceService
      .getallEmployeeName(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.EmployeeOption = data;
      });
    this.WorkOrderServiceService
      .getallScheduleName(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.scheduleList = data;
      });
    this.WorkOrderServiceService
      .getallworkStatus(this.domain_name, this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.workStatusList = data;
      });
    this.WorkOrderServiceService
      .getallworkorderType(this.employeekey, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.workorderTypeList = data;
      });
    this.WorkOrderServiceService
      .getBatchworkorder(on_date, this.employeekey, this.pageno, this.items_perpage, this.OrganizationID)
      .subscribe((data: any[]) => {
        this.workorderList = data;
        this.loading = false;
        if (this.workorderList[0].totalItems > this.items_perpage) {
          this.showHide2 = true;
          this.showHide1 = false;
        }
        else if (this.workorderList[0].totalItems <= this.items_perpage) {
          this.showHide2 = false;
          this.showHide1 = false;
        }
      });

    this.searchform = this.formBuilder.group({
      SearchWo: ['', Validators.required]
    });

  }
  toggleVisibility(e) {
    if (e.target.checked) {
      this.marked = true;
    } else {
      this.marked = false;
    }
  }
  getFloorDisp(facilityName) {
    if (facilityName) {
      this.WorkOrderServiceService
        .getallFloor(facilityName, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.FloorList = data;
        });
    }
    else {
      this.FloorKey = "";
    }
  }
  getZoneRoomTypeRoom(floor, facility) {
    if (floor && facility) {
      this.WorkOrderServiceService
        .getzone_facilityfloor(floor, facility, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.zonelist = data;
        });
      this.WorkOrderServiceService
        .getroomType_facilityfloor(floor, facility, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.RoomTypeList = data;
        });
      this.WorkOrderServiceService
        .getRoom_facilityfloor(floor, facility, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.RoomList = data;
        });
    }
    else {
      this.ZoneKey = "";
      this.RoomTypeKey = "";
      this.RoomKey = "";
    }
  }
  getRoomTypeRoom(zone, facility, floor) {
    if (zone && facility && floor) {
      this.WorkOrderServiceService
        .getRoomtype_zone_facilityfloor(zone, floor, facility, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.RoomTypeList = data;
        });
      this.WorkOrderServiceService
        .getRoom_zone_facilityfloor(zone, floor, facility, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.RoomList = data;
        });
    }
    else {
      this.RoomTypeKey = "";
      this.RoomKey = "";
    }
  }
  getRoom(roomtype, zone, facility, floor) {
    if (roomtype && zone && facility && floor) {
      this.WorkOrderServiceService
        .getRoom_Roomtype_zone_facilityfloor(roomtype, zone, floor, facility, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.RoomList = data;
        });
    }
    else {
      this.RoomKey = "";
    }
  }
  viewWO_Filter() {
    var fac_key;
    var floor_key;
    var zone_key;
    var roomtype_key;
    var room_key;
    var WOS_key;
    var batch_key;
    var em_key;
    var wot_key;
    var from_date;
    var to_date;
    if (!this.FacilityKey) {
      fac_key = null;

    }
    else {
      fac_key = this.FacilityKey
    }
    if (!this.FloorKey) {
      floor_key = null;

    }
    else {
      floor_key = this.FloorKey
    }
    if (!this.ZoneKey) {
      zone_key = null;

    }
    else {
      zone_key = this.ZoneKey
    }
    if (!this.RoomTypeKey) {
      roomtype_key = null;

    }
    else {
      roomtype_key = this.RoomTypeKey
    }
    if (!this.RoomKey) {
      room_key = null;

    }
    else {
      room_key = this.RoomKey
    }
    if (!this.BatchScheduleNameKey) {
      batch_key = null;

    }
    else {
      batch_key = this.BatchScheduleNameKey
    }
    if (!this.WorkorderStatusKey) {
      WOS_key = null;

    }
    else {
      WOS_key = this.WorkorderStatusKey
    }
    if (!this.EmployeeKey) {
      em_key = null;

    }
    else {
      em_key = parseInt(this.EmployeeKey);
    }
    if (!this.WorkorderTypeKey) {
      wot_key = null;

    }
    else {
      wot_key = this.WorkorderTypeKey;
    }
    if (!this.ondate) {
      from_date = this.convert_DT(new Date());

    }
    else {
      from_date = this.convert_DT(this.ondate);
    }
    if (!this.todate) {
      to_date = from_date;

    }
    else {
      to_date = this.convert_DT(this.todate);
    }
    this.viewWorkOrder = {
      manager: this.employeekey,
      workorderStatusKey: WOS_key,
      workorderDate: from_date,
      workorderDate2: to_date,
      facilitykey: fac_key,
      roomTypeKey: roomtype_key,
      roomKey: room_key,
      zoneKey: zone_key,
      employeeKey: em_key,
      workorderTypeKey: wot_key,
      BatchScheduleNameKey: batch_key,
      OrganizationID: this.OrganizationID,
      floorKey: floor_key
    };
    this.WorkOrderServiceService
      .getBatchWoFilter(this.viewWorkOrder)
      .subscribe((data: any[]) => {
        this.workorderList = data;

      });
  }
  searchBatchWo(search_value) {
    var fac_key;
    var floor_key;
    var zone_key;
    var roomtype_key;
    var room_key;
    var WOS_key;
    var batch_key;
    var em_key;
    var wot_key;
    var from_date;
    var to_date;
    if (!this.FacilityKey) {
      fac_key = null;

    }
    else {
      fac_key = this.FacilityKey
    }
    if (!this.FloorKey) {
      floor_key = null;

    }
    else {
      floor_key = this.FloorKey
    }
    if (!this.ZoneKey) {
      zone_key = null;

    }
    else {
      zone_key = this.ZoneKey
    }
    if (!this.RoomTypeKey) {
      roomtype_key = null;

    }
    else {
      roomtype_key = this.RoomTypeKey
    }
    if (!this.RoomKey) {
      room_key = null;

    }
    else {
      room_key = this.RoomKey
    }
    if (!this.BatchScheduleNameKey) {
      batch_key = null;

    }
    else {
      batch_key = this.BatchScheduleNameKey
    }
    if (!this.WorkorderStatusKey) {
      WOS_key = null;

    }
    else {
      WOS_key = this.WorkorderStatusKey
    }
    if (!this.EmployeeKey) {
      em_key = null;

    }
    else {
      em_key = this.EmployeeKey;
    }
    if (!this.WorkorderTypeKey) {
      wot_key = null;

    }
    else {
      wot_key = this.WorkorderTypeKey;
    }
    if (!this.ondate) {
      from_date = this.convert_DT(new Date());

    }
    else {
      from_date = this.convert_DT(this.ondate);
    }
    if (!this.todate) {
      to_date = from_date;

    }
    else {
      to_date = this.convert_DT(this.todate);
    }
    this.searchWorkorder = {
      manager: this.employeekey,
      workorderStatusKey: WOS_key,
      workorderDate: from_date,
      workorderDate2: to_date,
      facilitykey: fac_key,
      roomTypeKey: roomtype_key,
      roomKey: room_key,
      zoneKey: zone_key,
      employeekey: em_key,
      workorderTypeKey: wot_key,
      BatchScheduleNameKey: batch_key,
      OrganizationID: this.OrganizationID,
      floorKey: floor_key,
      searchWO: search_value
    };
    if (search_value.length >= 3) {
      this.WorkOrderServiceService
        .search_Batch_WO(this.searchWorkorder)
        .subscribe((data: any[]) => {
          this.workorderList = data;
          this.showHide2 = false;
          this.showHide1 = false;
        });
    }
    else if (search_value.length == 0) {
      var on_date = this.convert_DT(new Date());
      this.WorkOrderServiceService
        .getBatchworkorder(on_date, this.employeekey, this.pageno, this.items_perpage, this.OrganizationID)
        .subscribe((data: any[]) => {
          this.workorderList = data;
          if (this.workorderList[0].totalItems > this.items_perpage) {
            this.showHide2 = true;
            this.showHide1 = false;
          }
          else if (this.workorderList[0].totalItems <= this.items_perpage) {
            this.showHide2 = false;
            this.showHide1 = false;
          }
        });
    }

  }
}
