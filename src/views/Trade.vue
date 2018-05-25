<template>
  <section class="trade">
    <trade-line> </trade-line>
  </section>
</template>

<script>
// @ is an alias to /src
import TradeLine from "@/components/TradeLine.vue";

export default {
  name: "trade",
  components: {
    TradeLine
  }
};
</script>
