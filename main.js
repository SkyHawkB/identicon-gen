const regions = [
  {
    x: 0,
    y: 0
  },
  {
    x: 80,
    y: 0
  },
  {
    x: 160,
    y: 0
  },
  {
    x: 240,
    y: 0
  },
  {
    x: 320,
    y: 0
  },
  {
    x: 0,
    y: 80
  },
  {
    x: 80,
    y: 80
  },
  {
    x: 160,
    y: 80
  },
  {
    x: 240,
    y: 80
  },
  {
    x: 320,
    y: 80
  },
  {
    x: 0,
    y: 160
  },
  {
    x: 80,
    y: 160
  },
  {
    x: 160,
    y: 160
  },
  {
    x: 240,
    y: 160
  },
  {
    x: 320,
    y: 160
  },
  {
    x: 0,
    y: 240
  },
  {
    x: 80,
    y: 240
  },
  {
    x: 160,
    y: 240
  },
  {
    x: 240,
    y: 240
  },
  {
    x: 320,
    y: 240
  },
  {
    x: 0,
    y: 320
  },
  {
    x: 80,
    y: 320
  },
  {
    x: 160,
    y: 320
  },
  {
    x: 240,
    y: 320
  },
  {
    x: 320,
    y: 320
  }
];
function shadeIdenticonRegion(region, color) {
  const element = document.getElementById("output");
  const canvas = element.getContext("2d");

  canvas.fillStyle = color;
  canvas.fillRect(region.x, region.y, 80, 80);
}
function makeIdenticon() {
  for(let i = 0; i < 25; i++) {
    shadeIdenticonRegion(regions[i], "#FFFFFF");
  }

  let color = `rgb(${RIFI(0, 255)}, ${RIFI(0, 255)}, ${RIFI(0, 255)})`;
  for(let i = 0; i < 25; i++) {
    if(RIFI(0, 100) < 40) {
      shadeIdenticonRegion(regions[i], color);
    }
  }
}
function RIFI(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
window.onload = () => {
  document.getElementById("generate").addEventListener("click", () => {
    makeIdenticon();
  }, false);
};
