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
    private types: String[] = [];
    private selectedType: String = 'ALL';

    constructor(private appLibService: ApplicationLibraryService) {

    }

    ngOnInit(): void {
        this.appLibService.getAllAppLibs()
            .then(response => this.appLibs = response as ApplicationLibrary[]);
        this.appLibService.getTypes()
            .then(response => this.types = response as String[]);
    }

    onTypeChanged(type: String): void {
        this.selectedType = type;
        if (type === 'ALL') {
            this.appLibService.getAllAppLibs()
                .then(response => this.appLibs = response as ApplicationLibrary[]);
        } else {
            this.appLibService.getAppLibsByType(type)
                .then(response => this.appLibs = response as ApplicationLibrary[]);
        }
    }
}
