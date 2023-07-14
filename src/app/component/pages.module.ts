import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PagesRoutingModule } from './pages-routing.module';
import { AuthorComponent } from './author/author.component';
import { AuthorCreaeditaComponent } from './author/author-creaedita/author-creaedita.component';
import { AuthorListarComponent } from './author/author-listar/author-listar.component';
import { AuthorDialogoComponent } from './author/author-listar/author-dialogo/author-dialogo.component';
import { BookComponent } from './book/book.component';
import { BookCreaeditaComponent } from './book/book-creaedita/book-creaedita.component';
import { BookListarComponent } from './book/book-listar/book-listar.component';
@NgModule({
  declarations: [
    AuthorComponent,
    AuthorCreaeditaComponent,
    AuthorListarComponent,
    AuthorDialogoComponent,
    BookComponent,
    BookCreaeditaComponent,
    BookListarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    PagesRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatSnackBarModule,
    ReactiveFormsModule

  ],
  exports: [
    MatFormFieldModule
    ]
})
export class PagesModule { }
