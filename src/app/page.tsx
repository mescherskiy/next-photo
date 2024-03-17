"use client"

import React, { useState } from 'react';

export default function Home() {

  type StateProps = {
    brightness: number,
    contrast: number,
    grayscale: number,
    hueRotate: number,
    invert: number,
    saturate: number,
    sepia: number
  }

  const initialState: StateProps = {
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    hueRotate: 0,
    invert: 0,
    saturate: 100,
    sepia: 0
  }

  const [imageProps, setImageProps] = useState(initialState)
  const [imageSrc, setImageSrc] = useState("")

  // const [brightness, setBrightness] = useState(100)
  // const [contrast, setContrast] = useState(100)
  // const [grayscale, setGrayscale] = useState(0)
  // const [hueRotate, setHueRotate] = useState(0)
  // const [invert, setInvert] = useState(0)
  // const [saturate, setSaturate] = useState(100)
  // const [sepia, setSepia] = useState(0)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div className='flex justify-between align-baseline'>
        <div className='w-4/12'>
          <h2>Original Image</h2>
          {imageSrc && <img className='photo' src={imageSrc} alt="Original" />}
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
        <div className='filters flex flex-col w-3/12'>
          <label htmlFor="brightness">Brightness: <span>{imageProps.brightness}%</span></label>
          <input type="range" name="brightness" min={0} max={200} value={imageProps.brightness}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, brightness: Number(e.target.value)}))} />
          {/* <br /> */}
          <label htmlFor="contrast">Contrast: <span>{imageProps.contrast}%</span></label>
          <input type="range" name="contrast" min={0} max={200} value={imageProps.contrast} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, contrast: Number(e.target.value)}))} />
          {/* <br /> */}
          <label htmlFor="grayscale">Grayscale: <span>{imageProps.grayscale}%</span></label>
          <input type="range" name="grayscale" min={0} max={100} value={imageProps.grayscale} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, grayscale: Number(e.target.value)}))} />
          {/* <br /> */}
          <label htmlFor="hue-rotate">Hue rotate: <span>{imageProps.hueRotate}&deg;</span></label>
          <input type="range" name="hue-rotate" min={0} max={360} value={imageProps.hueRotate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, hueRotate: Number(e.target.value)}))} />
          {/* <br /> */}
          <label htmlFor="invert">Invert: <span>{imageProps.invert}%</span></label>
          <input type="range" name="invert" min={0} max={100} value={imageProps.invert} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, invert: Number(e.target.value)}))} />
          {/* <br /> */}
          <label htmlFor="saturate">Saturate: <span>{imageProps.saturate}%</span></label>
          <input type="range" name="saturate" min={0} max={200} value={imageProps.saturate} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, saturate: Number(e.target.value)}))} />
          {/* <br /> */}
          <label htmlFor="sepia">Sepia: <span>{imageProps.sepia}%</span></label>
          <input type="range" name="sepia" min={0} max={100} value={imageProps.sepia} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setImageProps(props => ({...props, sepia: Number(e.target.value)}))} />
          <button onClick={() => {
            setImageProps(props => ({
              ...props,
              brightness: 120,
              contrast: 130,
              hueRotate: 3,
              saturate: 118,
            }))
          }}>Optimize</button>
          <button onClick={() => setImageProps(initialState)}>Reset</button>
        </div>
        <div className='w-4/12'>
          <h2>Processed Image</h2>
          {imageSrc && 
          <img className={`photo`}
            src={imageSrc}
            alt="Filtered"
            style={{
              filter:
                `brightness(${imageProps.brightness}%) contrast(${imageProps.contrast}%) grayscale(${imageProps.grayscale}%) hue-rotate(${imageProps.hueRotate}deg) invert(${imageProps.invert}%) saturate(${imageProps.saturate}%) sepia(${imageProps.sepia}%)`
            }} /> }
        </div>
      </div>
    </div>
  );
};


