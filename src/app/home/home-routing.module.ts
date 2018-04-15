import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './home.component'

import { AComponent } from './a/a.component'
import { AaComponent } from './a/aa/aa.component'
import { AaaComponent } from './a/aa/aaa/aaa.component'
import { AaaaComponent } from './a/aa/aaa/aaaa/aaaa.component'

import { BComponent } from './b/b.component'
import { BbComponent } from './b/bb/bb.component'
import { BbbComponent } from './b/bb/bbb/bbb.component'
import { BbbbComponent } from './b/bb/bbb/bbbb/bbbb.component'


const routes: Routes = [
    { path: 'home', component: HomeComponent, children: [
        { path: 'a', component: AComponent, children: [
            { path: 'aa/:id', component: AaComponent, children: [
                { path: 'aaa', component: AaaComponent, children: [
                    { path: 'aaaa', component: AaaaComponent, data: [{name:'xyz' }] }
                ] }
            ] }
        ]},
        { path: 'b', component: BComponent, children: [
            { path: 'bb/:id', component: BbComponent, children: [
                { path: 'bbb', component: BbbComponent, children: [
                    { path: 'bbbb', component: BbbbComponent, data: [{name: 'xyz222'}] }
                ] }
            ] }
        ]}
    ]}
]
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule {}
