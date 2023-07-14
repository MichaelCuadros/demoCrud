import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../service/guard.service';
import { AuthorComponent } from './author/author.component';
import { AuthorCreaeditaComponent } from './author/author-creaedita/author-creaedita.component';
import { BookComponent } from './book/book.component';
import { BookCreaeditaComponent } from './book/book-creaedita/book-creaedita.component';

const routes: Routes = [
    {
        path: 'autores', component: AuthorComponent, children: [

            { path: 'nuevo', component: AuthorCreaeditaComponent },
            { path: 'edicion/:id', component: AuthorCreaeditaComponent }

        ],canActivate:[GuardService]

    },
    {
        path: 'libros', component: BookComponent, children: [
            { path: 'nuevo', component: BookCreaeditaComponent },
            { path: 'edicion/:id', component: BookCreaeditaComponent }
          ],canActivate:[GuardService]    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule { }

