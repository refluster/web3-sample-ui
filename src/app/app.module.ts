import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from  '@angular/common/http';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
	}, {
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		MatFormFieldModule,
		MatInputModule,
		MatCardModule,
		MatButtonModule,
	],
	providers: [],
	bootstrap: [
		AppComponent
	],
})
export class AppModule { }
