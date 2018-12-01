import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WokaSharedModule } from 'app/shared';
import {
    LocationComponent,
    LocationDetailComponent,
    LocationUpdateComponent,
    LocationDeletePopupComponent,
    LocationDeleteDialogComponent,
    locationRoute,
    locationPopupRoute
} from './';

const ENTITY_STATES = [...locationRoute, ...locationPopupRoute];

@NgModule({
    imports: [WokaSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        LocationComponent,
        LocationDetailComponent,
        LocationUpdateComponent,
        LocationDeleteDialogComponent,
        LocationDeletePopupComponent
    ],
    entryComponents: [LocationComponent, LocationUpdateComponent, LocationDeleteDialogComponent, LocationDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class WokaLocationModule {}
