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
                        <router-link to="EmprunteurMateriel">
                            <a class="dropdown-item" href="#">Emprunteur</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="SalleMateriel">
                            <a class="dropdown-item" href="#">Salle</a>
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
                        <label for="nomEmprunteur">Nom emprunteur</label>
                        <select class="form-select" v-model="emprunteur.idEmprunteur" aria-label="Default select example">
                            <option v-for="emprunteur in emprunteur" :key="emprunteur.idEmprunteur"
                                v-bind:value="emprunteur.idEmprunteur">
                                {{ emprunteur.nomEmprunteur }}
                            </option>
                        </select>
                        <hr>
                        <label for="libelleSalle">Salle</label>
                        <select class="form-select" v-model="salle.idSalle" aria-label="Default select example">
                            <option v-for="salle in salle" :key="salle.idSalle" v-bind:value="salle.idSalle">
                                {{ salle.libelleSalle }}
                            </option>
                        </select>
                        <hr>
                        <label for="nomMateriel">Nom materiel</label>
                        <select class="form-select" v-model="materiel.idMateriel" aria-label="Default select example">
                            <option v-for="materiel in materiel" :key="materiel.idMateriel"
                                v-bind:value="materiel.idMateriel">
                                {{ materiel.nomMateriel }}
                            </option>
                        </select>
                        <hr>
                        <label for="debutDateEmprunt">Début de l'emprunt</label>
                        <input type="date" class="form-control" v-model="debutEmprunt" name="debutEmprunt">
                        <hr>
                        <label for="finDateEmprunt">Fin de l'emprunt</label>
                        <input type="date" class="form-control" v-model="finEmprunt" name="finEmprunt">
                        <hr>
                        <label for="DateRetourEmprunt">Retour de l'emprunt</label>
                        <input type="date" class="form-control" v-model="retourReelEmprunt" name="retourReelEmprunt">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="ajoutEmprunt()">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/emprunt.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">NOM EMPRUNTEUR</th>
                    <th scope="col">SALLE</th>
                    <th scope="col">NOM MATERIEL</th>
                    <th scope="col">DEBUT EMPRUNT</th>
                    <th scope="col">FIN EMPRUNT</th>
                    <th scope="col">RETOUR EMPRUNT</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="emprunt in emprunt" :key="emprunt.idEmprunteur">
                    <th scope="row">{{ emprunt.nomEmprunteur }}</th>
                    <td>{{ emprunt.libelleSalle }}</td>
                    <td>{{ emprunt.nomMateriel }}</td>
                    <td>{{ getDate(emprunt.debutEmprunt) }}</td>
                    <td>{{ getDate(emprunt.finEmprunt) }}</td>
                    <td>{{ getDate(emprunt.retourReelEmprunt) }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modificationModal" @click="getModifEmprunt(emprunt)">
                            <i class="bi bi-box-arrow-in-down" title="Modifier"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            @click="getSuppEmprunt(emprunt)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
                        </button>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#finEmprunt"
                            @click="getFinEmprunt(emprunt)">
                            <i class="bi bi-circle" title="FinEmprunt"></i>
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
                        @click="deleteEmprunt()">Supprimer</button>
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
                    <input type="text" class="form-control" name="nomMateriel" v-model="emprunt.nomEmprunteur"
                        :disabled="true">
                    <hr>
                    <input type="text" class="form-control" name="nomMateriel" v-model="emprunt.libelleSalle"
                        :disabled="true">
                    <hr>
                    <input type="text" class="form-control" name="nomMateriel" v-model="emprunt.nomMateriel"
                        :disabled="true">
                    <hr>
                    <label for="debutDateEmprunt">Début de l'emprunt</label>
                    <input type="date" class="form-control" v-model="emprunt.debutEmprunt" name="debutEmprunt"
                        :disabled="true">
                    <hr>
                    <label for="finDateEmprunt">Fin de l'emprunt</label>
                    <input type="date" class="form-control" v-model="emprunt.finEmprunt" name="finEmprunt">
                    <hr>
                    <label for="DateRetourEmprunt">Retour de l'emprunt</label>
                    <input type="date" class="form-control" v-model="emprunt.retourReelEmprunt" name="retourReelEmprunt">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="modifEmprunt()">Modifier</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal fin emprunt -->
    <div class="modal fade" id="finEmprunt" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="finEmpruntLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="finEmpruntLabel">FIN EMPRUNT</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Cet emprunt est terminé!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="finEmprunt()">Confirmer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/EmpruntMateriel"></script>