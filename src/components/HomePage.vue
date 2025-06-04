<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-50">
    <header class="max-w-4xl text-center mb-12">
      <h1
        class="text-5xl font-extrabold text-indigo-900 mb-6 select-none"
      >
        🚗 StartMobil Autoverhuur
      </h1>
      <p
        class="text-gray-700 text-lg sm:text-xl mb-8 max-w-xl mx-auto"
      >
        Ontdek onze betrouwbare auto’s met scherpe prijzen en eenvoudige huurvoorwaarden.
        Start vandaag nog met jouw mobiliteit!
      </p>
    </header>

<img
  src="/images/autos.webp"
  alt="Auto's"
  width="1200"
  height="300"
  class="w-full object-cover block"
  style="height: 300px;"
  loading="lazy"
/>


    <!-- Call to action blok onder de foto met achtergrond en info -->
    <div
      class="w-full max-w-4xl bg-indigo-700 rounded-lg shadow-lg p-8 text-white flex flex-col sm:flex-row sm:items-center gap-6"
    >
      <div class="flex-1 text-center sm:text-left">
        <h2 class="text-3xl font-bold mb-3">
          Huur nu jouw auto snel en eenvoudig!
        </h2>
        <p class="mb-4 text-indigo-200">
          Kies uit onze betrouwbare auto’s, scherpe prijzen en flexibele huurvoorwaarden. 
          Perfect voor elke gelegenheid!
        </p>
      </div>

      <router-link
        :to="{ name: 'Login' }"
        class="px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold text-center hover:bg-gray-100 transition"
      >
        Direct Inloggen & Huren
      </router-link>
    </div>

    <!-- Meer info en contact onderaan -->
    <p class="mt-10 max-w-md text-center text-gray-600 text-sm sm:text-base">
      Heb je vragen? Neem gerust <router-link to="/contact" class="text-indigo-700 hover:underline">contact</router-link> met ons op!
    </p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
