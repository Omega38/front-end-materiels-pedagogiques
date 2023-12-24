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
                        <input type="text" v-model="libelleSalle" class="form-control" name="salle" placeholder="SALLE">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="ajoutSalle()">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/salle.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Salle</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="salle in salle" :key="salle.idSalle">
                    <td>{{ salle.libelleSalle }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modificationModal" @click="getModifSalle(salle)">
                            <i class="bi bi-box-arrow-in-down" title="Modifier"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                            @click="getSuppSalle(salle)">
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
                        @click="deleteSalle()">Supprimer</button>
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
                    <input type="text" v-model="salle.libelleSalle" class="form-control" name="salle" placeholder="SALLE">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="modifSalle()">Modifier</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/SalleMateriel"></script>