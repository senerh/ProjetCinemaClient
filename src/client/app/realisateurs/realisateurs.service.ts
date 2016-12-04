import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import {Realisateur} from "./realisateurs";

@Injectable()
export class RealisateursService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'realisateurs/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public GetAll = (): Observable<Realisateur[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Realisateur[]>response.json());
    };

    public Add = (realisateur: string): Observable<Response> => {
        return this._http.post(this.actionUrl, JSON.stringify(realisateur), { headers: this.headers });
    };

}