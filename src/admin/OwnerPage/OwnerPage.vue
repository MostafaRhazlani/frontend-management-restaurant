<template>
    <div>
      <h1>Dachboard</h1>
    </div>
</template>
<script>
  import axios from 'axios';
  export default {

    async created() {
      const response = await axios.get('user');

    },
  }
</script>