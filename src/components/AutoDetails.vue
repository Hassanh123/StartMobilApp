<template>
  <div class="bg-white max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-lg shadow-sm scroll-auto">
    <h1 class="text-3xl font-bold mb-8 text-center text-gray-800">Auto Details</h1>

    <!-- Zoekbalk -->
    <div class="mb-6 flex justify-center">
      <input
        v-model="zoekterm"
        type="text"
        placeholder="Zoek op merk of model..."
        class="w-full max-w-xs sm:max-w-sm md:max-w-md px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150"
        aria-label="Zoek op merk of model"
      />
    </div>

    <section v-if="gefilterdeAutos.length === 0" class="text-center text-gray-500" aria-label="Geen auto's">
      <p>Geen auto's gevonden.</p>
    </section>

    <section
      v-else
      class="flex flex-wrap justify-center gap-6"
      aria-label="Lijst van beschikbare auto's"
    >
      <article
        v-for="auto in gefilterdeAutos"
        :key="auto.id"
        class="border border-gray-200 rounded-lg p-4 w-full sm:w-72 bg-gray-50 hover:bg-white transition-all duration-200 shadow hover:shadow-md flex flex-col"
        :aria-label="`Details van ${auto.merk} ${auto.model}`"
      >
        <h3 class="text-xl font-semibold mb-3 text-gray-700">
          {{ auto.merk }} {{ auto.model }} ({{ auto.bouwjaar }})
        </h3>

        <img
          v-if="auto.foto"
          :src="`/images/${auto.foto}`"
          :alt="`Foto van ${auto.merk} ${auto.model}, bouwjaar ${auto.bouwjaar}`"
          class="w-full h-48 object-cover rounded-md mb-4"
          loading="lazy"
        />

        <img
          v-else
          src="/images/cars/default.webp"
          alt="Geen afbeelding beschikbaar voor deze auto"
          class="w-full h-48 object-cover rounded-md mb-4"
          loading="lazy"
        />

        <div class="space-y-1 text-sm text-gray-600 flex-grow">
          <p><strong>Kenteken:</strong> {{ auto.kenteken || 'Niet bekend' }}</p>
          <p><strong>Brandstof:</strong> {{ auto.brandstof }}</p>
          <p><strong>Transmissie:</strong> {{ auto.transmissie }}</p>
          <p><strong>Kleur:</strong> {{ auto.kleur }}</p>
          <p><strong>Zitplaatsen:</strong> {{ auto.zitplaatsen }}</p>
          <p><strong>Beschikbaar:</strong> {{ auto.beschikbaar ? 'Ja' : 'Nee' }}</p>
          <p>
            <strong>Dagprijs:</strong>
            <span class="text-green-600 font-semibold">€{{ auto.dagprijs }}</span>
          </p>
          <p><strong>Beschrijving:</strong> {{ auto.beschrijving || 'Geen beschrijving' }}</p>
        </div>

        <!-- Huurknop -->
        <button
          :disabled="!auto.beschikbaar"
          @click="huurAuto(auto)"
          class="mt-4 w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          :aria-disabled="!auto.beschikbaar"
          :aria-label="auto.beschikbaar ? `Auto huren: ${auto.merk} ${auto.model}` : `Auto niet beschikbaar om te huren`"
        >
          {{ auto.beschikbaar ? 'Auto huren' : 'Niet beschikbaar' }}
        </button>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AutoDetails',
  data() {
    return {
      autos: [],
      zoekterm: '',
      error: null,
    };
  },
  computed: {
    gefilterdeAutos() {
      const zoek = this.zoekterm.trim().toLowerCase();
      if (!zoek) return this.autos;

      return this.autos.filter((auto) =>
        `${auto.merk} ${auto.model}`.toLowerCase().includes(zoek)
      );
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
    huurAuto(auto) {
      if (!auto.beschikbaar) return;
      // Hier kun je de logica plaatsen om een auto te huren, bijv. navigeren naar een bestelpagina of modaal openen
      alert(`Je hebt gekozen om de ${auto.merk} ${auto.model} te huren.`);
    },
  },
};
</script>
