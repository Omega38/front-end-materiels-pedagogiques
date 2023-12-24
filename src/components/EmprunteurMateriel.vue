<template>
    <div>
        <div class="row">
            <div class="col-9">
                <!-- Button trigger modal -->
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ajouter
                </button>
            </div>
            <!-- <form class="col-3">
                <input type="Recherche" class="form-control" placeholder="Recherche...">
            </form> -->
            <div class="dropdown col-3">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Voir +
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                        <router-link to="MaterielPedagogique">
                            <a class="dropdown-item" href="#">Materiel</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="SalleMateriel">
                            <a class="dropdown-item" href="#">Salle</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="EmpruntMateriel">
                            <a class="dropdown-item" href="#">Emprunt</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog        ">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">INSERTION</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" v-model="nomEmprunteur" class="form-control" name="nom" placeholder="NOM">
                        <hr>
                        <input type="text" v-model="phoneEmprunteur" class="form-control" name="tel"
                            placeholder="TELEPHONE">
                        <hr>
                        <input type="email" v-model="mailEmprunteur" class="form-control" name="mail" placeholder="e-mail">
                        <hr>
                        <label for="statutEmprunteur">Statut</label>
                        <select v-model="statutEmprunteur" class="form-select" aria-label="Default select example">
                            <option value="Enseignant Vacataire">Enseignant Vacataire</option>
                            <option value="Enseignant Titulaire">Enseignant Titulaire</option>
                            <option value="Personnel Administratif">Personnel Administratif</option>
                        </select>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="ajoutEmprunteur">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/emprunteur.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Téléphone</th>
                    <th scope="col">e-mail</th>
                    <th scope="col">Statut</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="emprunteur in emprunteur" :key="emprunteur.idEmprunteur">
                    <th scope="row">{{ emprunteur.nomEmprunteur }}</th>
                    <td>{{ emprunteur.phoneEmprunteur }}</td>
                    <td>{{ emprunteur.emailEmprunteur }}</td>
                    <td>{{ emprunteur.statutEmprunteur }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modificationModal" @click="getModifEmprunteur(emprunteur)">
                            <i class="bi bi-box-arrow-in-down" title="Modifier"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            @click="getSuppEmprunteur(emprunteur)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal supprimer -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">SUPPRESSION</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Voulez-vous le supprimer vraiment?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        @click="deleteEmprunteur()">Supprimer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Modifier -->
    <div class="modal fade" id="modificationModal" tabindex="-1" aria-labelledby="modificationModalLabel"
        aria-hidden="true">
        <div class="modal-dialog        ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modificationModalLabel">MODIFICATION</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <input type="text" v-model="emprunteur.nomEmprunteur" class="form-control" name="nom" placeholder="NOM">
                    <hr>
                    <input type="text" v-model="emprunteur.phoneEmprunteur" class="form-control" name="tel"
                        placeholder="TELEPHONE">
                    <hr>
                    <input type="email" v-model="emprunteur.emailEmprunteur" class="form-control" name="mail"
                        placeholder="e-mail">
                    <hr>
                    <label for="statutEmprunteur">Statut</label>
                    <select v-model="emprunteur.statutEmprunteur" class="form-select" aria-label="Default select example">
                        <option value="Enseignant Vacataire">Enseignant Vacataire</option>
                        <option value="Enseignant Titulaire">Enseignant Titulaire</option>
                        <option value="Personnel Administratif">Personnel Administratif</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="modifEmprunteur()">Modifier</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/EmprunteurMateriel"></script>

<style>
li a {
    text-decoration: none;
}
</style>