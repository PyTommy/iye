import { MongoClient } from 'mongodb';

export class MongoHelper {
	private client: null | MongoClient;
	private url: string;

	constructor(url: string) {
		this.url = url;
		this.client = null;
	}

	async connect(): Promise<void> {
		this.client = await MongoClient.connect(this.url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
	}

	async disconnect(): Promise<void> {
		if (!this.client) {
			console.log('Already disconnected.');
		} else {
			await this.client.close();
			this.client = null as unknown as MongoClient;
		}
	}
}
