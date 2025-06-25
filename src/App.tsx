import { useRef, useState } from 'react'
import './App.css'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

function App() {
  const ffmpegRef = useRef(new FFmpeg())
  const [progress, setProgess] = useState(0);
  const [outUrl, setOutUrl] = useState("");

  const load = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.10/dist/esm";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      console.log(message)
    });

    if (ffmpeg.loaded) return;

    ffmpeg.on('progress', (data) => {
      setProgess(data.progress);
    })

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
      wasmURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.wasm`,
        "application/wasm"
      ),
      workerURL: await toBlobURL(
        `${baseURL}/ffmpeg-core.worker.js`,
        "text/javascript"
      ),
    });

  }

  const transcode = async (e: React.ChangeEvent<HTMLInputElement>) => {
    await load();
    setOutUrl("");
    const file = e.target?.files?.[0];
    if (!file) return;
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile(file.name, await fetchFile(file));
    await ffmpeg.exec(["-i", file.name, '-vcodec', 'libx264', '-crf', '28', "-preset", "fast", "-acodec", "aac", "-b:a", "128k", "output.mp4"]);
    const fileData = await ffmpeg.readFile("output.mp4");
    const data = new Uint8Array(fileData as ArrayBuffer);
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    setOutUrl(url)
  }
  return (
    <>
      <input type='file' onChange={e => transcode(e)} />
      {![0, 1].includes(progress) && <p>{Math.ceil(progress * 100)}%</p>}
      {outUrl && <a href={outUrl} download="compressed.mp4">download</a>}
    </>
  )
}

export default App
