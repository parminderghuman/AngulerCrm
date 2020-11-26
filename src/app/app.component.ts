import { Component, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { MAT_DRAWER_CONTAINER, MatDrawer } from '@angular/material/sidenav/drawer';
import {RightSideBarService} from "./service/right-side-bar.service"
import { BackendService } from './service/backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss',
]
})
export class AppComponent {
  title = 'newUiApp';
  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private primengConfig: PrimeNGConfig,private toolbarService:RightSideBarService,private backendService:BackendService) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
    ngAfterViewInit () { 
      this.toolbarService.setSidenav(this.drawer);
    }
    toggle():void{
          this.toolbarService.toggle();
    }
}
