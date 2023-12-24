<template>
  <div>
    <header class="py-3 mb-4 border-bottom shadow">
      <div class="container-fluid align-items-center d-flex">
        <div class="flex-shrink-1">
          <a href="#" class="d-flex align-items-center col-lg-4 mb-2 mb-lg-0 link-dark text-decoration-none">
            <img src="./assets/LogoENI.jpeg" alt="user" width="37" height="37" class="rounded-circle">
          </a>
        </div>
        <div class="flex-grow-1 d-flex align-items-center">
          <div class="tete">
            <img src="./assets/tete.png" class="img-fluid" alt="...">
          </div>
          <div class="flex-shrink-0 dropdown">
            <a href="#" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2"
              data-bs-toggle="dropdown" aria-expanded="false">
              <img src="./assets/utilisateur.png" alt="user" width="32" height="32" class="rounded">
            </a>
            <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="dropdownUser2" style="">
              <li><router-link to="CompteUtilisateur"><a class="dropdown-item" href="#">Profile</a></router-link></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Déconnecter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <div class="container-fluid pb-3 flex-grow-1 d-flex flex-column flex-sm-row overflow-auto">
      <div class="row flex-grow-sm-1 flex-grow-0">

        <aside class="col-sm-2 flex-grow-sm-1 flex-shrink-1 flex-grow-0 sticky-top pb-sm-0 pb-3">
          <div class="bg-light border rounded-3 p-1 h-100 sticky-top">
            <ul class="nav nav-pills flex-sm-column flex-row mb-auto justify-content-between text-truncate">
              <hr />
              <li class="nav-item">
                <router-link to="/">
                  <a href="#" class="nav-link px-2 text-truncate">
                    <i class="bi bi-house fs-5"></i>&nbsp;
                    <span class="d-none d-sm-inline">Accueil</span>
                  </a>
                </router-link>
              </li>
              <hr />
              <!-- <li>
                <router-link to="CompteUtilisateur">
                  <a href="#" class="nav-link px-2 text-truncate">
                    <i class="bi bi-person-vcard"></i>&nbsp;
                    <span class="d-none d-sm-inline">Utilisateurs</span>
                  </a>
                </router-link>
              </li>
              <hr /> -->
              <li>
                <router-link to="EmprunteurMateriel">
                  <a href="#" class="nav-link px-2 text-truncate"><i class="bi bi-explicit"></i>&nbsp;
                    <span class="d-none d-sm-inline">Emprunteur</span> </a>
                </router-link>
              </li>
              <hr />
              <li>
                <router-link to="MaterielPedagogique">
                  <a href="#" class="nav-link px-2 text-truncate"><i class="bi bi-clipboard-check"></i>&nbsp;
                    <span class="d-none d-sm-inline">Materiel</span> </a>
                </router-link>
              </li>
              <hr />
              <li>
                <router-link to="HistoriqueMaintenance">
                  <a href="#" class="nav-link px-2 text-truncate"><i class="bi bi-diagram-3"></i>&nbsp;
                    <span class="d-none d-sm-inline">Historiques</span> </a>
                </router-link>
              </li>
              <hr />
            </ul>
          </div>
        </aside>
        <main class="col overflow-auto h-100">
          <div class="bg-light border rounded-3 p-3">
            <!-- <EmprunteurMateriel /> -->
            <router-view></router-view>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
// import EmprunteurMateriel from './components/EmprunteurMateriel.vue'

export default {
  name: 'App',
  // components: {
  //   EmprunteurMateriel
  // }
}

</script>

<style>
* {
  border-radius: 5px;
}

body.thumb {
  transform: scale(0.4);
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}

main {
  min-height: 80vh;
}

[class*='container'] {
  background-clip: content-box;
}

.row [class*='col'] {
  background-clip: content-box;
}

.nav-item {
  background-color: #eeeeff;
  background-clip: content-box;
}

[class*='w-100 me-3'] {
  padding-left: 55%;
  padding-right: 15%;
}

li a {
  text-decoration: none;
}

.tete {
  padding-left: 7%;
}
</style>
