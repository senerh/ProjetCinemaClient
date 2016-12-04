import {Realisateur} from "../realisateurs/realisateurs";
import {Categorie} from "../categories/categorie";

export class Film {
    public noFilm: number;
    public titre: string;
    public duree: number;
    public dateSortie: string;
    public budget: number;
    public montantRecette: number;
    public realisateurByNoRea: Realisateur;
    public categorieByCodeCat: Categorie
}