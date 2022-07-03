import { Routes } from "@angular/router";

import { IconsComponent } from "../../pages/icons/icons.component";

import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
export const AdminLayoutRoutes: Routes = [
  { path: "icons", component: IconsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  {
    path: "insertBook",
    loadChildren: () =>
      import("../../bookApi/insert-book/insert-book.module").then(
        (m) => m.InsertBookModule
      ),
  },
  {
    path: "bookDetail/:id",
    loadChildren: () =>
      import("../../bookApi/book-detail/book-detail.module").then(
        (m) => m.BookDetailModule
      ),
  },
  {
    path: "userDetail/:id",
    loadChildren: () =>
      import(
        "../../authentication/userApi/user-detail/user-detail.module"
      ).then((m) => m.UserDetailModule),
  },
  {
    path: "borrowBook/:id",
    loadChildren: () =>
      import("../../borrowApi/borrow-book/borrow-book.module").then(
        (m) => m.BorrowBookModule
      ),
  },
];
