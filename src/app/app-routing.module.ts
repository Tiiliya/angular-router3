import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PageNotFoundComponent } from './page-not-found.component'

const routes: Routes = [
    { path: '', redirectTo:'/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
