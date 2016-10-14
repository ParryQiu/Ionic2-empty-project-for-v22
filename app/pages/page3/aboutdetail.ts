import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/about/aboutdetail.html'
})
export class AboutDetail {
	public item;
	constructor(private navCtrl:NavController,private navParams:NavParams) {
		//console.log(navParams.data);
		this.item=navParams.data;
		console.log(this.item);
		console.log(this.item.item);
	}

}