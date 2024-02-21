<script setup>
  import Instant from '@/components/Instant.vue';
  import Hourly from '@/components/Hourly.vue';
  import Daily from '@/components/Daily.vue';

</script>

<template>
  <div class="mx-auto p-4 min-h-screen flex flex-col pb-16" style="">
    <!-- Météo instantanée -->
    <instant />
    <!-- Prévisions par tranches de 2 heures -->
    <hourly/>
    <!-- Prévisions pour les jours suivants -->
    <daily/>
    <div class="fixed inset-x-0 bottom-0 pb-4 flex justify-center items-center">
      <button class="bg-blue-500 hover:bg-blue-700 text-white h-16 w-16 leading-8 rounded-full shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out text-4xl" >
          <a href="/Favorites">
            +
          </a>
    </button>
</div>
  </div>

</template>
