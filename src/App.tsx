import { useRef, useState } from 'react'
import './App.css'
import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'

function App() {
  const ffmpegRef = useRef(new FFmpeg())

  const [loaded, setLoaded] = useState(false);
  const [outUrl, setOutUrl] = useState("");

  const load = async () => {
    const baseURL = "https://unpkg.com/@ffmpeg/core-mt@0.12.10/dist/esm";
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on("log", ({ message }) => {
      console.log(message)
    });

    try {
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

      setLoaded(true)
      debugger;
    }
    catch (e) {
      console.log(e)
      debugger
    }
  }

  const transcode = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let count = 0;
    console.log(++count)
    await load();
    console.log(++count)
    setOutUrl("");
    const file = e.target?.files?.[0];
    console.log(++count, file)
    if (!file) return;
    console.log(++count)
    const ffmpeg = ffmpegRef.current;
    await ffmpeg.writeFile(file.name, await fetchFile(file));
    await ffmpeg.exec(["-i", file.name, '-vcodec', 'libx264', '-crf', '28', "-preset", "fast", "-acodec", "aac", "-b:a", "128k", "output.mp4"]);
    const fileData = await ffmpeg.readFile("output.mp4");
    const data = new Uint8Array(fileData as ArrayBuffer);
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "video/mp4" })
    );
    console.log(++count, url)
    setOutUrl(url)
  }
  return (
    <>
      <button onClick={() => load()}>load</button>
      {loaded && <p>loaded ...</p>}
      <input type='file' onChange={e => transcode(e)} />
      {outUrl && <a href={outUrl} download="compressed.mp4">Baixar</a>
      }
    </>
  )
}

export default App
