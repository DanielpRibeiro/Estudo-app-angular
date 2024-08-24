// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
//   imports: [BrowserModule],
  providers: [],
  exports:[FooterComponent]
//   bootstrap: [FooterComponent]
})
export class FooterModule {}