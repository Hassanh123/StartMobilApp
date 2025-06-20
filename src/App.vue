<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">

    <!-- Header -->
    <header class="bg-indigo-900 shadow-lg py-4 sm:py-6 md:py-8">
      <div
        class="max-w-7xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-8 md:px-12 lg:px-16"
      >
        <a href="/" class="flex items-center gap-4 group w-full sm:w-auto">
          <img
            src="/images/cars/desktop/startmobil.webp"
            alt="StartMobil Logo"
            title="StartMobil"
            class="h-16 sm:h-20 md:h-24 lg:h-28 w-auto drop-shadow-lg transition-transform group-hover:scale-105 max-w-full"
          />
          <div class="overflow-hidden min-w-0">
            <h1
              class="text-white font-black tracking-wide truncate"
              style="font-size: clamp(1.5rem, 5vw, 3.5rem);"
            >
              Start<span class="text-indigo-200">Mobil</span>
            </h1>
            <p
              class="text-indigo-200 italic mt-1 truncate"
              style="font-size: clamp(0.75rem, 1.8vw, 1.5rem);"
            >
              Smart, Simple & Sustainable Car Rental
            </p>
          </div>
        </a>
      </div>
    </header>

<!-- Navigatie -->
<nav class="bg-indigo-800 border-b-4 border-yellow-500">
  <ul
    class="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-14 py-3 sm:py-6 md:py-8 px-4 sm:px-10 lg:px-12"
  >
    <li>
      <router-link
        :to="{ name: 'Home' }"
        class="text-white font-semibold text-base sm:text-xl md:text-3xl hover:text-yellow-400 transition"
        active-class="text-yellow-400 font-bold border-b-4 border-yellow-400"
        exact
      >Home</router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'AutoDetails' }"
        class="text-white font-semibold text-base sm:text-xl md:text-3xl hover:text-yellow-400 transition"
        active-class="text-yellow-400 font-bold border-b-4 border-yellow-400"
      >AutoDetails</router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'OverOns' }"
        class="text-white font-semibold text-base sm:text-xl md:text-3xl hover:text-yellow-400 transition"
        active-class="text-yellow-400 font-bold border-b-4 border-yellow-400"
      >Over Ons</router-link>
    </li>
    <li>
      <router-link
        :to="{ name: 'register' }"
        class="text-white font-semibold text-base sm:text-xl md:text-3xl hover:text-yellow-400 transition"
        active-class="text-yellow-400 font-bold border-b-4 border-yellow-400"
      >Registreer</router-link>
    </li>
  </ul>
</nav>


    <!-- Main content -->
    <main
      class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-white rounded-lg shadow-lg mt-6 sm:mt-8 mb-10 sm:mb-12"
    >
      <router-view />
    </main>
<footer class="bg-indigo-900 text-indigo-200 py-14 sm:py-16 md:py-20 mt-auto">
  <div
    class="max-w-8xl mx-auto px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-8 w-full"
  >
    <!-- Contactgegevens -->
    <div class="text-center md:text-left flex-1">
      <h2 class="text-2xl sm:text-3xl md:text-6xl font-semibold mb-7 md:mb-8 tracking-wide">
        Contact
      </h2>
      <p class="text-lg sm:text-lg md:text-2xl md:leading-relaxed mb-3">StartMobil Autoverhuur</p>
      <p class="text-lg sm:text-lg md:text-2xl md:leading-relaxed mb-3">
        Email:
        <a href="mailto:info@startmobil.nl" class="text-yellow-400 hover:underline"
          >info@startmobil.nl</a
        >
      </p>
      <p class="text-lg sm:text-lg md:text-2xl md:leading-relaxed mb-3">
        Telefoon:
        <a href="tel:+31123456789" class="text-yellow-400 hover:underline"
          >+31 12 345 6789</a
        >
      </p>
      <p class="text-lg sm:text-lg md:text-2xl md:leading-relaxed">
        Adres: Stationsstraat 123, 5611 AB Eindhoven
      </p>
    </div>

    <!-- Social media / overige info -->
    <div class="text-center md:text-right flex-1">
      <h2 class="text-2xl sm:text-3xl md:text-6xl font-semibold mb-7 md:mb-8 tracking-wide">
        Volg ons
      </h2>
      <div class="flex justify-center md:justify-end gap-12 md:gap-14 text-yellow-400">
        <a href="#" aria-label="Facebook" class="hover:text-yellow-300 transition">
          <svg
            class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M22 12a10 10 0 1 0-11.5 9.87v-6.98H8.9v-2.9h1.6V9.6c0-1.58.94-2.46 2.38-2.46.69 0 1.41.13 1.41.13v1.56h-.8c-.79 0-1.04.49-1.04.99v1.2h1.77l-.28 2.9h-1.5v6.98A10 10 0 0 0 22 12z"
            />
          </svg>
        </a>
        <a href="#" aria-label="Twitter" class="hover:text-yellow-300 transition">
          <svg
            class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.44 8.44 0 0 1-2.7 1.03 4.22 4.22 0 0 0-7.2 3.85 11.96 11.96 0 0 1-8.7-4.41 4.22 4.22 0 0 0 1.3 5.63 4.2 4.2 0 0 1-1.91-.53v.05a4.22 4.22 0 0 0 3.39 4.14 4.24 4.24 0 0 1-1.9.07 4.22 4.22 0 0 0 3.94 2.93A8.48 8.48 0 0 1 2 19.54 11.95 11.95 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.18 8.18 0 0 0 22.46 6z"
            />
          </svg>
        </a>
        <a href="#" aria-label="Instagram" class="hover:text-yellow-300 transition">
          <svg
            class="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5a3.75 3.75 0 0 0 3.75-3.75v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm8.5 1.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
            />
          </svg>
        </a>
      </div>
      <p class="mt-6 text-sm sm:text-base md:text-xl text-indigo-400">
        &copy; 2025 StartMobil. Alle rechten voorbehouden.
      </p>
    </div>
  </div>
</footer>
</div>

</template>

<script>
export default {
  name: 'App',
}
</script>
