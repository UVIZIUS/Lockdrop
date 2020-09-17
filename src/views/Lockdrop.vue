<template>
    <div>
        <hero></hero>
        <lockdrop></lockdrop>
        <locked></locked>
        <EthAccounts></EthAccounts>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import Lockdrop from "./components/EthLockdrop.vue";
import Locked from "./components/Locked.vue";
import EthAccounts from "./components/EthAccounts.vue"

export default {
  name: "components",
  components: {
    Hero, Lockdrop, Locked, EthAccounts
  }
  
};
</script>
