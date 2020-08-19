import React from 'react';

interface VideoProps {
  id: string;
  name: string;
}

const Video = ({ id, name }: VideoProps ) => (
    <div className="screen-video">
        <video id={`video-${id}`} playsInline autoPlay muted loop>
            <source src={`videos/${name}.mp4`} type="video/mp4" />
            Tu navegador no implementa el elemento <code>video</code>.
        </video>
    </div>
);

export default Video;
