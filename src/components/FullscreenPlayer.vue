<template>
  <div id="fullscreen">
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue"
import {useVideoplayer} from '../composables/videoplayer'

export default defineComponent({
  name: 'FullscreenPlayer',
  props: ['url'],
  emits: ['onPlay', 'onPause', 'onEnded', 'onExit', 'onReady'],
  setup(props, {emit}) {
    let onPlay = async (fromPlayerId, currentTime) => {
        const data = {fromPlayerId: fromPlayerId, currentTime: currentTime}
        emit('onPlay',data)
    }
    let onPause = async (fromPlayerId, currentTime) => {
        const data = {fromPlayerId: fromPlayerId, currentTime: currentTime}
        emit('onPause',data)
    }
    let onEnded = async (fromPlayerId, currentTime) => {
        const data = {fromPlayerId: fromPlayerId, currentTime: currentTime}
        emit('onEnded',data)
        await playerLeave()
    }
    let onExit = async (dismiss) => {
        const data = {dismiss: dismiss}
        emit('onExit',data)
        await playerLeave()
    }
    let onReady = async (fromPlayerId, currentTime) => {
        const data = {fromPlayerId: fromPlayerId, currentTime: currentTime}
        emit('onReady', data)
    }

    const { getPlatform, echo, initPlayer, removeListeners,
            isPlaying, pause, play, getDuration, setVolume, getVolume,
            setMuted, getMuted, setCurrentTime, getCurrentTime,
            stopAllPlayers} = useVideoplayer({onPlay, onPause, onEnded,
                                              onExit, onReady})

    const playerLeave = async () => {
        await stopAllPlayers()
        await removeListeners()                 
    }
    const playVideo = async () => {
        const platform = await getPlatform()
        const value = await echo("Hello from Jeep")
        const ret = await initPlayer("fullscreen",props.url,"fullscreen","div")
    }

    onMounted(async () => {
        await playVideo()
    })
    return 
  },
}) 
</script>

