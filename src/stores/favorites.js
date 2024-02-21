import { reactive, watch } from 'vue';

// Création d'un store réactif pour gérer les favoris
export const favoritesStore = reactive({
  favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  // Méthode pour récupérer tous les favoris
  findAll() {
    return this.favorites;
  },

  // Méthode pour sauvegarder les favoris dans le stockage local
  save(data) {
    localStorage.setItem('favorites', JSON.stringify(data));
  }
});

// Création d'une variable réactive pour les favoris
//const favorites = reactive(favoritesStore.findAll());

// Mise en place d'un watcher pour détecter les changements dans les favoris
watch(
  () => favoritesStore.favorites, // Fonction renvoyant la valeur à observer
  (newValue) => {
    favoritesStore.save(newValue); // Fonction de rappel appelée en cas de changement, sauvegarde dans le store
  },
  { deep: true } // Option pour observer les changements profonds dans les objets
);


