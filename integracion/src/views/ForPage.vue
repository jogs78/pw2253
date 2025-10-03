<script setup>
import { ref, onMounted } from 'vue';

// 1. Crear la variable reactiva para almacenar los países
// Inicializamos como un array vacío. Usamos 'ref' para que Vue reaccione a los cambios.
const paises = ref([]); 

// 2. Definir la URL de la API
// Especificamos solo los campos 'name' (nombre) y 'flags' (banderas) para optimizar.
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,flags';

// 3. Función para cargar los datos al montar el componente
onMounted(async () => {
    try {
        // Realizar la petición HTTP con 'fetch'
        const response = await fetch(API_URL);

        // Verificar si la petición fue exitosa (código de estado 200)
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Convertir la respuesta a formato JSON
        const data = await response.json();

        // 4. Asignar los datos al arreglo reactivo 'paises'
        paises.value = data;
        
        console.log('Países cargados:', paises.value.length);
        
    } catch (error) {
        console.error('Fallo al cargar los países:', error);
        // Puedes añadir aquí lógica para manejar el error en la UI si es necesario
    }
});
</script>

<template>
    <div>
        <h1>Lista de Países 🌍</h1>
        <p v-if="paises.length === 0">Cargando países...</p>
        
        <ul v-else>
            <li v-for="pais in paises" :key="pais.name.common">
                <img :src="pais.flags.svg" :alt="`Bandera de ${pais.name.common}`" style="width: 20px; margin-right: 10px;">
                {{ pais.name.common }}
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Estilos opcionales */
ul {
    list-style: none;
    padding: 0;
}
li {
    margin: 5px 0;
    display: flex;
    align-items: center;
}
</style>