import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';
import { Document } from 'src/app/models/document';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.scss']
})
export class ArchivedComponent implements OnInit {
  documents: Document[];

  constructor(
    private documentService: DocumentService
  ) {
  }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.getArchived().subscribe(
      data => {
        this.documents = data;
      }
    );
  }

  delete(document) {
    this.documentService.delete(document).subscribe(
      data => {
        this.getDocuments();
      }
    );
  }

}
