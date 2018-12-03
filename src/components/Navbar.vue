<template>
  <b-navbar id="navbar" sticky="true" toggleable="md" type="light" variant="light">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/about">Jose Naranjo</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/projects">Projects</b-nav-item>
      <b-nav-item to="/blog">Blog</b-nav-item>
      <b-nav-item to="/contact">Contact</b-nav-item>
    </b-navbar-nav>

  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  #navbar {
    margin-bottom: 30px;
    font-weight: 500;
  }
</style>