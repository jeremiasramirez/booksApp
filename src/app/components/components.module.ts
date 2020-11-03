import { NgModule} from "@angular/core"
import { CommonModule} from "@angular/common"
import { BookComponent } from './book/book.component'
import { ShowexploreComponent } from './showexplore/showexplore.component'
import { SkeletonexploreComponent } from './skeletonexplore/skeletonexplore.component'
import { ShowcardsComponent } from './showcards/showcards.component'
import { SkeletoncardsComponent } from './skeletoncards/skeletoncards.component'
import { ShowbookComponent } from './showbook/showbook.component'


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
        ShowbookComponent
    ],
    exports: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent,
        ShowcardsComponent,
        SkeletoncardsComponent,
        ShowbookComponent
    ]
})

export class ComponentsModule{
    
}