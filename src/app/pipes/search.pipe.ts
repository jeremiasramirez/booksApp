import { PipeTransform, Pipe} from '@angular/core'


@Pipe({
    name: 'searchbook'
})

export class SearchPipe implements PipeTransform{
    
    
    transform(books:any[],x,text){

        return books.filter((resp)=>{
            if (books) return resp.display_name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
            else return books
        })
       
    }
}