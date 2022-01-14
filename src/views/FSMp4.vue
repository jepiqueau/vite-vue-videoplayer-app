<template>
  <h1>Fullscreen mp4 video</h1>
  <FullscreenPlayer @on-play="play" @on-pause="pause" @on-ready="ready"
    @on-ended="ended" @on-exit="exit" 
    url="https://brenopolanski.github.io/html5-video-webvtt-example/MIB2.mp4">
  </FullscreenPlayer>
</template>

<script>
import router from '../router'
import FullscreenPlayer from '../components/FullscreenPlayer.vue';
export default {
  name: 'FSMp4',
  components: { FullscreenPlayer },
  setup() {
    const play = async (data) => {
        console.log(`<<<< play in FSMp4.vue ${JSON.stringify(data)}`)
    }
    const pause = async (data) => {
        console.log(`<<<< pause in FSMp4.vue ${JSON.stringify(data)}`)
    }
    const ended = async (data) => {
        console.log(`<<<< ended in FSMp4.vue ${JSON.stringify(data)}`)
        router.push({ name: 'Home' })
    }
    const exit = async (data) => {
        console.log(`<<<< exit in FSMp4.vue ${JSON.stringify(data)}`)
        router.push({ name: 'Home' })
    }
    const ready = async (data) => {
        console.log(`<<<< ready in FSMp4.vue ${JSON.stringify(data)}`)
    }
    return {play, pause, ended, exit, ready}
     
  }
};
</script>

<style>
h1 {
    text-align: center;
}
</style>