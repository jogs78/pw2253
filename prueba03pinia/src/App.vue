<template>
  <div>
    <p>Contador: {{ counter.count }}</p>
    <button @click="counter.increment">++</button>
    <button @click="counter.decrement">--</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>