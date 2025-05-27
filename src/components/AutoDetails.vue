<template>
  <div class="p-5">
    <h1 class="text-3xl font-bold mb-6 text-center">Auto Details</h1>

    <!-- Dropdown filter -->
    <div class="mb-6 flex justify-center">
      <select
        v-model="gekozenMerk"
        class="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Alle merken</option>
        <option
          v-for="merk in uniekeMerken"
          :key="merk"
          :value="merk"
        >
          {{ merk }}
        </option>
      </select>
    </div>

    <div v-if="gefilterdeAutos.length === 0" class="text-center text-gray-500">
      <p>Geen auto's gevonden.</p>
    </div>

    <div v-else class="flex flex-wrap justify-center gap-6">
      <div
        v-for="auto in gefilterdeAutos"
        :key="auto.id"
        class="border border-gray-300 rounded-lg p-4 w-full sm:w-72 shadow hover:shadow-lg transition-shadow"
      >
        <h2 class="text-xl font-semibold mb-3">
          {{ auto.merk }} {{ auto.model }} ({{ auto.bouwjaar }})
        </h2>

        <img
          v-if="auto.foto"
          :src="require(`@/assets/${auto.foto}`)"
          :alt="`Foto van ${auto.merk} ${auto.model}`"
          class="w-full h-48 object-cover rounded-md mb-4"
        />
        <img
          v-else
          src="/images/cars/default.jpg"
          alt="Geen afbeelding beschikbaar"
          class="w-full h-48 object-cover rounded-md mb-4"
        />

        <p><strong>Kenteken:</strong> {{ auto.kenteken || 'Niet bekend' }}</p>
        <p><strong>Brandstof:</strong> {{ auto.brandstof }}</p>
        <p><strong>Transmissie:</strong> {{ auto.transmissie }}</p>
        <p><strong>Kleur:</strong> {{ auto.kleur }}</p>
        <p><strong>Zitplaatsen:</strong> {{ auto.zitplaatsen }}</p>
        <p><strong>Beschikbaar:</strong> {{ auto.beschikbaar ? 'Ja' : 'Nee' }}</p>
        <p><strong>Dagprijs:</strong> <span class="text-green-600 font-semibold">€{{ auto.dagprijs }}</span></p>
        <p><strong>Beschrijving:</strong> {{ auto.beschrijving || 'Geen beschrijving' }}</p>
        <button
          class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out"
        >
          Auto Huren
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AutoDetails',
  data() {
    return {
      autos: [],
      gekozenMerk: '', // Houdt het geselecteerde merk bij
      error: null,
    };
  },
  computed: {
    // Unieke merken uit autos ophalen
    uniekeMerken() {
      const merken = this.autos.map(auto => auto.merk);
      return [...new Set(merken)].sort();
    },
    // Autos filteren op gekozen merk
    gefilterdeAutos() {
      if (!this.gekozenMerk) {
        return this.autos;
      }
      return this.autos.filter(auto => auto.merk === this.gekozenMerk);
    },
  },
  mounted() {
    this.haalAutosOp();
  },
  methods: {
    async haalAutosOp() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cars');
        this.autos = response.data;
      } catch (error) {
        this.error = 'Kon de autos niet ophalen.';
        console.error(error);
      }
    },
  },
};
</script>
