import axios from "axios";
import moment from "moment";
export default {
    name: 'DesEmprunt',
    data() {
        return {
            empruntHistoric: [],
        }
    },
    async mounted() {
        this.load()
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
                const empruntHistoric = await axios.get("http://localhost:3000/empruntHistoric")
                this.empruntHistoric = empruntHistoric.data;
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppHistoricEmprunt(empruntHistoric) {
            this.empruntHistoric.idEmprunteur = empruntHistoric.idEmprunteur
            this.empruntHistoric.idSalle = empruntHistoric.idSalle
            this.empruntHistoric.idMateriel = empruntHistoric.idMateriel
            this.empruntHistoric.debutEmprunt = this.getDateNormal(empruntHistoric.debutEmprunt)
        },
        async deleteHistoricEmprunt() {
            const empruntHistoric = await axios.delete(
                "http://localhost:3000/empruntHistoric/" +
                this.empruntHistoric.idEmprunteur + "/" +
                this.empruntHistoric.idSalle + "/" +
                this.empruntHistoric.idMateriel + "/" +
                this.empruntHistoric.debutEmprunt
            );
            console.log(empruntHistoric)
            this.load()
        },
    },
}