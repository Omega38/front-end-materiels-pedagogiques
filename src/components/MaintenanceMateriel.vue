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
                        <label for="debutMaintenance">Début de maintenance</label>
                        <input type="date" class="form-control" name="debutMaintenance" v-model="debutMaintenance">
                        <hr>
                        <label for="finMaintenance">Fin de maintenance</label>
                        <input type="date" class="form-control" name="finMaintenance" v-model="finMaintenance">
                        <hr>
                        <label for="coutMaintenance">Coût de maintenance (en Ar)</label>
                        <input type="number" class="form-control" name="coutMaintenance" v-model="coutMaintenance">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="ajoutMaintenance()">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/maintenance.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">NOM MATERIEL</th>
                    <th scope="col">DEBUT MAINTENANCE</th>
                    <th scope="col">FIN MAINTENANCE</th>
                    <th scope="col">COUT MAINTENANCE (en Ar)</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="maintenance in maintenance" :key="maintenance.idMaintenance">
                    <th scope="col">{{ maintenance.nomMateriel }}</th>
                    <td>{{ getDate(maintenance.debutMaintenance) }}</td>
                    <td>{{ getDate(maintenance.finMaintenance) }}</td>
                    <td>{{ maintenance.coutMaintenance }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modificationModal" @click="getModifMaintenance(maintenance)">
                            <i class="bi bi-box-arrow-in-down" title="Modifier"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#suppMaintenance"
                            @click="getSuppMaintenance(maintenance)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
                        </button>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#finMaintenance"
                            @click="getFinMaintenance(maintenance)">
                            <i class="bi bi-circle" title="FinMaintenance"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal supprimer -->
    <div class="modal fade" id="suppMaintenance" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="suppMaintenanceLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="suppMaintenanceLabel">SUPPRESSION</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    Voulez-vous le supprimer vraiment?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal"
                        @click="deleteMaintenance()">Supprimer</button>
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
                    <input type="text" class="form-control" name="nomMateriel" v-model="maintenance.nomMateriel"
                        :disabled="true">
                    <hr>
                    <label for="debutMaintenance">Début de maintenance</label>
                    <input type="date" class="form-control" name="debutMaintenance" v-model="maintenance.debutMaintenance">
                    <hr>
                    <label for="finMaintenance">Fin de maintenance</label>
                    <input type="date" class="form-control" name="finMaintenance" v-model="maintenance.finMaintenance">
                    <hr>
                    <label for="coutMaintenance">Coût de maintenance (en Ar)</label>
                    <input type="number" class="form-control" name="coutMaintenance" v-model="maintenance.coutMaintenance">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="modifMaintenance()">Modifier</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal fin maintenance -->
    <div class="modal fade" id="finMaintenance" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="finMaintenanceLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="finMaintenanceLabel">FIN MAINTENANCE</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    La maintenance est terminé!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="finMaintenance()">Confirmer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/MaintenanceMateriel"></script>

<style>
li a {
    text-decoration: none;
}
</style>