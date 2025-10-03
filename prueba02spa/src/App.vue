<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
<nav>
<RouterLink to="/">Inicio </RouterLink>
<RouterLink to="/ejemplo">Ejemplo </RouterLink>
<RouterLink to="/acerca">Acerca </RouterLink>
</nav>
<br>
<RouterView />
</template>
