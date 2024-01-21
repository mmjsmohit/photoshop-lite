import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Slider from "./Slider";
import SidebarItem from "./SidebarItem";
import UploadButton from "./UploadButton";

const DEFAULT_OPTIONS = [
  {
    name: "Brightness",
    property: "brightness",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: 100,
    range: {
      min: 0,
      max: 200,
    },
    unit: "%",
  },
  {
    name: "Grayscale",
    property: "grayscale",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: 0,
    range: {
      min: 0,
      max: 100,
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: 0,
    range: {
      min: 0,
      max: 360,
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: 0,
    range: {
      min: 0,
      max: 20,
    },
    unit: "px",
  },
];

function App() {
  const [options, setOptions] = useState(DEFAULT_OPTIONS);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);
  const selectedOption = options[selectedOptionIndex];
  const [image, setImage] = useState("./images/photo.avif");
  function handleSliderChange({ target }) {
    setOptions((prevOptions) => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option;
        return { ...option, value: target.value };
      });
    });
  }

  const handleImageUpload = (event) => {
    const file = URL.createObjectURL(event.target.files[0]);
    setImage(file);
  };

  function getImageStyle() {
    const filters = options.map((option) => {
      return `${option.property}(${option.value}${option.unit})`;
    });
    return { filter: filters.join(" ") };
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <div
          className="main-image"
          style={{ backgroundImage: `url(${image})`, ...getImageStyle() }}
        ></div>
        <div className="sidebar">
          {options.map((option, index) => {
            return (
              <SidebarItem
                active={index === selectedOptionIndex}
                name={option.name}
                handleClick={() => setSelectedOptionIndex(index)}
                property={option.property}
                value={option.value}
                range={option.range}
                unit={option.unit}
              />
            );
          })}
          <UploadButton handleUpload={(event) => handleImageUpload(event)} />
        </div>
        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSliderChange}
        />
        {/* <div className="download-button">Download</div> */}
      </div>
    </div>
  );
}

export default App;
