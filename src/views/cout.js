/* eslint-disable */
import {
  value,
  computed,
  watch,
  onMounted
} from "vue-function-api";

// 后端分页逻辑
function useCout() {
  // reactive state
  const count = value(0);
  // computed state
  const plusOne = computed(() => count.value + 1);
  // method
  const increment = () => {
    count.value++;
  };
  // watch
  watch(
    () => count.value * 2,
    val => {
      console.log(`count * 2 is ${val}`);
    }
  );
  // lifecycle
  onMounted(() => {
    console.log(`mounted`);
  });
  return {
    count,
    plusOne,
    increment
  };
}

export default useCout