import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Models
import { ApplicationLibrary } from '../model/application-library';

@Injectable()
export class ApplicationLibraryService {
    private requestHeaders = new Headers();

    constructor(private http: Http) {
        this.requestHeaders.append('Access-Control-Allow-Origin', '*');
        this.requestHeaders.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        this.requestHeaders.append('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    }

    getAllAppLibs(): Promise<ApplicationLibrary[]> {
        const getAllAppLibsUrl = 'http://192.168.1.193:8080/getAllAppLibs';
        return this.http.get(getAllAppLibsUrl, {headers: this.requestHeaders})
            .toPromise()
            .then(response => response.json() as ApplicationLibrary[]);
    }

    getTypes(): Promise<String[]> {
        const getTypesUrl = 'http://192.168.1.193:8080/getTypes';
        return this.http.get(getTypesUrl, {headers: this.requestHeaders})
            .toPromise()
            .then(response => response.json() as String[]);
    }

    getAppLibsByType(type: String): Promise<ApplicationLibrary[]> {
        const getAppLibsByTypeUrl = `http://192.168.1.193:8080/getAppLibsByType/${type}`;
        return this.http.get(getAppLibsByTypeUrl, {headers: this.requestHeaders})
            .toPromise()
            .then(response => response.json() as ApplicationLibrary[]);
    }
}
