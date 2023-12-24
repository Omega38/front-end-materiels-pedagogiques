import axios from "axios";
import moment from "moment";
export default {
    name: 'ListeReparation',
    data() {
        return {
            reparationHistoric: [],
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
        async load() {
            try {
                const reparationHistoric = await axios.get("http://localhost:3000/reparationHistoric")
                this.reparationHistoric = reparationHistoric.data;
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppHistoricReparation(reparationHistoric) {
            this.reparationHistoric.idReparation = reparationHistoric.idReparation
        },
        async deleteHistoricReparation() {
            const reparationHistoric = await axios.delete(
                "http://localhost:3000/reparationHistoric/" + this.reparationHistoric.idReparation
            );
            console.log(reparationHistoric)
            this.load()
        },
    },
}