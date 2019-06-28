import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { StudentDetailNavigateComponent } from './student-detail-navigate/student-detail-navigate.component';

const routes: Routes = [
    { path: 'studentdetail/:id', component: StudentDetailNavigateComponent },
    { path: 'home', component: StudentListComponent },
    { path: 'not-found', component: PageNotfoundComponent },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing = [StudentDetailNavigateComponent, StudentListComponent, PageNotfoundComponent];
