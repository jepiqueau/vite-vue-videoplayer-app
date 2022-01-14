import { Capacitor } from '@capacitor/core';
import {CapacitorVideoPlayer} from 'capacitor-video-player'

export function useVideoplayer({onPlay, onPause, onEnded, onExit, onReady}) {
    const videoPlayer = CapacitorVideoPlayer
    const platform = Capacitor.getPlatform()
    // add Listeners
    let hdPlay = null
    let hdPause = null
    let hdEnded = null
    let hdExit = null
    let hdReady = null
        if (onPlay) hdPlay = 
            videoPlayer.addListener('jeepCapVideoPlayerPlay',
            (e) => {
                onPlay(e.fromPlayerId, e.currentTime)
            });
        if (onPause) hdPause =
            videoPlayer.addListener('jeepCapVideoPlayerPause',
            (e) => {
                onPause(e.fromPlayerId, e.currentTime)
            });
        if (onEnded) hdEnded =
            videoPlayer.addListener('jeepCapVideoPlayerEnded',
            (e) => {
                onEnded(e.fromPlayerId, e.currentTime)
            });
        if (onExit) hdExit =
            videoPlayer.addListener('jeepCapVideoPlayerExit',
            (e) => {
                onExit(e.dismiss)
            });
        if (onReady) hdReady = 
            videoPlayer.addListener('jeepCapVideoPlayerReady',
            (e) => {
                onReady(e.fromPlayerId, e.currentTime)
            });

    const removeListeners = async () => {
        if(hdPlay != null) hdPlay.remove()
        if(hdPause != null) hdPause.remove()
        if(hdEnded != null) hdEnded.remove()
        if(hdExit != null) hdExit.remove()
        if(hdReady != null) hdReady.remove()
    };
    /**
     * Get Platform
     */
    const getPlatform = async () => {
        return {platform: platform}
    };
    /**
     * Echo value
     * @param value 
     */
    const echo = async (value) => {
        const ret = {value: ""}
        if(value) {
            const r = await videoPlayer.echo(value)
            if(r) {
                return r
            }
            return ret    
        } else {
            ret.value = "Echo: failed"
            return ret
        }
    }
    /**
     * Method initPlayer
     * @param {*} mode 
     * @param {*} url 
     * @param {*} playerId 
     * @param {*} componentTag 
     * @returns 
     */ 
    const initPlayer = async (mode, url, playerId, componentTag) => {
        const r = await videoPlayer.initPlayer({mode: mode, url: url,
                                                playerId: playerId,
                                                componentTag: componentTag})
        if(r) {
            return r
        }
        return {result: false, method: "initPlayer", 
                message: "initPlayer failed"}
    } 
    /**
     * Method isPlaying 
     * @param {*} playerId
     */
    const isPlaying = async (playerId) => {
        const r = await videoPlayer.isPlaying({ playerId:playerId })
        if (r) {
            return r
        }
        return { result: false, method: "isPlaying",
            message: "isPlaying failed" }
    }
    /**
     * Method pause
     * @param {*} playerId 
     * @returns 
     */
    const pause = async (playerId) => {
        const r = await videoPlayer.pause({ playerId: playerId })
        if (r) {
            return r
        }
        return { result: false, method: "pause",
            message: "pause failed" }
    }
    /**
     * Method play
     * @param {*} playerId 
     * @returns 
     */  
    const play = async (playerId) => {
        const r = await videoPlayer.play({ playerId: playerId })
        if (r) {
            return r
        }
        return { result: false, method: "play",
            message: "play failed" }
    }
    /**
     * Method getDuration
     * @param {*} playerId 
     * @returns 
     */ 
    const getDuration = async (playerId) => {
        const r = await videoPlayer.getDuration({ 
            playerId: playerId })
        if (r) {
            return r
        }
        return { result: false, method: "getDuration",
            message: "getDuration failed" }

    }
    /**
     * Method setVolume
     * @param {*} playerId 
     * @param {*} volume 
     * @returns 
     */
    const setVolume = async (playerId, volume) => {
        const r = await videoPlayer.setVolume({ playerId: playerId,
                        volume: volume })
        if (r) {
            return r
        }
        return { result: false, method: "setVolume",
            message: "setVolume failed" }

    }
    /**
     * Method getVolume
     * @param {*} playerId 
     * @returns 
     */ 
    const getVolume = async (playerId) => {
        const r = await videoPlayer.getVolume({ 
                playerId: playerId })
        if (r) {
            return r
        }
    return { result: false, method: "getVolume",
        message: "getVolume failed" }
    } 
    /**
     * Method setMuted
     * @param {*} playerId 
     * @param {*} muted 
     * @returns 
     */
    const setMuted = async (playerId, muted) => {
        const r = await videoPlayer.setMuted({ 
                playerId: playerId, muted: muted })
        if (r) {
            return r
        }
        return { result: false, method: "setMuted",
            message: "setMuted failed" }
    }
    /**
     * Method getMuted
     * @param {*} playerId 
     * @returns 
     */ 
    const getMuted = async (playerId) => {
        const r = await videoPlayer.getMuted({ playerId: playerId })
        if (r) {
            return r
        }
        return { result: false, method: "getMuted",
            message: "getMuted failed" }
    }
    /**
     * Method setCurrentTime
     * @param {*} playerId 
     * @param {*} seektime 
     * @returns 
     */ 
    const setCurrentTime = async (playerId, seektime) => {
        const r = await videoPlayer.setCurrentTime({ 
            playerId: playerId, seektime: seektime })
        if (r) {
            return r
        }
        return { result: false, method: "setCurrentTime",
            message: "setCurrentTime failed" }
    }
    /**
     * Method getCurrentTime
     * @param {*} playerId 
     * @returns 
     */ 
    const getCurrentTime = async (playerId) => {
        const r = await videoPlayer.getCurrentTime({ 
            playerId: playerId })
        if (r) {
            return r
        }
        return { result: false, method: "getCurrentTime",
            message: "getCurrentTime failed" }
    }
    /**
     * Method stopAllPlayers
     * @returns 
     */
    const stopAllPlayers = async () => {
        const r = await videoPlayer.stopAllPlayers()
        if (r) {
            return r
        }
        return { result: false, method: "stopAllPlayers",
            message: "stopAllPlayers failed" }
    }
                              
    return {removeListeners, getPlatform, echo, initPlayer, isPlaying, pause,
            play, getDuration, setVolume, getVolume, setMuted, getMuted,
            setCurrentTime, getCurrentTime, stopAllPlayers}
}
