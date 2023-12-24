import axios from "axios";
import moment from "moment";
export default {
    name: 'MaintenanceMateriel',
    data() {
        return {
            maintenance: [],
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
        async selectMateriel() {
            try {
                const materiel = await axios.get("http://localhost:3000/materiel")
                this.materiel = materiel.data;
            } catch (e) {
                console.log(e);
            }
        },
        async load() {
            try {
                const maintenance = await axios.get("http://localhost:3000/maintenance")
                this.maintenance = maintenance.data;
            } catch (e) {
                console.log(e);
            }
        },
        async ajoutMaintenance() {
            try {
                const maintenance = await axios.post(
                    "http://localhost:3000/maintenance",
                    {
                        idMateriel: this.materiel.idMateriel,
                        debutMaintenance: this.debutMaintenance,
                        finMaintenance: this.finMaintenance,
                        coutMaintenance: this.coutMaintenance
                    }
                );
                console.log(maintenance)
                this.load()
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppMaintenance(maintenance) {
            this.maintenance.idMaintenance = maintenance.idMaintenance
            this.maintenance.idMateriel = maintenance.idMateriel
        },
        async deleteMaintenance() {
            const maintenance = await axios.delete(
                "http://localhost:3000/Maintenance/" +
                this.maintenance.idMaintenance + "/" +
                this.maintenance.idMateriel
            );
            console.log(maintenance)
            this.load()
        },
        async getModifMaintenance(maintenance) {
            this.maintenance.idMaintenance = maintenance.idMaintenance
            this.maintenance.nomMateriel = maintenance.nomMateriel
            this.maintenance.debutMaintenance = this.getDateNormal(maintenance.debutMaintenance)
            this.maintenance.finMaintenance = this.getDateNormal(maintenance.finMaintenance)
            this.maintenance.coutMaintenance = maintenance.coutMaintenance
        },
        async modifMaintenance() {
            const maintenance = await axios.put(
                "http://localhost:3000/maintenance/" + this.maintenance.idMaintenance,
                {
                    debutMaintenance: this.maintenance.debutMaintenance,
                    finMaintenance: this.maintenance.finMaintenance,
                    coutMaintenance: this.maintenance.coutMaintenance

                }
            );
            console.log(maintenance.data)
            this.load()
        },
        async getFinMaintenance(maintenance) {
            this.maintenance.idMaintenance = maintenance.idMaintenance
            this.maintenance.idMateriel = maintenance.idMateriel
        },
        async finMaintenance() {
            const maintenance = await axios.put(
                "http://localhost:3000/maintenance/" +
                this.maintenance.idMaintenance + "/" +
                this.maintenance.idMateriel
            );
            console.log(maintenance)
            this.load()
        },
    },
}