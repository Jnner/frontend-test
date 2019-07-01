<template>
<div class="home">
  <div class="navegador">
    <div class="nav-left">
      <a href="/">
        <span>
          <svg class="svg" width="20" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M10 15c0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5 0 2.761-2.239 5-5 5-2.761 0-5-2.238-5-5z" fill-rule="nonzero" fill-opacity="1" fill="#1abcfe" stroke="none"></path><path d="M0 25c0-2.761 2.239-5 5-5h5v5c0 2.761-2.239 5-5 5-2.761 0-5-2.239-5-5z" fill-rule="nonzero" fill-opacity="1" fill="#0acf83" stroke="none"></path><path d="M10 0v10h5c2.761 0 5-2.239 5-5 0-2.761-2.239-5-5-5h-5z" fill-rule="nonzero" fill-opacity="1" fill="#ff7262" stroke="none"></path><path d="M0 5c0 2.761 2.239 5 5 5h5V0H5C2.239 0 0 2.239 0 5z" fill-rule="nonzero" fill-opacity="1" fill="#f24e1e" stroke="none"></path><path d="M0 15c0 2.761 2.239 5 5 5h5V10H5c-2.761 0-5 2.239-5 5z" fill-rule="nonzero" fill-opacity="1" fill="#a259ff" stroke="none"></path></svg>
        </span>
      </a>
      Welcome to Figma! Log in or create an account to collaborate on this file.
    </div>
    <div class="nav-right">
      <a class="basic_form--link--11HI0 blue_link--blueLink--22X56 footer_banner--smallLink--f6Vu1" rel="noopener">Log In</a>
      <button class="basic_form--greenBtn--1opZg basic_form--btn--3A-Ju ellipsis--ellipsis--1RWY6 footer_banner--clickable--2cCnD">Sign Up</button>
    </div>
  </div>

  <div class="contenido">
    <div v-for="i in 3" :key="i" :class="`columna-${i}`">
      <h4>Valoraciones del producto</h4>
      <p>Aquí puedes consultar las últimas valoraciones que los usuarios han hecho sobre esete producto</p>
      <div v-for="j in datos" :key="j.id" class="tarjetas">
        <div>
          <i v-for="y in j.rating" :key="y" class="fa fa-star"></i> {{ j.rating }}
        </div>
        <div class="fecha">{{ j.date }}</div>
        <div class="comentario">{{ j.comment }}</div>
        <div class="botones"><button id="`util-${i}-${j}`" :class="j.disable ? j.disable : 'green darken-1'" @click="setUtil(j.id)"><i class="fa fa-thumbs-up"></i> {{ j.disable ? 'Gracias' : 'Es útil' }}</button> {{ j.useful_count }} personas creen que es útil </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    datos () { return this.$store.state.datos }
  },
  methods: {
    setUtil (id) {
      this.$store.dispatch('updateUtil', id)
    }
  }
}
</script>

<style lang="sass" scoped>
=comun
  margin-top: 30px
  background-color: #fff
  border-radius: 5px
  box-shadow: 3px 3px 10px grey

=columns($colums)
  @for $i from 1 through $colums
    .columna-#{$i}
      width: $i * 250px
      min-height: 1000px
      float: left;
      padding: 10px
      margin-left: 70px
      +comun
      .tarjetas
        border: 1px solid #E1E1E1
        border-radius: 5px
        margin-bottom: 5px
        padding: 10px
        div > i
          color: #ffc107
        .fecha
          margin: 10px 0
          font-size: 12px
        .botones
          margin: 10px 0
          button
            padding: 5px 10px
            border: 0
            border-radius: 5px
            color: #fff
            font-size: 12px
            cursor: pointer

=block($inline)
  @if $inline != 0
    display: inline-block

.navegador
  width: 50%
  height: 90px
  margin-left: 20%
  +comun
  +block(1)
  .nav-left
    svg
      margin-top: 20px
      margin-left: 20px
  .nav-right
    margin-left: 45%
    +block(1)

.contenido
  margin: 30px
  overflow: hidden;
  +columns(3)

</style>
