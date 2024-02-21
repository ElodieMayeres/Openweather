// Dans votre fichier de store pour les coordonnées
import { reactive } from 'vue';
import GeoLocationStore from "@/stores/geoLocation.js";

// Définition d'un objet réactif pour stocker les coordonnées
const coords = reactive({
    latitude: null,
    longitude: null
});

// Fonction asynchrone pour récupérer les coordonnées à partir d'un autre store (GeoLocationStore)
const fetchCoords = async () => {
    try {
        // Appel à une fonction du store GeoLocation pour obtenir les coordonnées
        const newCoords = await GeoLocationStore.getCoords();

        // Mise à jour des coordonnées réactives avec les nouvelles valeurs obtenues
        coords.latitude = newCoords.latitude;
        coords.longitude = newCoords.longitude;
    } catch (err) {
        // Gérer l'erreur en cas d'échec de la récupération des coordonnées
        console.error(err.message);
    }
};

// Export du store de coordonnées
export default { coords, fetchCoords };
