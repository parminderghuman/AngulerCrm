import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './component/home-page/home-page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ShortNamePipe } from './pipe/short-name.pipe';
import { SystemTableComponent } from './component/system-table/system-table.component';
import { DropdownModule } from 'primeng/dropdown';
import { SystemTableColumnComponent } from './component/system-table-column/system-table-column.component';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SystemTableConstraintComponent } from './component/system-table-constraint/system-table-constraint.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';
import { SystemTableListComponent } from './component/system-table-list/system-table-list.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {JWTInterceptorInterceptor} from './interceptor/jwtinterceptor.interceptor';
import { LeftMenuDrawerComponent } from './component/left-menu-drawer/left-menu-drawer.component'
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { EntityListComponent } from './component/entity-list/entity-list.component';
import { EntityCreateComponent } from './component/entity-create/entity-create.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ShortNamePipe,
    SystemTableComponent,
    SystemTableColumnComponent,
    SystemTableConstraintComponent,
    SystemTableListComponent,
    LeftMenuDrawerComponent,
    EntityListComponent,
    EntityCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MenuModule,
    TabMenuModule,
    DropdownModule,
    MatCardModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule, 
    MatSelectModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSidenavModule,
    DragDropModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatDividerModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, 
    useClass: JWTInterceptorInterceptor, 
    multi: true 
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
