import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// Models
import { ApplicationLibrary } from '../model/application-library';

@Injectable()
export class ApplicationLibraryService {
    private getAllAppLibsUrl = 'http://localhost:8080/getAllAppLibs';
    private getTypesUrl = 'http://localhost:8080/getTypes';
    private requestHeaders = new Headers();

    constructor(private http: Http) {
        this.requestHeaders.append('Access-Control-Allow-Origin', '*');
        this.requestHeaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        this.requestHeaders.append('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    }

    getAllAppLibs(): Promise<ApplicationLibrary[]> {
        return this.http.get(this.getAllAppLibsUrl, {headers: this.requestHeaders})
            .toPromise()
            .then(response => response.json() as ApplicationLibrary[]);
    }

    getTypes(): Promise<String[]> {
        return this.http.get(this.getTypesUrl, {headers: this.requestHeaders})
            .toPromise()
            .then(response => response.json() as String[]);
    }
}
