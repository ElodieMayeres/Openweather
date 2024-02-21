<script setup>
import { reactive, ref } from 'vue';
import { favoritesStore } from '../stores/favorites.js';


/*
A_FAIRE: Récupérer les coordonnées associés au nom. 
A_FAIRE: Ajouter un id. 
A_FAIRE: 

?QUESTIONS?: Comment j'ajoute les coordonnées et l'id ? 

*/

// Crée une variable réactive "favorites" initialisée avec les données du store
const favorites = reactive({
  data: favoritesStore.findAll(),
});

// Crée une référence pour le nouveau nom de favori
const newFavoriteName = ref('');

// Fonction pour ajouter un nouveau favori
const add = () => {
  if (newFavoriteName.value.trim() !== '') {
    // Ajoute un nouveau favori à la liste
    favorites.data.push({
      name: newFavoriteName.value,
      // Ajoutez d'autres propriétés au besoin
    });

    // Enregistre les favoris mis à jour dans le store et localStorage
    newFavoriteName.value = ''; // Efface l'entrée après avoir ajouté un favori
  }
};
</script>

<template>
  <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 mt-12">
    <h2 class="font-bold text-xl mb-4">Ajouter une Localisation</h2>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
          Nom de la Localisation
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="location"
          type="text"
          placeholder="Paris, France"
          v-model="newFavoriteName"
          @keyup.enter="add"
        />
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          @click="add"
        >
          Ajouter
        </button>
      </div>
    </form>
  </section>
</template>
