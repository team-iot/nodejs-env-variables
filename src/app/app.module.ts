import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ConfigurationService } from './service/configuration.service';
import { AppComponent } from './app.component';

export function configurationServiceFactory(configurationService: ConfigurationService): Function {  
  return () => configurationService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ConfigurationService,
    {
      provide: APP_INITIALIZER,
      useFactory: configurationServiceFactory,
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
