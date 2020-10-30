import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Document } from '../models/document';
import { map } from 'rxjs/operators';

@Injectable()
export class DocumentService {
	api = environment.baseUrl + 'documents/';
	constructor(
		private http: HttpClient
	) { }

	getNews() {
		return this.http.get<Document[]>(this.api + 'news').pipe(
			map(data => {
				const res = [];
				data.forEach(item => res.push(new Document(item)));
				return res;
			})
		);
	}

	getArchived() {
		return this.http.get<Document[]>(this.api + 'archived').pipe(
			map(data => {
				const res = [];
				data.forEach(item => res.push(new Document(item)));
				return res;
			})
		);
	}

	create(newDocument) {
		return this.http.post<Document>(this.api, newDocument);
	}

	delete(deleteDocument) {
		return this.http.delete<Document>(this.api + deleteDocument._id, deleteDocument);
	}

	archive(arhiveDocument) {
		return this.http.post<Document>(this.api + 'archive/' + arhiveDocument._id, arhiveDocument);
	}

}
