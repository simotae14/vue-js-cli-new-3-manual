<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="https://fakeimg.pl/250x200/66ff66/?text=Hello" height="200px"></v-img>

        <v-card-title primary-title>
          <div>
            <div class="headline">{{ title }}</div>
            <span class="grey--text">{{ description }}</span>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat>Go somewhere</v-btn>
          <button @click="resetProp()">reset FUNCTION</button>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {};
  },
  methods: {
    ciao() {
      return this.title.toUpperCase();
    }
  },
  props: {
    resetProp: Function,
    title: {
      type: Object,
      required: true,
      default: function() {
        this.$emit("eventoDiReset", this.title);
        return {
          red: 232,
          green: 123,
          blue: 123
        };
      }
    },
    methods: {
      resetF() {
        this.colore = "Bianco";
      }
    },
    description: String
  }
};
</script>

<style scoped>
div {
  border: 1px solid black;
}
</style>
