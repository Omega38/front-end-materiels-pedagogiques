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
                    <li><router-link to="MaterielPedagogique">
                            <a class="dropdown-item" href="#">Materiel</a>
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
                        <select class="form-select" v-model="materiel.idMateriel" aria-label="Default select example">
                            <option v-for="materiel in materiel" :key="materiel.idMateriel"
                                v-bind:value="materiel.idMateriel">
                                {{ materiel.nomMateriel }}
                            </option>
                        </select>
                        <hr>
                        <label for="debutDateReparation">Début de réparation</label>
                        <input type="date" class="form-control" name="debutDateReparation" v-model="debutReparation">
                        <hr>
                        <label for="finDateReparation">Fin de réparation</label>
                        <input type="date" class="form-control" name="finReparation" v-model="finReparation">
                        <hr>
                        <label for="coutReparation">Coût de réparation (en Ar)</label>
                        <input type="number" class="form-control" name="coutReparation" v-model="coutReparation">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="ajoutReparation()">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/reparation.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">NOM MATERIEL</th>
                    <th scope="col">DEBUT REPARATION</th>
                    <th scope="col">FIN REPARATION</th>
                    <th scope="col">COUT REPARATION (en Ar)</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="reparation in reparation" :key="reparation.idReparation">
                    <th scope="col">{{ reparation.nomMateriel }}</th>
                    <td>{{ getDate(reparation.debutReparation) }}</td>
                    <td>{{ getDate(reparation.finReparation) }}</td>
                    <td>{{ reparation.coutReparation }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modificationModal" @click="getModifReparation(reparation)">
                            <i class="bi bi-box-arrow-in-down" title="Modifier"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#suppReparation"
                            @click="getSuppReparation(reparation)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
                        </button>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#finReparation"
                            @click="getFinReparation(reparation)">
                            <i class="bi bi-circle" title="finReparation"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal supprimer -->
    <div class="modal fade" id="suppReparation" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="suppReparationLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="suppReparationLabel">SUPPRESSION</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Voulez-vous le supprimer vraiment?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        @click="deleteReparation()">Supprimer</button>
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
                    <input type="text" class="form-control" name="nomMateriel" v-model="reparation.nomMateriel"
                        :disabled="true">
                    <hr>
                    <label for="debutReparation">Début de reparation</label>
                    <input type="date" class="form-control" name="debutReparation" v-model="reparation.debutReparation">
                    <hr>
                    <label for="finReparation">Fin de reparation</label>
                    <input type="date" class="form-control" name="finreparation" v-model="reparation.finReparation">
                    <hr>
                    <label for="coutReparation">Coût de reparation (en Ar)</label>
                    <input type="number" class="form-control" name="coutReparation" v-model="reparation.coutReparation">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="modifReparation()">Modifier</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal fin reparation -->
    <div class="modal fade" id="finReparation" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="finReparationLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="finReparationLabel">FIN REPARATION</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    La réparation est terminé!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="finReparation()">Confirmer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/ReparationMateriel"></script>