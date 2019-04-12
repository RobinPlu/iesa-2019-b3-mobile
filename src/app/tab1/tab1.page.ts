import { Component } from "@angular/core";
import { TabNameService } from "../tab-name.service";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private tabName: TabNameService) {
    console.log(this.tabName.tab3);
  }
}
