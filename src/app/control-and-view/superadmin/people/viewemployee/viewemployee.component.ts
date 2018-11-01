import { Component, OnInit, OnChanges, Directive, HostListener, ElementRef, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { People } from '../../../../model-class/People';
import { PeopleServiceService } from '../../../../service/people-service.service';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.scss']
})
export class ViewemployeeComponent implements OnInit {

  jobtitle: People[];
  employeedetailstable: People[];
  searchform: FormGroup;

  ManagerKey: Number;
  JobTitleKey: Number;
  manager: People[];
  //  seljobtitlevalue:any;

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

  regexStr = '^[a-zA-Z0-9_ ]*$';
  @Input() isAlphaNumeric: boolean;

  constructor(private formBuilder: FormBuilder, private PeopleServiceService: PeopleServiceService, private el: ElementRef) { }

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
  // seljobtitlevalue,ManagerKey
  getempdettablewithselectedddvsa() {
    this.PeopleServiceService
      .getAllEmployeeDetailswithjobtitledropdownsa(this.OrganizationID, this.employeekey, this.JobTitleKey, this.ManagerKey)
      .subscribe((data: People[]) => {
        // debugger;
        this.employeedetailstable = data;
      });

  }

  searchEmployeeDetails(SearchValue) {

    if (SearchValue.length > 2) {
      this.PeopleServiceService
        .searchResultOfEmployeedetailsTable(SearchValue, this.employeekey, this.OrganizationID)
        .subscribe((data: People[]) => {
          // debugger;
          this.employeedetailstable = data;

        });
    }
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

    this.PeopleServiceService
      .getJobTitle(this.employeekey, this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.jobtitle = data;
      });
    this.PeopleServiceService
      .getvaluesForManagerDropdowninSA(this.employeekey, this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.manager = data;
      });
    this.PeopleServiceService
      .getAllEmployeeDetails(this.employeekey, this.OrganizationID)
      .subscribe((data: People[]) => {
        // debugger;
        this.employeedetailstable = data;
      });
    this.searchform = this.formBuilder.group({
      SearchEmpDetails: ['', Validators.required]
    });
  }

}
