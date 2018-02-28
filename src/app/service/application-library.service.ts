import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// Models
import { ApplicationLibrary } from '../model/application-library';

@Injectable()
export class ApplicationLibraryService {
    private getAllAppLibsUrl = 'http://localhost:8080/getAllAppLibs';

    constructor(private http: Http) {

    }

    getAllAppLibs(): Promise<ApplicationLibrary[]> {
        const requestHeaders = new Headers();
        requestHeaders.append('Access-Control-Allow-Origin', '*');
        requestHeaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        requestHeaders.append('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        return this.http.get(this.getAllAppLibsUrl, {headers: requestHeaders})
            .toPromise()
            .then(response => response.json() as ApplicationLibrary[]);
    }
}
