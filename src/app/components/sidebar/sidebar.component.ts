import { TokenStorageService } from "src/app/services/token-storage.service";
import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  roles: string[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/icons",
    title: "Books",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    class: "",
    roles: ["USER", "ADMIN"],
  },

  {
    path: "/user",
    title: "User Profile",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    class: "",
    roles: ["ADMIN", "USER"],
  },
  {
    path: "/tables",
    title: "List User Data",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    class: "",
    roles: ["ADMIN"],
  },
  {
    path: "/typography",
    title: "List books borrowed",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    class: "",
    roles: ["ADMIN"],
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  currentUser: any;
  constructor(private tokenStorageService: TokenStorageService) {
    this.currentUser = this.tokenStorageService.getUser();
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  isShow(roles: any) {
    return this.currentUser.roles.some((item) => roles.includes(item));
  }
}
