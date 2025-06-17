<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-4">
    <div class="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
      <h1 class="text-3xl font-bold text-center text-blue-800 mb-6">Inloggen</h1>
      <form class="flex flex-col gap-6">
        <div>
          <label for="email" class="block mb-2 font-semibold text-gray-700">E-mailadres</label>
          <input type="email" id="email" required placeholder="jouw@email.com"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
        </div>
        <div>
          <label for="password" class="block mb-2 font-semibold text-gray-700">Wachtwoord</label>
          <input type="password" id="password" required placeholder="••••••••"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition" />
        </div>
        <button type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition">
          Inloggen
        </button>
      </form>
    </div>
  </div>
</template>
