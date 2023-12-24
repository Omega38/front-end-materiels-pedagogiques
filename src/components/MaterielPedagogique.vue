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
                        <router-link to="MaintenanceMateriel">
                            <a class="dropdown-item" href="#">Maintenance</a>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="ReparationMateriel">
                            <a class="dropdown-item" href="#">Réparation</a>
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
                        <hr>
                        <input type="text" v-model="nomMateriel" class="form-control" name="nomMateriel"
                            placeholder="NOM MATERIEL">
                        <hr>
                        <div class="mb-3">
                            <label for="formFile" class="form-label">Inserer une image</label>
                            <input type="file" @change="selectFile" name="photoMateriel" ref="file1" id="photo"
                                class="form-control">
                        </div>
                        <hr>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">DESCRIPTION</label>
                            <textarea v-model="description" class="form-control" id="exampleFormControlTextarea1"
                                rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                            @click="ajoutMateriel()">Valider</button>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div>
            <img src="../assets/materiel.png" class="img-fluid" alt="...">
        </div>
        <hr>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">ACTION</th>
                </tr>
            </thead>
            <tbody>
                <tr class="" v-for="materiel in materiel" :key="materiel.idMateriel">
                    <td>{{ materiel.nomMateriel }}</td>
                    <td>
                        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modalDetail"
                            @click="getDetailMateriel(materiel)">
                            <i class="bi bi-plus" title="Detail"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modalDetailPhoto" @click="getDetailMaterielPhoto(materiel)">
                            <i class="bi bi-image" title="Photo"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modalModification" @click="getModifMateriel(materiel)">
                            <i class="bi bi-box-arrow-in-down" title="Modifier"></i>
                        </button>&nbsp;
                        <button type="button" class="btn btn-light" data-bs-toggle="modal"
                            data-bs-target="#modalSuppression" @click="getSuppMateriel(materiel)">
                            <i class="bi bi-trash3" title="Supprimer"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Modal detail -->
    <div class="modal fade" id="modalDetail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">DESCRIPTION</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" v-for="materielDetail in materielDetail" :key="materielDetail.idMateriel">
                    <div class="container-fluid">
                        <h4>{{ materielDetail.nomMateriel }}</h4>
                        <hr>
                        {{ materielDetail.description }}
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal detailPhoto -->
    <div class="modal fade" id="modalDetailPhoto" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">PHOTO</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <img :src="materielDetailPhoto.photoMateriel" class="img-fluid" alt="..." id="imgAdd">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Modifier -->
    <div class="modal fade" id="modalModification" tabindex="-1" aria-labelledby="modalModificationLabel"
        aria-hidden="true">
        <div class="modal-dialog        ">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalModificationLabel">MODIFICATION</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <hr>
                    <input type="text" v-model="materiel.nomMateriel" class="form-control" name="nomMateriel"
                        placeholder="NOM MATERIEL">
                    <hr>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">DESCRIPTION</label>
                        <textarea v-model="materiel.description" class="form-control" id="exampleFormControlTextarea1"
                            rows="3"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal"
                        @click="modifMateriel()">Modifier</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal supprimer -->
    <div class="modal fade" id="modalSuppression" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
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
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="deleteMateriel()"
                        :disabled="materiel.disabled">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script src="../controlers/MaterielPedagogique"></script>

<style>
li a {
    text-decoration: none;
}
</style>