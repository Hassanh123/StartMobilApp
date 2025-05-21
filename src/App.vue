<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <!-- Header -->
    <header class="bg-indigo-900 shadow-md py-5">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <img
          src="@/assets/StartMobil.png"
          alt="StartMobil Logo"
          class="h-14 w-auto"
        />
        <h1 class="text-white text-2xl sm:text-3xl font-extrabold select-none">StartMobil</h1>
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
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 bg-white rounded-lg shadow-lg mt-6 sm:mt-8 mb-10 sm:mb-12">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
