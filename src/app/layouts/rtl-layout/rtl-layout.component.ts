import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  Inject
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { ToastrService } from "ngx-toastr";

var misc: any = {
  sidebar_mini_active: true
};
@Component({
  selector: "app-rtl-layout",
  templateUrl: "./rtl-layout.component.html",
  styleUrls: ["./rtl-layout.component.scss"]
})
export class RtlLayoutComponent implements OnInit, OnDestroy {
  test = new Date;
  constructor(
    public toastr: ToastrService,
    @Inject(DOCUMENT) private document: Document
  ) {}
  @HostListener("window:scroll", ["$event"])
  showNavbarButton() {
    var mainPanel: any = document.getElementsByClassName("main-panel")[0];
    var navbarMinimize: any = document.getElementsByClassName(
      "navbar-minimize-fixed"
    )[0];
    if (
      document.documentElement.scrollTop > 20 ||
      document.scrollingElement.scrollTop > 20 ||
      mainPanel.scrollTop > 20
    ) {
      navbarMinimize.style.opacity = 1;
    } else if (
      document.documentElement.scrollTop <= 20 ||
      document.scrollingElement.scrollTop <= 20 ||
      mainPanel.scrollTop <= 20
    ) {
      navbarMinimize.style.opacity = 0;
    }
  }
  ngOnInit() {
    // on this page, we need on the body tag the classes .rtl and .menu-on-right
    document.body.classList.add("rtl", "menu-on-right");
    // we also need the rtl bootstrap
    // so we add it dynamically to the head
    let head = document.head;
    let link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.id = "rtl-id";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-rtl/3.4.0/css/bootstrap-rtl.css";
    head.appendChild(link);
    this.showNavbarButton();
  }
  ngOnDestroy() {
    // when we exit this page, we need to delete the classes .rtl and .menu-on-right
    // from the body tag
    document.body.classList.remove("rtl", "menu-on-right");
    // we also need to delete the rtl bootstrap, so it does not break the other pages
    // that do not make use of rtl
    document.getElementById("rtl-id").remove();
  }
  minimizeSidebar() {
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("sidebar-mini")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("sidebar-mini");
      misc.sidebar_mini_active = false;
      this.showSidebarMessage("الشريط الجانبي الصغير غير نشط ...");
    } else {
      body.classList.add("sidebar-mini");
      this.showSidebarMessage("الشريط الجانبي الصغير مفعل ...");
      misc.sidebar_mini_active = true;
    }

    // we simulate the window Resize so the charts will get updated in realtime.
    const simulateWindowResize = setInterval(function() {
      window.dispatchEvent(new Event("resize"));
    }, 180);

    // we stop the simulation of Window Resize after the animations are completed
    setTimeout(function() {
      clearInterval(simulateWindowResize);
    }, 1000);
  }
  showSidebarMessage(message) {
    this.toastr.show(
      '<span data-notify="icon" class="tim-icons icon-bell-55"></span>',
      message,
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: "alert alert-danger alert-with-icon",
        positionClass: "toast-top-center"
      }
    );
  }
}
