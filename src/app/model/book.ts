import { Author } from "./author"

export class Book
{
  idBook:number=0
  nameBook:string=""
  publicationDateBook:Date= new Date(Date.now())
  nhojasBook:number=0
  author:Author=new Author()
}
