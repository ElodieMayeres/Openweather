<script setup>
import Favoritesform from '../components/Favoritesform.vue';
import Listfavorites from '../components/Listfavorites.vue';



</script>

<template>
 <div
      class="mx-auto p-4 min-h-screen flex flex-col"
      style=""
    >
      <div class="fixed top-2 right-5 text-4xl">
        <a href="/" class="text-white">x</a>
      </div>
      <!-- Formulaire d'ajout de localisation -->
      <Favoritesform /> 

      <!-- Liste des localisations favorites -->
      <Listfavorites/>
  </div>
</template>
