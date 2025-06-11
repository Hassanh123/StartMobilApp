<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-10 bg-gray-50">

    <!-- Header sectie -->
    <header class="max-w-3xl text-center mb-6 px-4 sm:px-0">
      <h1
        class="text-3xl sm:text-4xl font-extrabold text-indigo-900 mb-3 select-none leading-tight"
      >
        🚗 StartMobil Autoverhuur
      </h1>
      <p
        class="text-gray-700 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
      >
        Ontdek onze betrouwbare auto’s met scherpe prijzen en eenvoudige huurvoorwaarden. Start vandaag nog met jouw mobiliteit!
      </p>
    </header>

    <!-- Afbeelding banner -->
    <img
      src="/images/calltoaction.png"
      alt="Auto's te huur bij StartMobil"
      width="1200"
      height="300"
      class="w-full max-w-4xl rounded-lg shadow-md object-cover aspect-[4/1]"
      loading="lazy"
      decoding="async"
      fetchpriority="low"
    />

    <!-- Call to Action sectie -->
    <section
      class="w-full max-w-3xl bg-indigo-700 rounded-lg shadow-md p-6 mt-8 text-white flex flex-col sm:flex-row sm:items-center gap-6"
      aria-label="Call to action: Huur nu jouw auto"
    >
      <div class="flex-1 text-center sm:text-left">
        <h2 class="text-xl sm:text-2xl font-bold mb-2 leading-snug">
          Huur nu jouw auto snel en eenvoudig!
        </h2>
        <p class="mb-4 text-indigo-200 max-w-lg mx-auto sm:mx-0 leading-relaxed text-sm sm:text-base">
          Kies uit onze betrouwbare auto’s, scherpe prijzen en flexibele huurvoorwaarden. Perfect voor elke gelegenheid!
        </p>
      </div>

      <router-link
        :to="{ name: 'Login' }"
        class="inline-block px-8 py-3 bg-white text-indigo-700 rounded-lg font-semibold text-center text-base sm:text-lg shadow-md hover:bg-gray-100 transition focus:outline-none focus:ring-4 focus:ring-indigo-300"
        aria-label="Direct inloggen en auto huren"
      >
        Direct Inloggen & Huren
      </router-link>
    </section>

    <!-- Footer info / contact -->
    <footer
      class="mt-10 max-w-md text-center text-gray-600 text-xs sm:text-sm px-4 sm:px-0"
    >
      Heb je vragen? Neem gerust
      <router-link
        to="/contact"
        class="text-indigo-700 hover:underline"
        aria-label="Contact opnemen met StartMobil"
      >
        contact
      </router-link>
      met ons op!
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>
