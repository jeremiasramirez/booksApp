import { NgModule} from "@angular/core"
import { CommonModule} from "@angular/common"
import { BookComponent } from './book/book.component'
import { ShowexploreComponent } from './showexplore/showexplore.component'
import { SkeletonexploreComponent } from './skeletonexplore/skeletonexplore.component'


@NgModule({
    imports:[
        CommonModule
    ],
    declarations: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent
    ],
    exports: [
        BookComponent,
        ShowexploreComponent,
        SkeletonexploreComponent
    ]
})

export class ComponentsModule{
    
}