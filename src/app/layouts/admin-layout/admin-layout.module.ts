import { NgModule } from "@angular/core";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import {HistoryComponent} from "../../pages/history/history.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ModalComponent, NgbdModalContent } from "../../modal/modal.component";
@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserComponent,
    TablesComponent,
    IconsComponent,
    ModalComponent,
    NgbdModalContent,
    TypographyComponent,
    HistoryComponent,
  ],
})
export class AdminLayoutModule {}
