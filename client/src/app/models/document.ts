export class Document {
	_id: string;
	title: string;
	description: string;
	date: Date;
	content: string;
	author: string;
	archiveDate: Date;

	constructor(document) {
		this._id = document ? document._id : '';
		this.title = document ? document.title : '';
		this.description = document ? document.description : '';
		this.date = document ? new Date(document.date) : new Date(null);
		this.content = document ? document.content : '';
		this.author = document ? document.author : '';
		this.archiveDate = document ? new Date(document.archiveDate) : new Date(null);
	}
}
