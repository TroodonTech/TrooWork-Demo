import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../service/Inventory.service';
import { Inventory } from '../../../model-class/Inventory';
import { Router } from "@angular/router";

@Component({
  selector: 'app-room-type-create',
  templateUrl: './room-type-create.component.html',
  styleUrls: ['./room-type-create.component.scss']
})
export class RoomTypeCreateComponent implements OnInit {
  metricValues: Inventory[];
  showField1: boolean = false;
  showField2: boolean = false;
  x: Array<any>;
  constructor(private inventoryService: InventoryService, private router: Router) { }

  showFields(metricType) {
    {
      if (!metricType) {
        this.showField1 = false;
        this.showField2 = false;
      } else if (metricType === 'Default') {
        this.showField1 = false;
        this.showField2 = true;
      } else if (metricType === 'Custom') {
        this.showField1 = false;
        this.showField2 = true;
      } else if (metricType === 'Minutes Per') {
        this.showField1 = false;
        this.showField2 = true;
      }
    }
  }

  addRoomType(MetricType, RoomTypeName, MetricTypeValue) {
    this.x = MetricType.split("-", 2);
    this.inventoryService
      .checkRoomType(RoomTypeName).subscribe((data: Inventory[]) => {
        if (data.length > 0) {
          alert("Room Type already present");
        }
        else if (data.length == 0) {
          this.inventoryService.addRoomType(RoomTypeName, MetricTypeValue, this.x[1]).subscribe(res => this.router.navigateByUrl('/roomTypeView'));
        }
      });
  }
  ngOnInit() {
    this.inventoryService
      .getMetricValues()
      .subscribe((data: Inventory[]) => {
        this.metricValues = data;
      });
  }

}
