<template>
    <div>
        <div class="row">
            <div class="col-9">
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
                    <li><router-link to="ListeReparation">
                            <a class="dropdown-item" href="#">Historique réparation</a>
                        </router-link>
                    </li>
                    <li><router-link to="DesEmprunt">
                            <a class="dropdown-item" href="#">Historique emprunt</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <hr>
        <div>
            <img src="../assets/historique_maintenance.png" class="img-fluid" alt="...">
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
                <tr class="" v-for="maintenanceHistoric in maintenanceHistoric" :key="maintenanceHistoric.idMaintenance">
                    <th scope="col">{{ maintenanceHistoric.nomMateriel }}</th>
                    <td>{{ getDate(maintenanceHistoric.debutMaintenance) }}</td>
                    <td>{{ getDate(maintenanceHistoric.finMaintenance) }}</td>
                    <td>{{ maintenanceHistoric.coutMaintenance }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#suppMaintenance"
                            @click="getSuppHistoricMaintenance(maintenanceHistoric)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
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
                        @click="deleteHistoricMaintenance()">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/HistoriqueMaintenance"></script>

<style>
li a {
    text-decoration: none;
}
</style>