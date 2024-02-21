// Importe les fonctions réactives de Vue
import { reactive, ref, computed } from 'vue';
// Importe le store CoordsStore qui gère les coordonnées
import CoordsStore from '@/stores/coords.js'; 

// Clé API pour OpenWeatherMap (remplacez par votre propre clé)
const apiKey = '5131fd290436218ed0eaabd3a73adb6b';

// Références réactives pour stocker les données météorologiques actuelles, horaires et journalières
const current = ref([]);
const hourly = ref([]);
const daily = computed(() => {
    // Ici vient la logique pour extraire les dailyForecats
});

// Store réactif pour gérer les prévisions météorologiques
export const ForecastsStore = reactive({
    // Méthode asynchrone pour obtenir les données météorologiques actuelles
    getCurrent: async function() {
        // Vérifie si les coordonnées sont disponibles dans le store CoordsStore
        if (!CoordsStore.coords.latitude || !CoordsStore.coords.longitude) {
            throw new Error("Les coordonnées ne sont pas disponibles.");
        }

        try {
            // Appelle l'API OpenWeatherMap pour obtenir les données météorologiques actuelles
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${CoordsStore.coords.latitude}&lon=${CoordsStore.coords.longitude}&appid=${apiKey}&lang=fr&units=metric `);
            
            // Stocke les données météorologiques actuelles dans la référence réactive 'current'
            current.value = await response.json();
            
            // Renvoie les données météorologiques actuelles
            return current.value;
        } catch (err) {
            // Gère les erreurs qui pourraient survenir lors de la récupération des données météorologiques actuelles
            throw err;
        }
    },
    
    // Méthode asynchrone pour obtenir les prévisions météorologiques horaires
    getHourlyForecasts: async function() {
        // Vérifie si les coordonnées sont disponibles dans le store CoordsStore
        if (!CoordsStore.coords.latitude || !CoordsStore.coords.longitude) {
            throw new Error("Les coordonnées ne sont pas disponibles.");
        }

        try {
            // Appelle l'API OpenWeatherMap pour obtenir les prévisions météorologiques horaires
            const resp1 = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${CoordsStore.coords.latitude}&lon=${CoordsStore.coords.longitude}&appid=${apiKey}&lang=fr&units=metric `);
            
            // Convertit la réponse en format JSON
            const resp2 = await resp1.json();
       
            // Transforme les données horaires reçues en un format souhaité et les stocke dans la référence réactive 'hourly'
            hourly.value = resp2.list.map(hour => {
                const datetime = new Date(hour.dt * 1000);
                return {
                    dt: datetime,
                    hour: datetime.getHours() - 1,
                    day: datetime.getDay(),
                    ...hour, // Copie toutes les propriétés existantes de l'objet 'hour'
                };
            });

            // Renvoie les prévisions météorologiques horaires
            return hourly.value;
        } catch (err) {
            // Gère les erreurs qui pourraient survenir lors de la récupération des prévisions horaires
            throw err;
        }
    },
    
    // Méthode asynchrone pour obtenir les prévisions météorologiques journalières (utilise une propriété calculée)
    getDailyForecasts: async function() {
        return await daily.value;
    }
});

// Exporte le store ForecastsStore comme défaut
export default ForecastsStore;
