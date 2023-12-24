<template>
    <div>
        <img src="../assets/user.png" class="img-fluid" alt="...">
    </div>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Nom</th>
                <th scope="col">e-mail</th>
                <th scope="col">TELEPHONE</th>
                <!-- <th scope="col">ACTION</th> -->
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">FRANCIS</th>
                <td>francisomega38@gmail.com</td>
                <td>+261344832076</td>
                <!-- <td>
                    <i class="bi bi-box-arrow-in-down" title="Modifier"></i>&nbsp;
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i class="bi bi-trash3" title="Supprimer"></i>
                    </button>
                </td> -->
            </tr>
            <tr>
                <th scope="row">TSARAFARA</th>
                <td>randriatsarafara@gmail.com</td>
                <td>+261324363792</td>
                <!-- <td>
                    <i class="bi bi-box-arrow-in-down" title="Modifier"></i>&nbsp;
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                        <i class="bi bi-trash3" title="Supprimer"></i>
                    </button>
                </td> -->
            </tr>
            <tr>
                <th scope="row">ROUSSEL</th>
                <td>yvanroussel31@gmail.com</td>
                <td>+261342827729</td>
            </tr>
            <tr>
                <th scope="row">OSCAR</th>
                <td>houssenoscar@gmail.com</td>
                <td>+261385495134</td>
            </tr>
            <tr>
                <th scope="row">ARISTIDE</th>
                <td>aristidereno@gmail.com</td>
                <td>+261326881937</td>
            </tr>
        </tbody>
    </table>

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
                    <button type="button" class="btn btn-danger">Supprimer</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script src="../controlers/CompteUtilisateur"></script>