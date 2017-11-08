import {LicensesComponent} from './licenses.component';
import {ApplicationComponent} from './application/application.component';
import {SingleLicenseComponent} from './single-license/single-license.component';
import {SingleLicenseDetailsComponent} from './single-license-details/single-license-details.component';
import {ApplicationFormComponent} from './application/application-form/application-form.component';

export const licenseRoutes = [
  {path: '', component: LicensesComponent},
  {path: 'application/:id', component: ApplicationComponent},
  {path: 'application/add/new', component: ApplicationFormComponent},
  {path: 'application/:id/license/add', component: SingleLicenseComponent},
  {path: 'application/:id/license/edit/:object_id', component: SingleLicenseComponent},
  {path: 'application/:id/license/:object_id', component: SingleLicenseDetailsComponent}
];
