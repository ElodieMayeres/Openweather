<script setup>
import { onMounted, ref } from "vue";
import CoordsStore from "@/stores/coords.js";
import ForecastsStore from "@/stores/forecasts.js";


const currentWeather = ref(null);
const hourlyForecast = ref(null);
const dailyForecast = ref(null);

onMounted(async () => {
  await CoordsStore.fetchCoords();
  currentWeather.value = await ForecastsStore.getCurrent();
  hourlyForecast.value = await ForecastsStore.getHourlyForecasts();
  dailyForecast.value = await ForecastsStore.getDailyForecasts();
});


</script>

<template>
  <nav class="bg-blue-500 p-4">
    <ul class="flex space-x-4">
      <li><router-link class="text-white" :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link class="text-white" :to="{ name: 'favorites' }">Favorites</router-link></li>
    </ul>
  </nav>
  <hr class="my-4 border-t" />
  <router-view></router-view>
</template>

<style scoped>
/* Ajoutez des styles supplémentaires si nécessaire */
</style>





