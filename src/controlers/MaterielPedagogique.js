import axios from "axios";
export default {
    name: 'MaterielPedagogique',
    data() {
        return {
            materiel: [],
            materielDetail: [],
            materielDetailPhoto: [],
            photo: "",
            file: ""

        }
    },
    async mounted() {
        this.load()
    },
    methods: {
        async load() {
            try {
                const materiel = await axios.get("http://localhost:3000/materiel")
                this.materiel = materiel.data;
            } catch (e) {
                console.log(e);
            }
        },
        selectFile() {
            this.file = this.$refs.file1.files[0];
        },
        selectFile1() {
            this.file = this.$refs.file2.files[0];
        },
        async ajoutMateriel() {
            let formData = new FormData()
            formData.append('nomMateriel', this.nomMateriel)
            formData.append('photoMateriel', this.file)
            formData.append('description', this.description)
            try {
                const materiel = await axios.post(
                    "http://localhost:3000/materiel",
                    formData
                );
                console.log(materiel)
                this.load()
            } catch (e) {
                console.log(e);
            }
        },
        async getSuppMateriel(materiel) {
            this.materiel.idMateriel = materiel.idMateriel
        },
        async deleteMateriel() {
            const materiel = await axios.delete(
                "http://localhost:3000/materiel/" + this.materiel.idMateriel
            );
            console.log(materiel)
            this.load()
        },
        async getDetailMateriel(materiel) {
            this.materiel.idMateriel = materiel.idMateriel
            const materielDetail = await axios.get(
                "http://localhost:3000/detailMateriel/" + this.materiel.idMateriel)
            this.materielDetail = materielDetail.data
            this.load()
        },
        //Quel type est-il renvoyer par une image dans le BDD
        async getDetailMaterielPhoto(materiel) {
            this.materiel.idMateriel = materiel.idMateriel
            /*const materielDetailPhoto = await axios.get(
                "http://localhost:3000/detailMaterielPhoto/" + this.materiel.idMateriel)
            //this.materielDetailPhoto.photoMateriel = materielDetailPhoto.data
            this.load()*/
            fetch(`http://localhost:3000/detailMaterielPhoto/${this.materiel.idMateriel}`, {
                method: "GET"
            })
                .then(response => response.blob())
                .then(data => {
                    const imageUrl = URL.createObjectURL(data);
                    document.getElementById("imgAdd").setAttribute("src", imageUrl)
                })
        },
        async getModifMateriel(materiel) {
            this.materiel.idMateriel = materiel.idMateriel,
                this.materiel.nomMateriel = materiel.nomMateriel,
                this.materiel.description = materiel.description
        },
        async modifMateriel() {
            const materiel = await axios.put(
                "http://localhost:3000/materiel/" + this.materiel.idMateriel,
                {
                    nomMateriel: this.materiel.nomMateriel,
                    description: this.materiel.description
                }
            );
            console.log(materiel.data)
            this.load()
        },
    },
}