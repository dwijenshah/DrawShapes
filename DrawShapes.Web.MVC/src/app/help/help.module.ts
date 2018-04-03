import { NgModule } from '@angular/core';
import { HelpComponent } from './help.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        HelpComponent
    ],
    providers: []
})
export class HelpModule { }
