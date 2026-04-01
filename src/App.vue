<script setup lang="ts">
import type { HelloDomain } from './domain/hello.domain'
import { withLineage } from '@manifesto-ai/lineage'
import { createManifesto } from '@manifesto-ai/sdk'
import { ref } from 'vue'
import HelloMel from './domain/hello.mel'

const { subscribe, MEL, dispatchAsync, createIntent } = withLineage(
  createManifesto<HelloDomain>(HelloMel, {}),
  {},
).activate()

const counter = ref(0)
const doubled = ref(0)
const canDecrement = ref(false)

subscribe(snapshot => snapshot.data.counter, value => counter.value = value)
subscribe(snapshot => snapshot.computed.doubled, value => doubled.value = (value as number))
subscribe(snapshot => snapshot.computed.canDecrement, value => canDecrement.value = (value as boolean))

function increment() {
  dispatchAsync(createIntent(MEL.actions.increment))
}

function decrement() {
  dispatchAsync(createIntent(MEL.actions.decrement))
}
</script>

<template>
  <div>
    <h1>
      Hello Mel Counter
    </h1>

    <p>
      <button @click="increment">
        +
      </button>
    </p>

    <p>
      Counter: {{ counter }}
    </p>

    <p>
      Doubled: {{ doubled }}
    </p>

    <p>
      <button :disabled="!canDecrement" @click="decrement">
        -
      </button>
    </p>
  </div>
</template>
