import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import { MainPageComponent } from './pages/main-page/main-page.component';
import { MarketComponent } from './pages/market/market.component';
import { RatingComponent } from './pages/rating/rating.component';
import { TaskComponent } from './pages/rating/task/task.component';
import { TaskListComponent } from './pages/rating/task-list/task-list.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { HttpClientModule} from "@angular/common/http";
import {HelperUtilService} from "./shared/services/helper-util.service";
import { ColleguesComponent } from './pages/collegues/collegues.component';
import { EmployeeCardComponent } from './pages/collegues/employee-card/employee-card.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatDialogModule} from "@angular/material/dialog";
import { StarRatingComponent } from './pages/collegues/star-rating/star-rating.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";


const routes: Routes = [
  {path: 'rating', component: RatingComponent},
  {path: 'market', component: MarketComponent},
  {path: 'employee', component: ColleguesComponent},
  {path: '', component: MainPageComponent},
  {path: '**', component: MainPageComponent},

];


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MarketComponent,
    RatingComponent,
    TaskComponent,
    TaskListComponent,
    ColleguesComponent,
    EmployeeCardComponent,
    StarRatingComponent,
  ],
  imports: [
    BrowserModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MatCardModule,
    MatProgressBarModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatFormFieldModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  providers: [HttpClientModule, HelperUtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
