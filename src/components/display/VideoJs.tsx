import { useRef, useEffect, useState, memo } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

import hlsQualitySelector from "videojs-hls-quality-selector";
videojs.registerPlugin("hlsQualitySelector", hlsQualitySelector);

import 'videojs-contrib-quality-levels'
import 'videojs-hls-quality-selector'
import 'videojs-hotkeys'

interface VideoJsProps {
  id: string
  onReady?: (player: videojs.Player) => void
}

export const VideoJs: React.FC<VideoJsProps> = memo(({ onReady, id }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [player, setPlayer] = useState<videojs.Player>()

  useEffect(() => {
    if (!player) {
      const videoElement = videoRef.current
      if (!videoElement) return

      const videoJsOptions: videojs.PlayerOptions = {
        autoplay: false,
        controls: true,
        responsive: true,
        fluid: true,
        playbackRates: [1, 1.2, 1.5, 1.8, 2],
        poster: '/thumb.png',
        sources: [
          {
            src: `https://d29tqkkuy46up6.cloudfront.net/${id}/main.m3u8`,
            type: 'application/x-mpegURL'
          }
        ],
        plugins: {
          hotkeys: {
            volumeStep: 0.1,
            seekStep: 5,
            enableModifiersForNumbers: false,
            enableVolumeScroll: false
          },
        },
      }

      const newPlayer = videojs(videoElement, videoJsOptions, () => {
        onReady && onReady(newPlayer)
        setPlayer(newPlayer)
        newPlayer.hlsQualitySelector({
          displayCurrentQuality: true
        })
      })
    }

    return () => {
      player && player.dispose()
    }
  }, [videoRef, player, onReady])

  useEffect(() => {
    if (player) {
      player.src(`https://d29tqkkuy46up6.cloudfront.net/${id}/main.m3u8`)
    }
  }, [id])

  return (
    <div data-vjs-player>
      <video controls preload="auto" ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  )
})

VideoJs.displayName = 'VideoJs'
