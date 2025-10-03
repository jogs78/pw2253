<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<nav>
  <ul class="menu">
    <li><RouterLink to="/">Inicio </RouterLink></li>
    <li><RouterLink to="/vif">Mostrar si...</RouterLink></li>
    <li><RouterLink to="/vfor">Paises</RouterLink></li>
    <li><RouterLink to="/filtrados">Filtrados</RouterLink></li>
  </ul>
</nav>
<br>
<RouterView />
</template>
<style scoped>
.menu {
  display: flex;
  list-style: none;
  padding: 0;
  /* ✨ Esto separa automáticamente los elementos */
  gap: 20px; 
}
</style>
