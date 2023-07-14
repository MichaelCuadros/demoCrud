import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-listar',
  templateUrl: './book-listar.component.html',
  styleUrls: ['./book-listar.component.css']
})
export class BookListarComponent implements OnInit {
  lista: Book[] = [];
  dataSource: MatTableDataSource<Book> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'nombre', 'fecha', 'hojas','autor']


  constructor(private bS: BookService) {
  }
  ngOnInit(): void {
    this.bS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.bS.getLista().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    });

  }

}
