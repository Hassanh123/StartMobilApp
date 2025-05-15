<template>
  <div id="app" class="min-h-screen bg-gray-100 flex flex-col">
    <header class="bg-indigo-900 shadow-md py-5">
      <div
        class="max-w-7xl mx-auto flex items-center justify-center gap-6 px-4 sm:px-6 lg:px-8"
      >
        <img
          src="@/assets/StartMobil.png"
          alt="StartMobil Logo"
          class="h-14 w-auto"
        />
        <h1 class="text-white text-3xl font-extrabold select-none">StartMobil</h1>
      </div>
    </header>

    <nav class="bg-indigo-800 border-b-4 border-yellow-500">
      <ul
        class="max-w-7xl mx-auto flex justify-center gap-10 py-3 px-4 sm:px-6 lg:px-8"
      >
        <li>
          <router-link
            :to="{ name: 'Home' }"
            class="text-white font-semibold text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
            exact
            >Home</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'AutoDetails' }"
            class="text-white font-semibold text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
            >AutoDetails</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'Login' }"
            class="text-white font-semibold text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
            >Login</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'OverOns' }"
            class="text-white font-semibold text-lg hover:text-yellow-400 transition"
            active-class="text-yellow-400 font-bold border-b-2 border-yellow-400"
            >Over Ons</router-link
          >
        </li>
      </ul>
    </nav>

    <main class="flex-grow max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg shadow-lg mt-8 mb-12">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
