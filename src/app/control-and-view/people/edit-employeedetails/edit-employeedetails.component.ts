import { Component, OnInit } from '@angular/core';
import { People } from '../../../model-class/People';
import { ActivatedRoute, Router } from "@angular/router";
import { PeopleServiceService } from '../../../service/people-service.service';
@Component({
  selector: 'app-edit-employeedetails',
  templateUrl: './edit-employeedetails.component.html',
  styleUrls: ['./edit-employeedetails.component.scss']
})
export class EditEmployeedetailsComponent implements OnInit {
  marked = true;
  empNum: Array<any>;
  empNumKey$: Object;
  firstName: Array<any>;
  firstName$: Object;
  lastName: Array<any>;
  lastName$: Object;
  MiddleName: Array<any>;
  midName$: Object;
  addline1: Array<any>;
  addline1$: Object;
  PPhonenum: Array<any>;
  PPhonenum$: Object;
  email: Array<any>;
  email$: Object;
  empstatus: Array<People>;
  empstatus$: Object;
  // hireDate:Array<any>;
  // hireDate$: Object;
  // HireDate:Date;
  employeestatus: People[];
  jobt: Array<People>;
  jobt$: Object;
  jobtitle: People[];
  dept: Array<any>;
  dept$: Object;
  department: People[];
  sup: Array<People>;
  supervisor: People[];
  sup$: Object;
  gen: Array<People>;
  gen$: Object;
  updatedby: Number;
  editempdtails;
  empk$: Object;
  orgid: number = 21;
  BirthDate: Date;
  HireDate: Date;
  managerKey: Number = 2861;

  // adding properties and methods that will be used by the igxDatePicker
  public date: Date = new Date(Date.now());

  private dayFormatter = new Intl.DateTimeFormat('en', { weekday: 'long' });
  private monthFormatter = new Intl.DateTimeFormat('en', { month: 'long' });

  public formatter = (_: Date) => {
    return `You selected ${this.dayFormatter.format(_)}, ${_.getDate()} ${this.monthFormatter.format(_)}, ${_.getFullYear()}`;
  }
  convert_DT(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(- 2),
      day = ("0" + date.getDate()).slice(- 2);
    return [date.getFullYear(), mnth, day].join("-");
  };

  constructor(private route: ActivatedRoute, private PeopleServiceService: PeopleServiceService, private router: Router) {
    this.route.params.subscribe(params => this.empk$ = params.EmployeeKey);
  }

  editEmployee(EmployeeNumber, UserRoleTypeKey, FirstName, LastName, MiddleName, BD, Gender, AddressLine1, City, AddressLine2, State, Country, PrimaryPhone, ZipCode, AlternatePhone, EmailID, EmployeeStatusKey, HD, IsSupervisor, SupervisorKey, JobTitleKey, DepartmentKey) {
    var birthdt = this.convert_DT(BD);
    var hiredt = this.convert_DT(HD);

    this.PeopleServiceService.UpdateEmployeeDetailsbyManager(this.managerKey, this.empk$, this.orgid, EmployeeNumber, UserRoleTypeKey, FirstName, LastName, MiddleName, birthdt, Gender, AddressLine1, City, AddressLine2, State, Country, PrimaryPhone, ZipCode, AlternatePhone, EmailID, EmployeeStatusKey, hiredt, IsSupervisor, SupervisorKey, JobTitleKey, DepartmentKey).subscribe(res => this.router.navigateByUrl('/ViewEmployee'));

  }
  ngOnInit() {

    this.PeopleServiceService.EditEmployeeDetailsbyManager(this.empk$, this.orgid).subscribe((data: Array<any>) => {
      this.editempdtails = data[0];
      this.BirthDate = new Date(this.editempdtails.BirthDate);
      this.HireDate = new Date(this.editempdtails.HireDate);

    });

    this.PeopleServiceService
      .getEmployeeStatusListforDropdown()
      .subscribe((data: People[]) => {
        this.employeestatus = data;
      });
    this.PeopleServiceService
      .getJobTitleListforDropdown()
      .subscribe((data: People[]) => {
        this.jobtitle = data;
      });
    this.PeopleServiceService
      .getDeptListforDropdown()
      .subscribe((data: People[]) => {
        this.department = data;
      });

    this.PeopleServiceService
      .getSupervisorListforDropdown()
      .subscribe((data: People[]) => {
        this.supervisor = data;
      });
  }
  toggleVisibility(e) {
    if (e.target.checked) {
      this.marked = false;
    } else {
      this.marked = true;
    }
    // this.marked = e.target.checked;
  }
}
