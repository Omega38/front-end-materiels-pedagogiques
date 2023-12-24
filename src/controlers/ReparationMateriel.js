import axios from "axios";
import moment from "moment";
export default {
    name: 'ReparationMateriel',
    data() {
        return {
            reparation: [],
            materiel: [],
        }
    },
    async mounted() {
        this.load()
        this.selectMateriel()
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
                const reparation = await axios.get("http://localhost:3000/reparation")
                this.reparation = reparation.data;
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
        async ajoutReparation() {
            try {
                const reparation = await axios.post(
                    "http://localhost:3000/reparation",
                    {
                        idMateriel: this.materiel.idMateriel,
                        debutReparation: this.debutReparation,
                        finReparation: this.finReparation,
                        coutReparation: this.coutReparation
                    }
                );
                console.log(reparation)
                this.load()
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppReparation(reparation) {
            this.reparation.idReparation = reparation.idReparation
            this.reparation.idMateriel = reparation.idMateriel
        },
        async deleteReparation() {
            const reparation = await axios.delete(
                "http://localhost:3000/reparation/" +
                this.reparation.idReparation + "/" +
                this.reparation.idMateriel
            );
            console.log(reparation)
            this.load()
        },
        async getModifReparation(reparation) {
            this.reparation.idReparation = reparation.idReparation
            this.reparation.nomMateriel = reparation.nomMateriel
            this.reparation.debutReparation = this.getDateNormal(reparation.debutReparation)
            this.reparation.finReparation = this.getDateNormal(reparation.finReparation)
            this.reparation.coutReparation = reparation.coutReparation
        },
        async modifReparation() {
            const reparation = await axios.put(
                "http://localhost:3000/reparation/" + this.reparation.idReparation,
                {
                    debutReparation: this.reparation.debutReparation,
                    finReparation: this.reparation.finReparation,
                    coutReparation: this.reparation.coutReparation

                }
            );
            console.log(reparation.data)
            this.load()
        },
        async getFinReparation(reparation) {
            this.reparation.idReparation = reparation.idReparation
            this.reparation.idMateriel = reparation.idMateriel
        },
        async finReparation() {
            const reparation = await axios.put(
                "http://localhost:3000/reparation/" +
                this.reparation.idReparation + "/" +
                this.reparation.idMateriel
            );
            console.log(reparation)
            this.load()
        },
    },
}