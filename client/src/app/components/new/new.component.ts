import { Component, OnInit } from '@angular/core';
import { DocumentService } from '../../services/document.service';
import { Document } from 'src/app/models/document';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  documents: Document[];
  newDocument: Document;

  constructor(
    private documentService: DocumentService
  ) {
    this.newDocument = new Document(null);
  }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getNews().subscribe(
      data => {
        this.documents = data;
      }
    );
  }

  create() {
    this.newDocument.date = new Date(Date.now());
    this.documentService.create(this.newDocument).subscribe(
      data => {
        this.getDocuments();
      }
    );
  }

  archive(archiveDocument) {
    this.documentService.archive(archiveDocument).subscribe(
      data => {
        this.getDocuments();
      }
    );
  }

}
