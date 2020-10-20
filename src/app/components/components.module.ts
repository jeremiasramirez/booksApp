import { NgModule} from "@angular/core"
import { CommonModule} from "@angular/common"
import { BookComponent } from './book/book.component'
import { ShowexploreComponent } from './showexplore/showexplore.component'
import { SkeletonexploreComponent } from './skeletonexplore/skeletonexplore.component'
import { ShowcardsComponent } from './showcards/showcards.component'
import { SkeletoncardsComponent } from './skeletoncards/skeletoncards.component'


@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent,
        ShowcardsComponent,
        SkeletoncardsComponent
    ],
    exports: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent,
        ShowcardsComponent,
        SkeletoncardsComponent
    ]
})

export class ComponentsModule{
    
}