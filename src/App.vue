<template>
  <router-view></router-view>
</template>

<style lang="scss">

@import '@/assets/_variables.scss';
@include yugiohFont();
@include latoFont();

*{
  font-family: 'yugioh', 'Lato', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  scroll-behavior: smooth !important;
}

</style>
