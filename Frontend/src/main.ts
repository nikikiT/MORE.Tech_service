import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {EmployeeTask} from "./app/shared/model/task/employee-task.model";
import {Employee} from "./app/shared/model/employee.model";
import {Task} from "./app/shared/model/task/task.model";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
