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
                    <li><router-link to="ListeReparation">
                            <a class="dropdown-item" href="#">Historique réparation</a>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/historique_emprunt.png" class="img-fluid" alt="...">
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
                <tr class="" v-for="empruntHistoric in empruntHistoric" :key="empruntHistoric.idEmprunteur">
                    <th scope="row">{{ empruntHistoric.nomEmprunteur }}</th>
                    <td>{{ empruntHistoric.libelleSalle }}</td>
                    <td>{{ empruntHistoric.nomMateriel }}</td>
                    <td>{{ getDate(empruntHistoric.debutEmprunt) }}</td>
                    <td>{{ getDate(empruntHistoric.finEmprunt) }}</td>
                    <td>{{ getDate(empruntHistoric.retourReelEmprunt) }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            @click="getSuppHistoricEmprunt(empruntHistoric)">
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
                        @click="deleteHistoricEmprunt()">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/DesEmprunt"></script>