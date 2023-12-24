import axios from "axios";
export default {
    name: 'EmprunteurMateriel',
    data() {
        return {
            emprunteur: [],
        }
    },
    async mounted() {
        this.load()
    },
    methods: {
        async load() {
            try {
                const emprunteur = await axios.get("http://localhost:3000/emprunteur")
                this.emprunteur = emprunteur.data;
            } catch (e) {
                console.log(e);
            }
        },
        async ajoutEmprunteur() {
            try {
                const emprunteur = await axios.post(
                    "http://localhost:3000/emprunteur",
                    {
                        nomEmprunteur: this.nomEmprunteur,
                        phoneEmprunteur: this.phoneEmprunteur,
                        emailEmprunteur: this.mailEmprunteur,
                        statutEmprunteur: this.statutEmprunteur,
                    }
                );
                console.log(emprunteur)
                this.load()
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppEmprunteur(emprunteur) {
            this.emprunteur.idEmprunteur = emprunteur.idEmprunteur
        },
        async deleteEmprunteur() {
            const emprunteur = await axios.delete(
                "http://localhost:3000/emprunteur/" + this.emprunteur.idEmprunteur
            );
            console.log(emprunteur)
            this.load()
        },
        async getModifEmprunteur(emprunteur) {
            this.emprunteur.idEmprunteur = emprunteur.idEmprunteur
            this.emprunteur.nomEmprunteur = emprunteur.nomEmprunteur
            this.emprunteur.phoneEmprunteur = emprunteur.phoneEmprunteur
            this.emprunteur.emailEmprunteur = emprunteur.emailEmprunteur
            this.emprunteur.statutEmprunteur = emprunteur.statutEmprunteur
        },
        async modifEmprunteur() {
            const emprunteur = await axios.put(
                "http://localhost:3000/emprunteur/" + this.emprunteur.idEmprunteur,
                {
                    nomEmprunteur: this.emprunteur.nomEmprunteur,
                    phoneEmprunteur: this.emprunteur.phoneEmprunteur,
                    emailEmprunteur: this.emprunteur.emailEmprunteur,
                    statutEmprunteur: this.emprunteur.statutEmprunteur

                }
            );
            console.log(emprunteur.data)
            this.load()
        },
    },
}