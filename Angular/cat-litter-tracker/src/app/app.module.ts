import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarWeekComponent } from './calendar-week/calendar-week.component';
import { LoaderComponent } from './loader/loader.component';
import { LitterOverviewComponent } from './litter-overview/litter-overview.component';
import { LitterMeasurementComponent } from './litter-measurement/litter-measurement.component';
import { litterReducer } from './state/litter.reducer';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarWeekComponent,
    LoaderComponent,
    LitterOverviewComponent,
    LitterMeasurementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ count: litterReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
