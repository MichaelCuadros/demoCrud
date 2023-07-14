import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';
import { AuthorService } from 'src/app/service/author.service';
import { BookService } from 'src/app/service/book.service';
import * as moment from 'moment';
@Component({
  selector: 'app-book-creaedita',
  templateUrl: './book-creaedita.component.html',
  styleUrls: ['./book-creaedita.component.css']
})
export class BookCreaeditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  book: Book = new Book()
  mensaje: string = ""
  maxFecha: Date = moment().add(-1, 'days').toDate();
  lista: Author[] = [];
  idAuthorSeleccionado: number = 0;


  constructor(private bS: BookService,
    private router: Router,
    private route: ActivatedRoute, private aS:AuthorService) {
  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => { this.lista = data });

    this.form = new FormGroup({
      idBook: new FormControl(),
      nameBook: new FormControl(),
      publicationDateBook: new FormControl(),
      nhojasBook: new FormControl(),
      author :new FormControl()
    });

  }
  aceptar(): void {
    this.book.idBook = this.form.value['idBook'];
    this.book.nameBook = this.form.value['nameBook'];
    this.book.nhojasBook = this.form.value['nhojasBook'];
    this.book.publicationDateBook = this.form.value['publicationDateBook'];
    this.book.author.nameAuthor=this.form.value['author.nameAuthor'];
    if (this.idAuthorSeleccionado>0) {
      let a = new Author();
      a.idAuthor = this.idAuthorSeleccionado;
      this.book.author=a;
      this.bS.insert(this.book).subscribe(() => {
      this.bS.list().subscribe(data => {
            this.bS.setList(data);
          })
        })

      this.router.navigate(['/pages/libros']);

  }
}
}
