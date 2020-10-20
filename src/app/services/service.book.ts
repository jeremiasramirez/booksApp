import {Injectable} from "@angular/core"
import { Observable } from 'rxjs';
import { ajax} from "rxjs/ajax"
import {delay, pluck} from "rxjs/operators"
@Injectable()

export class BookService{

    private URIS = {
        fiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        nofiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        history: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        lists: 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6'
    };
    
    constructor(){
        console.log("run service book!!");
    }

    getByList():Observable<any>{
        return ajax.get(this.URIS.lists).pipe(pluck("response"),delay(2500))
    }  

    getAllLists(id:any):Observable<any>{
        
        return ajax.get(`https://api.nytimes.com/svc/books/v3/lists/current/${id}.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6`).pipe(pluck("response"),delay(2500))
    }  


    getFictionBooks():Observable<any>{
        return ajax.get(this.URIS.fiction).pipe(pluck("response"),delay(2500))
    }
 
    getNoFictionBooks():Observable<any>{
        return ajax.get(this.URIS.nofiction).pipe(pluck("response"),delay(2500))
    }
}