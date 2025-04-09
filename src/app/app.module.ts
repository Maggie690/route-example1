import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { BackendService } from "./services/backend.service";
import { AppComponent } from "./app.component";

@NgModule({
    imports:[
        InMemoryWebApiModule.forRoot(BackendService)
    ],
    providers:[],
    bootstrap:[AppComponent]
})

export class AppModule{}