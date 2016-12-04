import {Film} from "../films/film";
import {Acteur} from "../acteurs/acteur";


export class Personnage {

    public noFilm: number;
    public noAct: number;
    public nomPers: string;
    public filmByNoFilm: Film;
    public acteurByNoAct: Acteur;
}