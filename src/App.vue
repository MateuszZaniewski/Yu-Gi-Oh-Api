<template>
  <router-view></router-view>
</template>

<style lang="scss">

@import '@/assets/_variables.scss';
@include yugiohFont();

*{
  font-family: 'yugioh', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth !important;
}

</style>
