import { createRouter, createWebHistory } from "vue-router";

import AccueilPage from "@/components/AccueilPage.vue";
import CompteUtilisateur from '../components/CompteUtilisateur.vue'
import EmprunteurMateriel from '../components/EmprunteurMateriel.vue'
import MaterielPedagogique from '../components/MaterielPedagogique.vue'
import SalleMateriel from '../components/SalleMateriel.vue'
import EmpruntMateriel from '../components/EmpruntMateriel.vue'
import MaintenanceMateriel from '../components/MaintenanceMateriel.vue'
import ReparationMateriel from '../components/ReparationMateriel.vue'
import HistoriqueMaintenance from '../components/HistoriqueMaintenance.vue'
import ListeReparation from '../components/ListeReparation.vue'
import DesEmprunt from '../components/DesEmprunt.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AccueilPage
        },
        {
            path: '/CompteUtilisateur',
            component: CompteUtilisateur
        },
        {
            path: '/EmprunteurMateriel',
            component: EmprunteurMateriel
        },
        {
            path: '/MaterielPedagogique',
            component: MaterielPedagogique
        },
        {
            path: '/SalleMateriel',
            component: SalleMateriel
        },
        {
            path: '/EmpruntMateriel',
            component: EmpruntMateriel
        },
        {
            path: '/MaintenanceMateriel',
            component: MaintenanceMateriel
        },
        {
            path: '/ReparationMateriel',
            component: ReparationMateriel
        },
        {
            path: '/HistoriqueMaintenance',
            component: HistoriqueMaintenance
        },
        {
            path: '/ListeReparation',
            component: ListeReparation
        },
        {
            path: '/DesEmprunt',
            component: DesEmprunt
        }
    ]
})

export default router;