// Libraries
import React from 'react'

// Components
import Song from '../Song/Song'

// Tracks
import { SpotifyTrackType } from '../../types/SpotifyTrackType';

// Interface
interface Props {
  songs: Array<{
    track: SpotifyTrackType
  }>
}

const PlaylistSongs: React.FC<Props> = (props) => {
  return (
    <div className='PlaylistSongs'>
      {props.songs && props.songs.map((item, index) => {
        return (
          <Song
            key={index}
            song={item.track}
            addSong={false}
          />
        )
      })}
    </div>
  )
}

export default PlaylistSongs