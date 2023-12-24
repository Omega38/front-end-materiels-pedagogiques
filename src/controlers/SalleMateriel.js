import axios from "axios";
export default {
    name: 'SalleMateriel',
    data() {
        return {
            salle: [],
        }
    },
    async mounted() {
        this.load()
    },
    methods: {
        async load() {
            try {
                const salle = await axios.get("http://localhost:3000/salle")
                this.salle = salle.data;
            } catch (e) {
                console.log(e);
            }
        },
        async ajoutSalle() {
            try {
                const salle = await axios.post(
                    "http://localhost:3000/salle",
                    {
                        libelleSalle: this.libelleSalle,
                    }
                );
                console.log(salle)
                this.load()
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppSalle(salle) {
            this.salle.idSalle = salle.idSalle
        },
        async deleteSalle() {
            const salle = await axios.delete(
                "http://localhost:3000/salle/" + this.salle.idSalle
            );
            console.log(salle)
            this.load()
        },
        async getModifSalle(salle) {
            this.salle.idSalle = salle.idSalle
            this.salle.libelleSalle = salle.libelleSalle
        },
        async modifSalle() {
            const salle = await axios.put(
                "http://localhost:3000/salle/" + this.salle.idSalle,
                {
                    libelleSalle: this.salle.libelleSalle
                }
            );
            console.log(salle.data)
            this.load()
        },
    },
}