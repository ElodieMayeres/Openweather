<script setup>
import { onMounted, ref, computed} from "vue";
import CoordsStore from "@/stores/coords.js";
import ForecastsStore from "@/stores/forecasts.js";

const currentWeather = ref(null);

/*
A_FAIRE:  Afficher l'icône correspondante. 
A_FAIRE: 
A_FAIRE: 

*/



onMounted(async () => {
   await CoordsStore.fetchCoords();
   currentWeather.value = await ForecastsStore.getCurrent();
   const icon = ref(currentWeather.value.weather[0].icon);
});

const formattedDateTime = computed(() => {
  if (currentWeather.value && currentWeather.value.dt) {
    const timestamp = currentWeather.value.dt;
    const date = new Date(timestamp * 1000);
    return date.toLocaleString();
  }
  return 'Loading...';
});



</script>

<template>
  <section class="bg-white bg-opacity-75 rounded-lg shadow p-5 mb-6 grow flex flex-col" style="flex-grow: 1">
    <header class="mb-4">
      {{ console.log(currentWeather)  }}
      <h2 class="font-bold text-xl">Météo Instantanée</h2>
    </header>
    <article class="flex items-center justify-between grow" style="flex-grow: 1">
      <div>
        <h3 class="text-lg font-semibold">{{ currentWeather ? currentWeather.name : 'Loading...' }}</h3>
        <time class="text-sm text-gray-600" :datetime="formattedDateTime">
          {{ formattedDateTime }}
        </time>
      </div>
      <div class="flex">
        <div class="text-right">
          <!-- Utilisation de vérifications de null pour éviter des erreurs -->
          <p class="text-5xl">{{ currentWeather ? currentWeather.main.temp : 'Loading...' }}</p>
          <p class="text-lg text-gray-600">
            {{ currentWeather ? currentWeather.weather[0].description : 'Loading...' }} - {{ currentWeather ? currentWeather.weather[0].icon : 'Loading...' }}
          </p>
        </div>
        <!-- Icône météo (à remplacer par une vraie image) -->
        <div id="icon" class="">
          <!-- <img src="src/assets/icons/04d.png" alt=""> -->
          <img :src="`@/assets/icons/${ currentWeather.weather[0].icon }.png`" alt="" v-if="currentWeather">
        </div>
      
      </div>
    </article>
  </section>
</template>
