import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../model/book';
import { HttpClient,HttpHeaders } from '@angular/common/http';
const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = `${base_url}/books`
  private listaCambio = new Subject<Book[]>()


  constructor(private http: HttpClient) { }
  list() {
    let token = sessionStorage.getItem("token");
    return this.http.get<Book[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  insert(book: Book) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, book, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  setList(listaNueva: Book[]) {
    this.listaCambio.next(listaNueva);
  }
  getLista() {
    return this.listaCambio.asObservable();
  }

}
