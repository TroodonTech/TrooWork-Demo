import { Component, OnInit } from '@angular/core';
import { People } from '../../../../model-class/People';
import { PeopleServiceService } from '../../../../service/people-service.service';
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.scss']
})
export class EditemployeeComponent implements OnInit {

  organization: People[];
  empk$: Object;
  editempdtailsbysa;
  useroletyp;
  manager: People[];
  department: People[];
  employeestatus: People[];
  marked = true;
  jobtitle: People[];
  BirthDate: Date;
  HireDate: Date;
  delete_EmpKey: Number;
  employeedetailstable: People[];
  role: String;
  name: String;
  employeekey: Number;
  IsSupervisor: Number;
  OrganizationID: Number;

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
  managerKey: Number = 1;
  constructor(private route: ActivatedRoute, private PeopleServiceService: PeopleServiceService, private router: Router) {
    this.route.params.subscribe(params => this.empk$ = params.EmployeeKey);
  }
  toggleVisibility(e) {
    if (e.target.checked) {
      this.marked = false;
    } else {
      this.marked = true;
    }

  }
  deleteEmployee() {
    debugger;

    this.PeopleServiceService
      .DeleteEmployeeDetailsbySuperadmin(this.delete_EmpKey, this.OrganizationID, this.employeekey).subscribe(res => this.router.navigateByUrl('/Viewemployee'));
  }
  deleteEmpPass(empk$) {
    this.delete_EmpKey = empk$;
    debugger;
  }
  editEmployee(OrganizationID, UserRoleTypeKey, EmployeeNumber, ManagerKey, FirstName, LastName, MiddleName, BD, AddressLine1, City, AddressLine2, State, Country, PrimaryPhone, ZipCode, AlternatePhone, EmailID, EmployeeStatusKey, HD, IsSupervisor, JobTitleKey, DepartmentKey, Gender) {
    var birthdt = this.convert_DT(BD);
    var hiredt = this.convert_DT(HD);

    this.PeopleServiceService.UpdateEmployeeDetailsbySa(this.managerKey, this.empk$, this.OrganizationID, UserRoleTypeKey, EmployeeNumber, FirstName, LastName, MiddleName, birthdt, AddressLine1, City, AddressLine2, State, Country, PrimaryPhone, ZipCode, AlternatePhone, EmailID, EmployeeStatusKey, hiredt, IsSupervisor, JobTitleKey, DepartmentKey, Gender)
      .subscribe(res => this.router.navigateByUrl('/Viewemployee'));

  }
  ngOnInit() {

    var token = localStorage.getItem('token');
    var encodedProfile = token.split('.')[1];
    var profile = JSON.parse(this.url_base64_decode(encodedProfile));
    this.role = profile.role;
    this.IsSupervisor = profile.IsSupervisor;
    this.name = profile.username;
    this.employeekey = profile.employeekey;
    this.OrganizationID = profile.OrganizationID;
    this.PeopleServiceService.EditEmployeeDetailsbySuperadmin(this.empk$, this.OrganizationID).subscribe((data: Array<any>) => {
      this.editempdtailsbysa = data[0];
      this.BirthDate = new Date(this.editempdtailsbysa.BirthDate);
      this.HireDate = new Date(this.editempdtailsbysa.HireDate);

    });

    this.PeopleServiceService
      .getOrganizationDDforSuprAdmin(this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.organization = data;
      });
    this.PeopleServiceService
      .getUserRoleTypesa(this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.useroletyp = data;
      });
    this.PeopleServiceService
      .getvaluesForManagerDropdowninSA(this.employeekey, this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.manager = data;
      });
    this.PeopleServiceService
      .getDepartmentforddinSuperadmin(this.employeekey, this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.department = data;
      });
    this.PeopleServiceService
      .getEmployeeStatusListforDropdowninSuperadmin(this.employeekey, this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.employeestatus = data;
      });
    this.PeopleServiceService
      .getjobTitleforDropdowninSuperadmin(this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.jobtitle = data;
      });
  }

}
