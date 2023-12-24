import axios from "axios";
import moment from "moment";
export default {
    name: 'HistoriqueMaintenance',
    data() {
        return {
            maintenanceHistoric: [],
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
                const maintenanceHistoric = await axios.get("http://localhost:3000/maintenanceHistoric")
                this.maintenanceHistoric = maintenanceHistoric.data;
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppHistoricMaintenance(maintenanceHistoric) {
            this.maintenanceHistoric.idMaintenance = maintenanceHistoric.idMaintenance
        },
        async deleteHistoricMaintenance() {
            const maintenanceHistoric = await axios.delete(
                "http://localhost:3000/maintenanceHistoric/" + this.maintenanceHistoric.idMaintenance
            );
            console.log(maintenanceHistoric)
            this.load()
        },
    },
}