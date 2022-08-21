import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

type Wallet = {
	balance: number
};

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public wallet: Wallet| undefined;
	public address: string = '';

	constructor(
		private api: ApiService
	) { }

	ngOnInit(): void {
	}

	async getWallet() {
		this.wallet = await this.api.getWalletInfo(this.address);
		console.log(this.wallet);
	}
}
