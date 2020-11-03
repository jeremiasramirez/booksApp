import { NgModule} from "@angular/core"
import { CommonModule} from "@angular/common"
import { BookComponent } from './book/book.component'
import { ShowexploreComponent } from './showexplore/showexplore.component'
import { SkeletonexploreComponent } from './skeletonexplore/skeletonexplore.component'
import { ShowcardsComponent } from './showcards/showcards.component'
import { SkeletoncardsComponent } from './skeletoncards/skeletoncards.component'
import { ShowbookComponent } from './showbook/showbook.component'
import { SearchPipe } from '../pipes/search.pipe'


@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent,
        ShowcardsComponent,
        SkeletoncardsComponent,
        ShowbookComponent,
        SearchPipe
    ],
    exports: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent,
        ShowcardsComponent,
        SkeletoncardsComponent,
        ShowbookComponent,
        SearchPipe
    ]
})

export class ComponentsModule{
    
}