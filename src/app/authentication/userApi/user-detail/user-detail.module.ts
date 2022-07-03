import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserDetailRoutingModule } from "./user-detail-routing.module";
import { UserDetailComponent } from "./user-detail.component";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  declarations: [UserDetailComponent],
  imports: [CommonModule, UserDetailRoutingModule, FormsModule, NgbModule],
})
export class UserDetailModule {}
