<template>
  <div
    class="min-h-screen flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-20 py-16 bg-gray-50"
  >
<!-- Header -->
<header class="w-full max-w-[90vw] min-w-[280px] md:max-w-4xl lg:max-w-5xl mx-auto text-center mb-16 sm:mb-20 px-4 sm:px-6 md:px-8 lg:px-0">
  <h1
    class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-indigo-900 mb-6 select-none tracking-tight drop-shadow-sm leading-tight"
  >
    🚗 StartMobil Autoverhuur
  </h1>
  <div class="max-w-3xl mx-auto px-2 sm:px-0">
    <p
      class="text-gray-700 text-lg sm:text-xl md:text-2xl lg:text-3xl leading-snug tracking-wide font-medium"
    >
      Huur snel en zorgeloos een betrouwbare auto voor een scherpe prijs,
      altijd klaar voor jouw volgende rit.
    </p>
  </div>
</header>


    <!-- Hero Afbeelding -->
    <div
      class="w-full max-w-6xl mb-16 rounded-2xl overflow-hidden shadow-2xl aspect-[3/1] md:aspect-[16/5]"
    >
      <picture>
        <source srcset="/images/cars/desktop/calltoaction.webp" type="image/webp" />
        <source srcset="/images/cars/desktop/calltoaction.jpg" type="image/jpeg" />
        <img
          src="/images/cars/desktop/calltoaction.jpg"
          alt="Betrouwbare huurauto van StartMobil in actie"
          width="1200"
          height="400"
          class="w-full h-full object-cover block"
          decoding="async"
          loading="lazy"
        />
      </picture>
    </div>

    <!-- Introductietekst -->
    <section class="max-w-5xl w-full mb-24 text-center px-6 sm:px-12 md:px-16">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-6"
      >
        Waarom kiezen voor StartMobil?
      </h2>
      <p
        class="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto"
      >
        Met onze transparante prijzen, ruime keuze en gebruiksvriendelijke online
        reservering maken wij autoverhuur eenvoudig en snel. Of je nu op vakantie gaat,
        familie bezoekt of tijdelijk vervoer nodig hebt &mdash; bij ons zit je goed.
      </p>
      <p
        class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto"
      >
        Wij geloven in eerlijkheid, comfort en flexibiliteit. Geen verborgen kosten,
        geen kleine lettertjes &mdash; alleen service zoals jij het verdient.
      </p>
    </section>

    <!-- Call to Action -->
    <section
      class="max-w-7xl w-full bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col sm:flex-row mb-24 px-6 sm:px-10 md:px-16"
    >
      <div
        class="w-full sm:w-1/2 p-8 sm:p-12 flex flex-col justify-center text-center sm:text-left"
      >
        <h3
          class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-indigo-800 mb-6"
        >
          Altijd zorgeloos onderweg
        </h3>
        <p class="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl mb-8">
          Onze moderne en goed onderhouden vloot staat altijd voor je klaar. Comfort,
          veiligheid en scherpe tarieven  allemaal inbegrepen.
        </p>
        <router-link
          :to="{ name: 'Login' }"
          class="inline-block px-8 py-4 bg-indigo-700 text-white rounded-xl font-semibold text-base sm:text-lg md:text-xl hover:bg-indigo-800 transition focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          Bekijk ons aanbod
        </router-link>
      </div>
      <div class="w-full sm:w-1/2">
        <img
          src="/images/cars/desktop/calltoaction2.png"
          alt="Moderne en veilige huurauto van StartMobil"
          class="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>

    <!-- Extra info -->
    <section
      class="max-w-6xl w-full text-center mb-24 px-6 sm:px-12 md:px-16"
    >
      <h3
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-indigo-800 mb-10"
      >
        Wat maakt ons anders?
      </h3>
      <ul
        class="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl space-y-6 leading-relaxed max-w-xl mx-auto"
      >
        <li>✔️ Géén borg bij de meeste huurcategorieën</li>
        <li>✔️ All-risk verzekerd zonder verrassingen</li>
        <li>✔️ 24/7 pechhulp en ondersteuning</li>
        <li>✔️ Ook voor jonge bestuurders (18+)</li>
      </ul>
    </section>

    <!-- Footer -->
    <footer
      class="text-center text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl px-6 sm:px-12 md:px-16 pb-20 pt-16 border-t border-gray-200"
    >
      Heb je vragen? Neem gerust
      <router-link
        to="/contact"
        class="text-indigo-700 hover:underline font-semibold"
      >
        contact
      </router-link>
      met ons op &mdash; we helpen je graag verder!
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
