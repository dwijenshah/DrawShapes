import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
    imports: [],
    declarations: [],
    exports: [],
    providers: []
})
export class CoreModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }

}
