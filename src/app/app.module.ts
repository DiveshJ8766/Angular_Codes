import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import HeaderComponent from './pages/Header/header.component';
import { TopMenuComponent } from './pages/Header/top-menu/top-menu.component';
import { MainMenuComponent } from './pages/Header/main-menu/main-menu.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ProductListComponent } from './pages/products/products-container/product-list/product-list.component';
import { SearchComponent } from './pages/products/products-container/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleComponent } from './pages/footer/example/example.component';
import { ProductsContainerComponent } from './pages/products/products-container/products-container.component';
import { FilterComponent } from './pages/products/products-container/filter/filter.component';
import { ResuableModule } from './resuable/resuable.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormComponent } from './form/form.component';
import { CustomDateFormatPipe } from './libs/date-format.pipe';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { RecativeFormComponent } from './recative-form/recative-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    FooterComponent,
    ProductListComponent,
    SearchComponent,
    ExampleComponent,
    ProductsContainerComponent,
    FilterComponent,
    FormComponent,
    CustomDateFormatPipe,
    TemplateDrivenFormComponent,
    RecativeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ResuableModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
