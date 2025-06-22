import React, { useRef, useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { fetchFile, toBlobURL } from "@ffmpeg/util"

export default function VideoCompressor() {
  const ffmpegRef = useRef(new FFmpeg());
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState(null);
  const videoRef = useRef(null);
  const messageRef = useRef(null);
  const [output, setOutput] = useState(null);

  const load = async () => {
    const ffmepg = ffmpegRef.current!;
    return ffmepg.load();
  }

  const changeVideo: React.ChangeEventHandler<HTMLInputElement> = async (e) => {
    await load();
    const file = e?.target?.files?.[0];
    if (!file) return;
    const ffmpeg = ffmpegRef.current;
    // TODO finish this
    // https://chatgpt.com/c/6857e43e-f578-800e-ad57-ccda7193ec48
    // https://ffmpegwasm.netlify.app/docs/getting-started/usage
  }

  return <div>
    <input type="file" accept="video/mp4" onChange={changeVideo} />
  </div>
}
