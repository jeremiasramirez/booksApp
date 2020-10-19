import { NgModule} from "@angular/core"
import { CommonModule} from "@angular/common"
import { BookComponent } from './book/book.component'


@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        BookComponent
    ],
    exports: [
        BookComponent
    ]
})

export class ComponentsModule{
    
}