import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GroupComponent } from './group/group.component';
import { TransformAmount } from './group/pipe.component';

@NgModule({
    declarations: [
        AppComponent,
        GroupComponent,
        TransformAmount
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', component: GroupComponent }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
