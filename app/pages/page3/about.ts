import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AboutDetail} from "./aboutdetail";
@Component({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage {
	public contacts;
  constructor(private navCtrl:NavController) {
  //一般数据源都是从api进行获取，这里我们只是模拟取到一些数据
    this.contacts=new Array({"contactid":1,"contactname":"张三","contacttext":"13800000000"},
  {"contactid":2,"contactname":"李四","contacttext":"13800000001"},
 {"contactid":3,"contactname":"王五","contacttext":"13800000002"},
  {"contactid":5,"contactname":"周七","contacttext":"13800000004"});
  //this.navCtrl=NavController;
  
  }
  /*
  onPageLoaded(){
    console.log("page 1 page loaded")
	}

	onPageWillEnter(){
	console.log("页面将要进入的时候")
	}
	onPageWillLeave(){
	console.log("页面将要离开的时候")
    }
	onPagedidenter(){
	alert(111);
	console.log("页面进入完成的时候")
	}
	onPageWillUnload(){
	console.log("从dom中移除的时候触发")
	}
	onPageDidLeave(){
	console.log("页面离开完成时的触发")
	}
	*/
//在点击的时候，加载对应的详细列表页面
	itemClick(event,item){
		this.navCtrl.push(AboutDetail,{item:item});
		//alert(item.contactname);
	}

}
