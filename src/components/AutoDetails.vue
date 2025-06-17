<template>
  <div class="p-5">
    <h2 class="text-3xl font-bold mb-6 text-center">Auto Details</h2>

    <!-- Zoekbalk en Sorteeropties -->
    <div class="mb-6 flex justify-center gap-4 flex-wrap">
      <input v-model="zoekterm" type="text" placeholder="Zoek op merk of model..."
        class="w-full max-w-xs sm:max-w-sm md:max-w-md px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150"
        aria-label="Zoek op merk of model" />

      <label for="sorteren" class="sr-only">Sorteer op prijs</label>
      <select id="sorteren" v-model="sortering"
        class="px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-150"
        aria-label="Sorteer auto’s op prijs">
        <option value="geen">Sorteer op</option>
        <option value="laag-hoog">Prijs: laag naar hoog</option>
        <option value="hoog-laag">Prijs: hoog naar laag</option>
      </select>
    </div>

    <!-- Meldingen als geen auto's gevonden -->
    <div v-if="gefilterdeAutos.length === 0" class="text-center text-gray-500">
      <p>Geen auto's gevonden.</p>
    </div>

    <!-- Auto kaarten -->
    <div v-else class="flex flex-wrap justify-center gap-8">
      <div v-for="(auto) in gefilterdeAutos" :key="auto.id"
        class="border border-gray-200 rounded-2xl p-5 w-full sm:w-80 bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
        <h2 class="text-xl font-semibold mb-3 text-center">
          {{ auto.merk }} {{ auto.model }} ({{ auto.bouwjaar }})
        </h2>
        <img v-if="auto.foto" :src="`/images/cars/mobile/${auto.foto}`" :srcset="`
    /images/cars/mobile/${auto.foto} 480w,
    /images/cars/tablet/${auto.foto} 768w,
    /images/cars/desktop/${auto.foto} 1200w
  `" sizes="(max-width: 640px) 480px,
         (max-width: 1024px) 768px,
         1200px" :alt="`Foto van ${auto.merk} ${auto.model}`" :title="`Foto van ${auto.merk} ${auto.model}`"
          class="w-full h-52 object-cover rounded-lg mb-4" loading="lazy" width="320" height="208" />

        <div class="space-y-1 text-sm text-gray-700">
          <p><strong>Kenteken:</strong> {{ auto.kenteken || 'Niet bekend' }}</p>
          <p><strong>Brandstof:</strong> {{ auto.brandstof }}</p>
          <p><strong>Transmissie:</strong> {{ auto.transmissie }}</p>
          <p><strong>Kleur:</strong> {{ auto.kleur }}</p>
          <p><strong>Zitplaatsen:</strong> {{ auto.zitplaatsen }}</p>
          <p><strong>Beschikbaar:</strong> {{ auto.beschikbaar ? 'Ja' : 'Nee' }}</p>
          <p><strong>Dagprijs:</strong> <span class="text-green-600 font-semibold">€{{ auto.dagprijs }}</span></p>
          <p><strong>Beschrijving:</strong> {{ auto.beschrijving || 'Geen beschrijving' }}</p>
        </div>
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
      zoekterm: '',
      sortering: 'geen',
    };
  },
  computed: {
    gefilterdeAutos() {
      const zoekwoorden = this.zoekterm
        .toLowerCase()
        .split(' ')
        .filter((woord) => woord.trim() !== '');

      let resultaat = this.autos.filter((auto) => {
        return zoekwoorden.every((woord) => {
          return (
            auto.merk.toLowerCase().includes(woord) ||
            auto.model.toLowerCase().includes(woord)
          );
        });
      });

      if (this.sortering === 'laag-hoog') {
        resultaat.sort((a, b) => a.dagprijs - b.dagprijs);
      } else if (this.sortering === 'hoog-laag') {
        resultaat.sort((a, b) => b.dagprijs - a.dagprijs);
      }

      return resultaat;
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
        this.StructuredData();
      } catch (error) {
        console.error('Kon de autos niet ophalen.', error);
      }
    },
    StructuredData() {
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": this.autos.map((auto, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Vehicle",
            "name": `${auto.merk} ${auto.model}`,
            "vehicleModelDate": auto.bouwjaar,
            "vehicleTransmission": auto.transmissie,
            "vehicleEngine": {
              "@type": "EngineSpecification",
              "fuelType": auto.brandstof
            },
            "color": auto.kleur,
            "seatingCapacity": auto.zitplaatsen,
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": auto.dagprijs,
              "availability": auto.beschikbaar ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
            },
            "image": auto.foto ? `https://startmobil.nl/images/${auto.foto}` : undefined,
            "description": auto.beschrijving || ''
          }
        }))
      };

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }
};
</script>
