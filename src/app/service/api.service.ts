import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

const endpoint = 'https://vl302plzt4.execute-api.us-west-2.amazonaws.com/dev';

@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		private http: HttpClient
	) { }

	async getWalletInfo(address: string) {
		const url = `${endpoint}/wallet/${address}`;
		const ret = await getApi(this.http, url);
		console.log(ret);
		return ret;
	}
}

const postApi = async (http: any, url: string, body: any) => {
	const ret = <any>await http.post(url, body).toPromise();
	console.log(ret);
	return ret;
}

const getApi = async (http: any, url: string) => {
	const ret = <any>await http.get(url).toPromise();
	console.log(ret);
	return ret;
}
