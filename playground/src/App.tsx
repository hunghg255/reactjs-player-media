import {
  MediaPlayer,
  MediaPlayerControls,
  MediaPlayerControlsOverlay,
  MediaPlayerFullscreen,
  MediaPlayerPiP,
  MediaPlayerPlay,
  MediaPlayerPlaybackSpeed,
  MediaPlayerSeek,
  MediaPlayerSeekBackward,
  MediaPlayerSeekForward,
  MediaPlayerTime,
  MediaPlayerVideo,
  MediaPlayerVolume,


  MediaPlayerSettings,
  MediaPlayerVolumeIndicator,
  MediaPlayerLoading,
  MediaPlayerError,
  MediaPlayerCaptions,
  MediaPlayerAudio,
  MediaPlayerLoop,
} from 'reactjs-player-media';

import 'reactjs-player-media/style.css'

function MediaPlayerBasic() {
  return <>
    <MediaPlayer>
      <MediaPlayerVideo>
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
      </MediaPlayerVideo>
      <MediaPlayerControls
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <MediaPlayerControlsOverlay />
        <MediaPlayerSeek />
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <MediaPlayerPlay />
            <MediaPlayerSeekBackward />
            <MediaPlayerSeekForward />
            <MediaPlayerVolume expandable />
            <MediaPlayerTime />
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <MediaPlayerPlaybackSpeed />
            <MediaPlayerPiP />
            <MediaPlayerFullscreen />
          </div>
        </div>
      </MediaPlayerControls>
    </MediaPlayer>
  </>
}

function MediaPlayerSettingsDemo() {
  return (
    <MediaPlayer autoHide>
      <MediaPlayerVideo
        src="https://stream.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/low.mp4"
        crossOrigin=""
        muted
        playsInline
      >
        <track
          default
          kind="chapters"
          src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/chapters.vtt"
        />
        <track
          default
          kind="metadata"
          label="thumbnails"
          src="https://image.mux.com/Sc89iWAyNkhJ3P1rQ02nrEdCFTnfT01CZ2KmaEcxXfB008/storyboard.vtt"
        />
        <track
          label="English"
          kind="captions"
          srcLang="en"
          src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/captions.en.vtt"
          default
        />
        <track
          label="Japanese"
          kind="captions"
          srcLang="ja"
          src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/captions.ja.vtt"
        />
        <track
          label="Swedish"
          kind="captions"
          srcLang="sv"
          src="https://media-chrome.mux.dev/examples/vanilla/vtt/elephantsdream/captions.sv.vtt"
        />
      </MediaPlayerVideo>
      <MediaPlayerLoading />
      <MediaPlayerError />
      <MediaPlayerVolumeIndicator />
      <MediaPlayerControls
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <MediaPlayerControlsOverlay />
        <MediaPlayerSeek />
        <div style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: '8px',
        }}>
          <div style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            gap: '8px',
          }}>
            <MediaPlayerPlay />
            <MediaPlayerSeekBackward />
            <MediaPlayerSeekForward />
            <MediaPlayerVolume expandable />
            <MediaPlayerTime />
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <MediaPlayerCaptions />
            <MediaPlayerSettings />
            <MediaPlayerPiP />
            <MediaPlayerFullscreen />
          </div>
        </div>
      </MediaPlayerControls>
    </MediaPlayer>
  );
}

function MediaPlayerAudioDemo() {
  return (
    <MediaPlayer
      style={{
        height: '80px',
      }}
    >
      <MediaPlayerAudio className="sr-only"

      >
        <source src="/art.mp3" type="audio/mp3" />
      </MediaPlayerAudio>
      <MediaPlayerControls
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <MediaPlayerSeek withTime />
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
          }}
        >
          <MediaPlayerSeekBackward />
          <MediaPlayerPlay />
          <MediaPlayerSeekForward />
          <MediaPlayerVolume />
          <MediaPlayerPlaybackSpeed />
          <MediaPlayerLoop />
        </div>
      </MediaPlayerControls>
    </MediaPlayer>
  );
}

function MediaPlayerErrorDemo() {
  return (
    <MediaPlayer>
      <MediaPlayerVideo
        src="/assets/nonexistent-video.mp4"
        playsInline
        crossOrigin=""
      />
      <MediaPlayerError />
      <MediaPlayerControls
        style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <MediaPlayerControlsOverlay />
        <MediaPlayerSeek />
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: 1,
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <MediaPlayerPlay />
            <MediaPlayerSeekBackward />
            <MediaPlayerSeekForward />
            <MediaPlayerVolume expandable />
            <MediaPlayerTime />
          </div>
          <div className="flex items-center gap-2"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <MediaPlayerPlaybackSpeed />
            <MediaPlayerPiP />
            <MediaPlayerFullscreen />
          </div>
        </div>
      </MediaPlayerControls>
    </MediaPlayer>
  );
}

function App() {


  return (
    <div
      className="p-[24px] flex flex-col w-full max-w-screen-lg gap-[24px] mx-[auto] my-0"
      style={{
        maxWidth: 1024,
        margin: '40px auto',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: 10,
        }}
        className="buttonWrap"
      >
        <button
          onClick={() => {
            window.open('https://github.com/hunghg255/reactjs-player-media-playground', '_blank');
          }}
        >
          Source Demo
        </button>
        <button
          onClick={() => {
            window.open('https://github.com/hunghg255/reactjs-player-media', '_blank');
          }}
        >
          Documentation
        </button>
      </div>


      <h2>Media Player</h2>
      <MediaPlayerBasic />

      <br />
      <h2>Audio Player</h2>

      <MediaPlayerSettingsDemo />

      <br />

      <h2>With Settings Menu</h2>
      <MediaPlayerAudioDemo />

      <br />

      <h3>Video Error</h3>
      <MediaPlayerErrorDemo />
    </div>
  )
}

export default App
