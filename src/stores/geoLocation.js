// Importe la fonction reactive de Vue pour créer un objet réactif
import { reactive } from 'vue';

// Fonction utilitaire pour obtenir la position géographique actuelle en utilisant l'API Geolocation du navigateur
function getCurrentPosition() {
    // Renvoie une Promise qui résout avec la position ou est rejetée avec une erreur
    return new Promise((resolve, reject) => {
        // Vérifie si la géolocalisation est prise en charge par le navigateur
        if (!("geolocation" in navigator)) {
            // Si la géolocalisation n'est pas prise en charge, rejette la Promise avec une erreur
            reject(new Error("Geolocation is not supported by this browser."));
        } else {
            // Si la géolocalisation est prise en charge, utilise navigator.geolocation.getCurrentPosition pour obtenir la position
            navigator.geolocation.getCurrentPosition(resolve, reject);
        }
    });
}

// Crée un store réactif pour gérer la localisation
export const LocationStore = reactive({
    // Méthode asynchrone pour obtenir les coordonnées géographiques actuelles
    getCoords: async function() {
        try {
            // Appelle la fonction utilitaire getCurrentPosition pour obtenir la position
            const position = await getCurrentPosition();
            // Renvoie un objet contenant les coordonnées de latitude et de longitude
            return { 
                latitude: position.coords.latitude, 
                longitude: position.coords.longitude 
            };
        } catch (err) {
            // En cas d'erreur pendant la récupération de la position, lance l'erreur
            throw err;
        }
    }
});

// Exporte le store LocationStore comme défaut
export default LocationStore;
