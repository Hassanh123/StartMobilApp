<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-50">
    <!-- Header -->
    <header class="max-w-4xl text-center mb-12">
      <h2 class="text-5xl sm:text-6xl font-extrabold text-indigo-900 mb-6 select-none tracking-tight drop-shadow-sm">
        🚗 StartMobil Autoverhuur
      </h2>
      <p class="text-gray-700 text-lg sm:text-2xl max-w-2xl mx-auto leading-relaxed tracking-wide">
        Ontdek onze betrouwbare auto’s met scherpe prijzen en eenvoudige huurvoorwaarden. Start vandaag nog met jouw
        mobiliteit!
      </p>
    </header>
    <!-- Afbeelding -->
    <div class="w-full max-w-5xl mb-10 overflow-hidden rounded-xl shadow-2xl aspect-[3/1]">
      <img src="/images/calltoaction.jpg" alt="Auto's te huur bij StartMobil" class="w-full h-full object-cover block"
        loading="lazy" decoding="async" />
    </div>

    <!-- Call to action -->
    <section
      class="w-full max-w-4xl bg-indigo-700 rounded-2xl shadow-xl p-8 text-white flex flex-col sm:flex-row sm:items-center gap-6">
      <div class="flex-1 text-center sm:text-left">
        <h2 class="text-3xl sm:text-4xl font-bold leading-tight mb-3">
          Huur nu jouw auto snel en eenvoudig!
        </h2>
        <p class="text-indigo-200 text-base sm:text-lg leading-relaxed">
          Kies uit onze betrouwbare auto’s, scherpe prijzen en flexibele huurvoorwaarden. Perfect voor elke gelegenheid!
        </p>
      </div>

      <router-link :to="{ name: 'Login' }"
        class="px-8 py-4 bg-white text-indigo-700 rounded-xl font-semibold text-lg text-center hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-indigo-300">
        Direct Inloggen & Huren
      </router-link>
    </section>

    <!-- Footer -->
    <footer class="mt-10 text-center text-gray-600 text-sm sm:text-base max-w-md">
      Heb je vragen? Neem gerust
      <router-link to="/contact" class="text-indigo-700 hover:underline font-medium"> contact </router-link>
      met ons op!
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
