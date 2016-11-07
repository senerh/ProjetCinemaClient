import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Film } from './film';
import { Configuration } from '../app.constants';

@Injectable()
export class FilmsService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'films/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public GetAll = (): Observable<Film[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Film[]>response.json().filmEntity);
    }
}