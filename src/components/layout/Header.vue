<template>
  <div id="greeting">
    게시판
    <br />
    ID:{{ user }}
  </div>
</template>
 
<script>
export default {
  name: "Header",
  data() {
    return { user: "yj"}
  }
}
 
</script>
 
<style scoped>
 
</style>