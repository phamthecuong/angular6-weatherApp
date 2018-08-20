import {Component, OnInit, ViewChild, ViewChildren ,AfterViewInit, ElementRef} from '@angular/core';
import {AddComponent} from './../add/add.component';
import {DetailsComponent} from './../details/details.component';
import {WeatherCardComponent} from './../../ui/weather-card/weather-card.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	//@ViewChild(DetailsComponent) addCmp: DetailsComponent;
	//@ViewChildren('weather') weather: ElementRef;

	//@ViewChild(WeatherCardComponent) addCmp: WeatherCardComponent;
	@ViewChild('span') span:ElementRef

	constructor(private elf: ElementRef) {
		//console.log('ElementRef', this.weather);
	}

	ngOnInit() {
		//this.elf.nativeElement.style.backgroundColor  = 'blue';
		//console.log("home init component", this.elf);
	}

	consoleLog() {
		// console.log('addchild', this.addCmp.parentCall());
	}

	ngAfterViewInit() {
		this.span.nativeElement.style.backgroundColor = 'red';
		console.log("after view iniit", this.span.nativeElement.style.color);
		//setInterval(()=> {this.addCmp.currentTemp +=1}, 1000);
		//console.log("a", this.addCmp);
	}
}
