<script setup>
import { onMounted, ref } from "vue";
import CoordsStore from "@/stores/coords.js";
import ForecastsStore from "@/stores/forecasts.js";
import Day from "@/components/Day.vue"; 

const dailyForecast = ref(null);

onMounted(async () => {
  await CoordsStore.fetchCoords();
  dailyForecast.value = await ForecastsStore.getDailyForecasts();
});
</script>

<template>
<section class="bg-white rounded-lg shadow p-5">
        <h2 class="font-bold text-xl mb-4">Prochains Jours</h2>
        <div class="overflow-x-auto">
          <div class="flex space-x-8">
            <!-- Blocs de prévisions journalières ici -->
            <day/>
          </div>
        </div>
      </section>

</template>