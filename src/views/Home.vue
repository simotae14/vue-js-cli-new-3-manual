<template>
  <div class="home">
    <div class="container">
      <CardComponent
        :title="title"
        :resetProp="resetF"
        @eventoDiReset="title = $event"
        description="description description description"
      ></CardComponent>
    </div>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import MyFirst from "../components/MyFirst";
import CardComponent from "../components/CardComponent";

export default {
  data() {
    return {
      title: "Titolo Card"
    };
  },
  components: {
    HelloWorld,
    CardComponent
  }
};
</script>
