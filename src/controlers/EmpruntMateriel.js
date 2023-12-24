import axios from "axios";
import moment from "moment";
export default {
    name: 'EmpruntMateriel',
    data() {
        return {
            emprunt: [],
            emprunteur: [],
            materiel: [],
            salle: [],
        }
    },
    async mounted() {
        this.load()
        this.selectEmprunteur()
        this.selectMateriel()
        this.selectSalle()
    },
    methods: {
        getDate: function (date) {
            const daty = new Date(date);
            daty.getDay() + 1;
            return moment(daty, 'YYYY-MM-DD').format('DD/MM/YYYY');
        },

        getDateNormal: function (date) {
            const daty = new Date(date);
            daty.getDay() + 1;
            return moment(daty, 'YYYY-MM-DD').format('YYYY-MM-DD');
        },

        async load() {
            try {
                const emprunt = await axios.get("http://localhost:3000/emprunt")
                this.emprunt = emprunt.data;
            } catch (e) {
                console.log(e);
            }
        },
        async selectEmprunteur() {
            try {
                const emprunteur = await axios.get("http://localhost:3000/emprunteur")
                this.emprunteur = emprunteur.data;
            } catch (e) {
                console.log(e);
            }
        },
        async selectMateriel() {
            try {
                const materiel = await axios.get("http://localhost:3000/materiel")
                this.materiel = materiel.data;
            } catch (e) {
                console.log(e);
            }
        },
        async selectSalle() {
            try {
                const salle = await axios.get("http://localhost:3000/salle")
                this.salle = salle.data;
            } catch (e) {
                console.log(e);
            }
        },
        async ajoutEmprunt() {
            try {
                const emprunt = await axios.post(
                    "http://localhost:3000/emprunt",
                    {
                        idEmprunteur: this.emprunteur.idEmprunteur,
                        idSalle: this.salle.idSalle,
                        idMateriel: this.materiel.idMateriel,
                        debutEmprunt: this.debutEmprunt,
                        finEmprunt: this.finEmprunt,
                        retourReelEmprunt: this.retourReelEmprunt
                    },
                    // {
                    //     headers: {
                    //         Accept: "application/json"
                    //     }
                    // }
                );
                console.log(emprunt)
                this.load()
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppEmprunt(emprunt) {
            this.emprunt.idEmprunteur = emprunt.idEmprunteur
            this.emprunt.idSalle = emprunt.idSalle
            this.emprunt.idMateriel = emprunt.idMateriel
            this.emprunt.debutEmprunt = this.getDateNormal(emprunt.debutEmprunt)
        },
        async deleteEmprunt() {
            const emprunt = await axios.delete(
                "http://localhost:3000/emprunt/" +
                this.emprunt.idEmprunteur + "/" +
                this.emprunt.idSalle + "/" +
                this.emprunt.idMateriel + "/" +
                this.emprunt.debutEmprunt
            );
            console.log(emprunt)
            this.load()
        },
        async getModifEmprunt(emprunt) {
            this.emprunt.nomEmprunteur = emprunt.nomEmprunteur
            this.emprunt.libelleSalle = emprunt.libelleSalle
            this.emprunt.nomMateriel = emprunt.nomMateriel

            this.emprunt.idEmprunteur = emprunt.idEmprunteur
            this.emprunt.idSalle = emprunt.idSalle
            this.emprunt.idMateriel = emprunt.idMateriel
            this.emprunt.debutEmprunt = this.getDateNormal(emprunt.debutEmprunt)
            this.emprunt.finEmprunt = this.getDateNormal(emprunt.finEmprunt)
            this.emprunt.retourReelEmprunt = this.getDateNormal(emprunt.retourReelEmprunt)
        },
        async modifEmprunt() {
            const emprunt = await axios.put(
                "http://localhost:3000/emprunt",
                {
                    finEmprunt: this.emprunt.finEmprunt,
                    retourReelEmprunt: this.emprunt.retourReelEmprunt,
                    idEmprunteur: this.emprunt.idEmprunteur,
                    idSalle: this.emprunt.idSalle,
                    idMateriel: this.emprunt.idMateriel,
                    debutEmprunt: this.emprunt.debutEmprunt

                }
            );
            console.log(emprunt.data)
            this.load()
        },
        async getFinEmprunt(emprunt) {
            this.emprunt.idEmprunteur = emprunt.idEmprunteur
            this.emprunt.idSalle = emprunt.idSalle
            this.emprunt.idMateriel = emprunt.idMateriel
            this.emprunt.debutEmprunt = this.getDateNormal(emprunt.debutEmprunt)
        },
        async finEmprunt() {
            const emprunt = await axios.put(
                "http://localhost:3000/empruntFin/",
                {
                    idEmprunteur: this.emprunt.idEmprunteur,
                    idSalle: this.emprunt.idSalle,
                    idMateriel: this.emprunt.idMateriel,
                    debutEmprunt: this.emprunt.debutEmprunt
                }
            );
            console.log(emprunt.data)
            this.load()
        },
    },
}