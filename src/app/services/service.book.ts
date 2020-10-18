import {Injectable} from "@angular/core"

@Injectable()

export class BookService{

    private URIS = {
        fiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        nofiction: 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-nonfiction.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        history: 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',
        lists: 'https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=sdhSG0pykGfZapSGRETrFICnu7GMWYY6',



    }
    
    constructor(){
        console.log("run service book!!");
    }
}