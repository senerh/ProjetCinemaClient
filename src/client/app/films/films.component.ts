import {Component, OnInit} from '@angular/core';
import {Film} from "./film";
import {FilmsService} from "./films.service";

@Component({

    moduleId: module.id,
    selector: 'films',
    providers: [FilmsService],
    templateUrl: 'films.component.html'
})

export class FilmsComponent implements OnInit{

    films: Film[];

    constructor(private filmsService: FilmsService) { }

    ngOnInit() {
        this.getAllItems();
    }

    private getAllItems(): void {
        this.filmsService
            .GetAll()
            .subscribe((data:Film[]) => this.films = data,
                error => console.log(error),
                () => console.log(this.films));
    }
}