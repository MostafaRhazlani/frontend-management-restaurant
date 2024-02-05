<template >
  <h1>My Restaurant</h1>
</template>
<script>
import axios from 'axios';
export default {
  
  async created() {
    const response = await axios.get('user');

    console.log(response);
  },
}
</script>