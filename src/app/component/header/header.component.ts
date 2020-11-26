import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthenticationService } from 'src/app/service/authentication-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RightSideBarService } from 'src/app/service/right-side-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Calendar', icon: 'pi pi-fw pi-calendar' },
    { label: 'Edit', icon: 'pi pi-fw pi-pencil' },
    { label: 'Documentation', icon: 'pi pi-fw pi-file' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' }

  ];
  isLoggedIn: boolean;
  constructor(private authenticationService: AuthenticationService,private router:Router,private route: ActivatedRoute, private toolbarService:RightSideBarService) {
 authenticationService.currentUser.subscribe(x=> {
      if(x && x!=null){
        this.isLoggedIn = true
      }else{
        this.isLoggedIn = false
      } 
    } )
   }

   logout():void{
    this.authenticationService.logout()
    this.router.navigateByUrl(   this.route.snapshot.queryParams['returnUrl'] || '/');

   }
   toggle():void{
    this.toolbarService.toggle();
    }
  ngOnInit(): void {
    // this.items = [
    //     {label: 'Home', icon: 'pi pi-fw pi-home'},
    //     {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
    //     {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
    //     {label: 'Documentation', icon: 'pi pi-fw pi-file'},
    //     {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    // ];
  }

}
