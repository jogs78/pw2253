<script setup>
import { ref, onMounted, computed } from 'vue';

// 1. Variable reactiva con todos los países
const paises = ref([]);

// 2. Continente seleccionado
const continente = ref("");

// 3. URL de la API (agregamos también la región)
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags,region';

// 4. Cargar países al montar
onMounted(async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        paises.value = await response.json();
    } catch (error) {
        console.error("Fallo al cargar los países:", error);
    }
});

// 5. Computed: lista filtrada
const paisesFiltrados = computed(() => {
    if (!continente.value) return paises.value; // Si no se elige nada, mostrar todos
    return paises.value.filter(p => p.region === continente.value);
});
</script>

<template>
  <div>
    <h1>Lista de Países 🌍</h1>

    <!-- Selector de continente -->
    <label for="continente">Filtrar por continente:</label>
    <select id="continente" v-model="continente">
      <option value="">Todos</option>
      <option value="Africa">África</option>
      <option value="Americas">América</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceanía</option>
      <option value="Antarctic">Antártida</option>
    </select>

    <!-- Lista de países -->
    <p v-if="paisesFiltrados.length === 0">Cargando países...</p>

    <ul v-else>
      <li v-for="pais in paisesFiltrados" :key="pais.name.common">
        <img :src="pais.flags.svg" 
             :alt="`Bandera de ${pais.name.common}`" 
             style="width: 20px; margin-right: 10px;">
        {{ pais.name.common }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  margin: 5px 0;
  display: flex;
  align-items: center;
}
select {
  margin-bottom: 10px;
  padding: 5px;
}
</style>
