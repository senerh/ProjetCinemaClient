import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import {Personnage} from "./personnage";

@Injectable()
export class PersonnagesService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'personnages/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public GetAll = (): Observable<Personnage[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Personnage[]>response.json());
    };

    public Add = (personnage: string): Observable<Personnage> => {
        return this._http.post(this.actionUrl, JSON.stringify(personnage), { headers: this.headers })
            .map((response: Response) => <Personnage>response.json());
    };

    public Update = (itemToUpdate: Personnage): Observable<Response> => {
        return this._http.put(this.actionUrl, JSON.stringify(itemToUpdate), { headers: this.headers });
    };

    public Delete (noFilm: number, noActeur: number): Observable<Response> {
        return this._http.delete(this.actionUrl + noFilm + "/" + noActeur, { headers: this.headers })
            .map((response: Response) => <Response>response.json());
    };
}