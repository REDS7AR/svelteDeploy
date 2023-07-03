<script>
  import Header from '$section/Header.svelte';
  import Footer from '$section/Footer.svelte';
  import "../app.scss";
</script>

<div class="wrapper">

<Header/>

<slot />
<main class="main"></main>
<Footer/>

</div>

<style lang="scss">

.wrapper{
   @include wrapper;
}

.main{
  flex: 1 1 auto;
}

</style>
