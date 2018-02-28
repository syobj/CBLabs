import { Component, OnInit } from '@angular/core';

// Models
import { ApplicationLibrary } from '../model/application-library';

// Services
import { ApplicationLibraryService } from '../service/application-library.service';

@Component ({
    templateUrl: './application-library.component.html',
    styleUrls: ['./application-library.component.css']
})
export class ApplicationLibraryComponent implements OnInit {

    private appLibs: ApplicationLibrary[] = [];

    constructor(private appLibService: ApplicationLibraryService) {

    }

    ngOnInit(): void {
        this.appLibService.getAllAppLibs()
            .then(response => this.appLibs = response as ApplicationLibrary[]);
    }
}
