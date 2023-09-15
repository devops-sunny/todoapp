import React, { useRef } from "react";
import Audio from "../iamge/audio.png";
import Video from "../iamge/video.png";
import Image from "../iamge/image.png";

function Textediter({ callbackfunctions }) {
  const divRef = useRef(null);

  const handleInputValue = (e) => {
    const inputValue = e.currentTarget.innerHTML;
    const formattedValue = `${inputValue}`;
    callbackfunctions(formattedValue);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    const file = e?.target?.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const imageElement = document.createElement("img");
      imageElement.controls = true;
      imageElement.style.display = "block";
      imageElement.style.margin = "0 auto";
      imageElement.style.width = "600px";
      imageElement.style.height = "360px";
      imageElement.src = reader.result;
      divRef.current.appendChild(imageElement);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleInsertVideo = (e) => {
    const file = e?.target?.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const videoElement = document.createElement("video");
      videoElement.controls = true;
      videoElement.src = reader.result;
      videoElement.style.display = "block";
      videoElement.style.margin = "0 auto";
      videoElement.style.width = "600px";
      videoElement.style.height = "360px";
      divRef.current.appendChild(videoElement);
      const br = document.createElement("br");
      divRef.current.appendChild(br);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const handleInsertAudio = (e) => {
    const file = e?.target?.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      const audioElement = document.createElement("audio");
      audioElement.controls = true;
      audioElement.src = reader?.result;
      audioElement.style.display = "block";
      audioElement.style.margin = "0 auto";
      audioElement.style.width = "300px";
      audioElement.style.height = "60px";
      divRef.current.appendChild(audioElement);
      const br = document.createElement("br");
      divRef.current.appendChild(br);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  return (
    <>
      <div
        className="text-input-editer"
        id="text-input-editer"
        data-text="Description type ..."
        ref={divRef}
        contentEditable={true}
        onInput={handleInputValue}
        dir="ltr"
      />
      <div className="footer-button">
        <label>
          {" "}
          <img src={Image} className="textediterbutton" />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              handleImageUpload(e);
            }}
          />
        </label>
        <label>
          <img src={Audio} className="textediterbutton" />
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => {
              handleInsertAudio(e);
            }}
          />
        </label>
        <label>
          {" "}
          <img src={Video} className="textediterbutton" />
          <input
            type="file"
            accept="video/*"
            onChange={(e) => {
              handleInsertVideo(e);
            }}
          />
        </label>
      </div>
    </>
  );
}

export default Textediter;
