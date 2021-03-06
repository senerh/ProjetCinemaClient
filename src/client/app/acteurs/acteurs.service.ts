import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import {Acteur} from "./acteur";
import {Personnage} from "../personnages/personnage";

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

    public Update = (itemToUpdate: Acteur): Observable<Response> => {
        return this._http.put(this.actionUrl, JSON.stringify(itemToUpdate), { headers: this.headers })
            .map((response: Response) => <Response>response.json());
    };

    public GetSingle = (id: number): Observable<Acteur> => {
        return this._http.get(this.actionUrl + id)
            .map((response: Response) => <Acteur>response.json())
    };

    public Delete (noActeur: number): Observable<Acteur> {
        return this._http.delete(this.actionUrl + noActeur, { headers: this.headers })
            .map((response: Response) => <Acteur>response.json())
    };

    public GetPersonnagesOfActeurs = (noActeurs: number): Observable<Personnage[]> => {
        return this._http.get(this.actionUrl + noActeurs + "/personnages")
            .map((response: Response) => <Personnage[]>response.json());
    };
}