<script setup>
import { onMounted, ref } from "vue";
import CoordsStore from "@/stores/coords.js";
import ForecastsStore from "@/stores/forecasts.js";
import Hour from '@/components/Hour.vue';

const hourlyForecast = ref(null);

onMounted(async () => {
  await CoordsStore.fetchCoords();
  hourlyForecast.value = await ForecastsStore.getHourlyForecasts();
});

const getCurrentDate = () => {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
};
</script>

<template>
  <section class="bg-white rounded-lg shadow p-5 mb-6">
    <h2 class="font-bold text-xl mb-4">Prochaines Heures</h2>
    {{ console.log(hourlyForecast) }}
    <div class="overflow-x-auto">
      <div class="flex space-x-8">
        <!-- Blocs Hourly -->
        <hour
          v-for="hour in hourlyForecast && hourlyForecast.filter(item => getCurrentDate() === item.dt_txt.split(' ')[0])"
          :key="hour.dt"
          :hour="hour"
        />
      </div>
    </div>
  </section>
</template>
