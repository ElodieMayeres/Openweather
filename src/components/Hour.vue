<script setup>
const props = defineProps({
    hour: Object
});
</script>

<template>
    <!-- hour -->

    <div class="text-center">
              <p class="text-lg">{{hour.hour}}</p>
              <div class="w-10 h-10 bg-blue-300 rounded-full mx-auto my-2" ></div>
              <p class="text-lg">{{hour.main.temp}}</p>
            </div>
</template> 