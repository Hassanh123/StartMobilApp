<template>
  <div class="min-h-screen flex flex-col items-center px-4 py-12 bg-gray-50">
    <header class="max-w-4xl text-center mb-12">
      <h1
        class="text-5xl font-extrabold text-indigo-900 mb-6 select-none"
        >🚗 StartMobil Autoverhuur</h1
      >
      <p class="text-gray-700 text-lg sm:text-xl mb-8 max-w-xl mx-auto">
        Ontdek onze betrouwbare auto’s met scherpe prijzen en eenvoudige
        huurvoorwaarden. Start vandaag nog met jouw mobiliteit!
      </p>
      <img
        src="@/assets/autos.png"
        alt="Auto's"
        class="mx-auto w-full max-w-md rounded-lg shadow-xl object-contain cursor-pointer transition-transform hover:scale-105"
      />
    </header>

    <div
      class="flex flex-col sm:flex-row justify-center gap-6 max-w-md w-full"
    >
      <router-link
        :to="{ name: 'Login' }"
        class="px-8 py-3 bg-indigo-700 text-white rounded-lg font-semibold text-center hover:bg-indigo-800 transition"
        >Inloggen</router-link
      >
      <router-link
        :to="{ name: 'OverOns' }"
        class="px-8 py-3 border border-indigo-700 text-indigo-700 rounded-lg font-semibold text-center hover:bg-indigo-700 hover:text-white transition"
        >Meer over ons</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
