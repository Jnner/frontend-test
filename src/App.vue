<template>
<div id="app">
  <nav class="mb-1 navbar navbar-expand-lg navbar-dark secondary-color lighten-1">
    <a class="navbar-brand" href="#/" @click="vistaActiva(0)">Frontend Test</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-5" aria-controls="navbarSupportedContent-5" aria-expanded="false" aria-label="Toggle navigation" style="margin-right: 12px;">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent-5">
        <ul class="navbar-nav ml-auto nav-flex-icons">
            <li class="nav-item avatar dropdown">
                <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink-5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    <i class="fa fa-user-circle fa-2x" aria-hidden="true"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right dropdown-secondary" aria-labelledby="navbarDropdownMenuLink-5">
                    <a class="dropdown-item waves-effect waves-light" href="#"><i class="fa fa-user ml-1"></i> Perfil</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item waves-effect waves-light" href="#"><i class="fa fa-sign-out ml-1"></i> Salir</a>
                </div>
            </li>
        </ul>
    </div>
  </nav>
  <div>
    <router-view></router-view>
  </div>
  <footer>
    <div>prueba de frontend test</div>
  </footer>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
html
  height: 100%
body
  position: relative
  min-height: 100%
  padding-bottom: 10em
  background-color: #D3E9E5
footer
  position: absolute
  right: 0
  bottom: 0
  left: 0
  padding: 20px 40px
  text-align: right
  color: #B2B2B2
  background-color: #F6F6F6 !important
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
table.table
  th
    vertical-align: middle
  td, th
    border-top: none
  input
    text-align: center
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50
  .titulo
    margin: 50px 0
    text-align: center
  .navbar-brand
    color: #100840 !important
.uppercase
  text-transform: uppercase
.capitalize
  text-transform: capitalize
.text-center
  text-align: center
.bold
  font-weight: bold
</style>
