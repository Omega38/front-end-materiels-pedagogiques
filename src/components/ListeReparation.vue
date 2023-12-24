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
                    <li><router-link to="HistoriqueMaintenance">
                            <a class="dropdown-item" href="#">Historique maintenance</a>
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
            <img src="../assets/historique_reparation.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">NOM MATERIEL</th>
                    <th scope="col">DEBUT MAINTENANCE</th>
                    <th scope="col">FIN REPARATION</th>
                    <th scope="col">COUT REPARATION (en Ar)</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="reparationHistoric in reparationHistoric" :key="reparationHistoric.idReparation">
                    <th scope="col">{{ reparationHistoric.nomMateriel }}</th>
                    <td>{{ getDate(reparationHistoric.debutReparation) }}</td>
                    <td>{{ getDate(reparationHistoric.finReparation) }}</td>
                    <td>{{ reparationHistoric.coutReparation }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#suppReparation"
                            @click="getSuppHistoricReparation(reparationHistoric)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
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
                        @click="deleteHistoricReparation()">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/ListeReparation"></script>

<style>
li a {
    text-decoration: none;
}
</style>