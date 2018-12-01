import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { WokaRegionModule } from './region/region.module';
import { WokaCountryModule } from './country/country.module';
import { WokaLocationModule } from './location/location.module';
import { WokaDepartmentModule } from './department/department.module';
import { WokaTaskModule } from './task/task.module';
import { WokaEmployeeModule } from './employee/employee.module';
import { WokaJobModule } from './job/job.module';
import { WokaJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        WokaRegionModule,
        WokaCountryModule,
        WokaLocationModule,
        WokaDepartmentModule,
        WokaTaskModule,
        WokaEmployeeModule,
        WokaJobModule,
        WokaJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WokaEntityModule {}
