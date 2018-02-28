import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ApplicationLibraryComponent } from '../application-library/application-library.component';

@NgModule ({
    declarations: [
        LeftMenuComponent,
        TopHeaderComponent,
        DashboardComponent,
        ApplicationLibraryComponent
    ],
    imports: [
        RouterModule.forChild([
            {
                path: 'dashboard',
                component: DashboardComponent
            }
            , {
                path: 'application-library',
                component: ApplicationLibraryComponent
            }
        ])
    ],
    exports: [
        RouterModule,
        LeftMenuComponent,
        TopHeaderComponent
    ]
})
export class PublicModule {}
