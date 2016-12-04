import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import {Acteur} from "./acteur";

@Injectable()
export class ActeursService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'acteurs/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public GetAll = (): Observable<Acteur[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Acteur[]>response.json());
    };

    public Add = (acteur: string): Observable<Acteur> => {

        return this._http.post(this.actionUrl, JSON.stringify(acteur), { headers: this.headers })
            .map((response: Response) => <Acteur>response.json());
    };

}