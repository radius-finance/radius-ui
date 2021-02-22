import { Component, OnInit } from "@angular/core";
import Chart from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {

  public canvas: any;
  public ctx;

  public clicked: boolean = true;
  public clicked1: boolean = false;
  public clicked2: boolean = false;
  
  constructor() {}

  ngOnInit() {

  }
  
  public updateOptions() {

  }

}
