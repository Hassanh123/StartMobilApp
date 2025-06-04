<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="bg-indigo-900 shadow-lg py-6">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 sm:gap-6">
          <img
            src="/images/StartMobil.webp"
            alt="StartMobil Logo"
            class="h-20 w-auto drop-shadow-lg"
          />
          <h1 class="text-white text-3xl sm:text-4xl font-black tracking-wide select-none">
            Start<span class="text-indigo-200">Mobil</span>
          </h1>
        </div>
        <p class="hidden sm:block text-indigo-200 text-sm sm:text-base italic">
          Smart, simple & sustainable car rental
        </p>
      </div>
    </header>

    <!-- Navigatie -->
    <nav class="bg-indigo-800 border-b-4 border-yellow-500">
      <ul
        class="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 py-3 px-4 sm:px-6 lg:px-8"
      >
        <li>
          <router-link
            :to="{ name: 'Home' }"
            class="text-white font-semibold text-base sm:text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
            exact
          >Home</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'AutoDetails' }"
            class="text-white font-semibold text-base sm:text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
          >AutoDetails</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'OverOns' }"
            class="text-white font-semibold text-base sm:text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
          >Over Ons</router-link>
        </li>
        <li>
          <router-link
            :to="{ name: 'register' }"
            class="text-white font-semibold text-base sm:text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
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

    <!-- Footer -->
    <footer class="bg-indigo-900 text-indigo-200 py-8 mt-auto">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6"
      >
        <!-- Contactgegevens -->
        <div class="text-center md:text-left">
          <h2 class="text-xl font-semibold mb-2">Contact</h2>
          <p>StartMobil Autoverhuur</p>
          <p>
            Email:
            <a
              href="mailto:info@startmobil.nl"
              class="text-yellow-400 hover:underline"
              >info@startmobil.nl</a
            >
          </p>
          <p>
            Telefoon:
            <a href="tel:+31123456789" class="text-yellow-400 hover:underline"
              >+31 12 345 6789</a
            >
          </p>
          <p>Adres: Stationsstraat 123, 5611 AB Eindhoven</p>
        </div>

        <!-- Social media / overige info -->
        <div class="text-center md:text-right">
          <h2 class="text-xl font-semibold mb-2">Volg ons</h2>
          <div class="flex justify-center md:justify-end gap-4 text-yellow-400">
            <a href="#" aria-label="Facebook" class="hover:text-yellow-300 transition">
              <svg
                class="w-6 h-6"
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
                class="w-6 h-6"
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
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path
                  d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5a3.75 3.75 0 0 0 3.75-3.75v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm8.5 1.25a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"
                />
              </svg>
            </a>
          </div>
          <p class="mt-4 text-sm text-indigo-400">&copy; 2025 StartMobil. Alle rechten voorbehouden.</p>
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
