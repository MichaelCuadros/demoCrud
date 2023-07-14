import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/app/service/author.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-author-dialogo',
  templateUrl: './author-dialogo.component.html',
  styleUrls: ['./author-dialogo.component.css']
})
export class AuthorDialogoComponent implements OnInit {
  constructor(private aS: AuthorService,
    private dialogRef: MatDialogRef<AuthorDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
