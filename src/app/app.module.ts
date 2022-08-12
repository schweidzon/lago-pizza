import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './features/aboutus/pages/aboutus/aboutus.component';
import { LocationComponent } from './features/location/pages/location/location.component';
import { SignupModule } from './features/signup/signup.module';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    LocationComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
   
   

    
   
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
