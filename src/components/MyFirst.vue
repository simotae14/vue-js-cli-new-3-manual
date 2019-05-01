<template>
  <div>
    <h1>My First Component</h1>
    <h1>{{ myVar }}</h1>
    <button @click="myVar='yellow'">Change</button>
  </div>
</template>
<script>
export default {
  name: "MyFirst",
  data() {
    return {
      myVar: "red"
    };
  }
};
</script>