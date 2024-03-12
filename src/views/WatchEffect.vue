<template>watchEffect</template>

<script setup lang="ts">
import { ref, reactive, watch, watchEffect, onMounted } from "vue";

// watch、watchEffect的执行顺序为注册顺序 即谁先注册触发更新时就先调用谁
const objRef = ref({ a: 1 });
watch(objRef.value, (newVal, oldVal) => {
  console.log("watch objRef.value ref", newVal, oldVal);
});
watch(
  () => objRef.value.a,
  (newVal, oldVal) => {
    console.log("watch objRef.value.a ref", newVal, oldVal);
  }
);
watchEffect(() => {
  console.log("watchEffect objRef.value.a ref", objRef.value.a);
});

const objReactive = reactive({ a: 1 });
watch(objReactive, (newVal, oldVal) => {
  console.log("watch objReactive reactive", newVal, oldVal);
});
watch(
  () => objReactive.a,
  (newVal, oldVal) => {
    console.log("watch objReactive.a reactive", newVal, oldVal);
  }
);
watchEffect(() => {
  console.log("watchEffect objReactive.a reactive", objReactive.a);
});

onMounted(() => {
  objRef.value.a = 2;
  objReactive.a = 2;
});

function merge<T extends object, U extends object>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const m = merge({ a: 1 }, { b: 2, c: 3 });

function pick<T extends object, U extends keyof T, K>(
  obj: T,
  keys: U[]
): { [K in U]: T[K] } {
  const temp: any = {};

  for (const key of keys) {
    temp[key] = obj[key];
  }

  return temp;
}
const p = pick({ a: 1, b: 2, c: "c" }, ["a", "b", "c"]);
</script>
