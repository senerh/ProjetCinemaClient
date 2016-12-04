import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Film } from './film';
import { Configuration } from '../app.constants';
import {Personnage} from "../personnages/personnage";

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
            .map((response: Response) => <Film[]>response.json());
    };

    public GetSingle = (id: number): Observable<Film> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <Film>response.json())
    };

    public GetPersonnagesOfFilm = (noFilm: number): Observable<Personnage[]> => {
        return this._http.get(this.actionUrl + noFilm + "/personnages")
            .map((response: Response) => <Personnage[]>response.json());
    };

    public Add = (film: string): Observable<Film> => {
        console.log(JSON.stringify(film));
        return this._http.post(this.actionUrl, JSON.stringify(film), { headers: this.headers })
            .map((response: Response) => <Film>response.json());
    };

    public Update = (itemToUpdate: Film): Observable<Film> => {
        console.log(JSON.stringify(itemToUpdate));
        return this._http.put(this.actionUrl, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <Film>response.json());
    };

}