import React, {useEffect} from "react";

export class Colorpicker extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      pointer_style: {
        top: 100,
        left: 200
      },
      slider_style: {
        top: 0
      },
    };
    this.updateCheck = true
    this.hex_value = '#b66a5b'

    this.sliderGradient = [
      [0,     [255, 0, 0]],
      [36.6,  [255, 255, 0]],
      [73.3, [0, 255, 0]],
      [110,   [0, 255, 255]],
      [146.6,   [0, 0, 255]],
      [183.3, [255, 0, 255]],
      [220,   [255, 0, 0]]
    ];

    this.bound_handleMouseMoveColorbox = this.handleMouseMoveColorbox.bind(this);
    this.bound_handleMouseUpColorbox = this.handleMouseUpColorbox.bind(this);

    this.bound_handleMouseMoveSlider = this.handleMouseMoveSlider.bind(this);
    this.bound_handleMouseUpSlider = this.handleMouseUpSlider.bind(this);

    this.setColor();
  }

  componentDidMount() {
    this.hex = this.props.editableColor ? this.props.editableColor : '#b66a5b'
    this.slider_color = this.props.editableColor ? this.props.editableColor : '#b66a5b'
    // this.colorbox_horizontal_color = this.props.editableColor ? this.props.editableColor : '#b66a5b'
    // this.colorbox_vertical_color = this.props.editableColor ? this.props.editableColor : '#b66a5b'
    this.props.setCurrentColor(this.props.editableColor);
    this.colorpicker_style = {
      backgroundColor: this.props.editableColor ? this.props.editableColor : '#b66a5b'
    }
  }

  setPointerCoordinates(x, y) {
    this.setState({
      pointer_style: {
        left: x,
        top: y - 58
      }
    });
  }

  setSliderCoordinate(y) {
    this.setState({
      slider_style: {
        top: y - 58,
      }
    });
  }

  setSliderColor(color) {
      this.slider_color = color;
  }

  setColorboxHorizontalColor(color) {
      this.colorbox_horizontal_color = color;
  }

  setColorboxVerticalColor(color) {
      this.colorbox_vertical_color = color;
  }

  setColorboxColor(color) {
      this.colorbox_style = {
        backgroundColor: "rgb(" + this.slider_color.join() + ")"
      }
  }

  setColorpickerColor() {
    this.colorpicker_style = {
      backgroundColor: "rgb(" + this.colorbox_vertical_color.join() + ")"
    }
  }

  setColor() {
    this.calculateSliderCurrentColor();
    this.setColorboxColor();
    this.calculateColorboxCurrentColor();
    this.setColorpickerColor();
    this.calculateHex();
    this.calculateHSLFromRGB();
  }

  calculateColorboxCurrentColor() {
    this.calculateColorboxHorizontalColor();
    this.calculateColorboxVerticalColor();
  }
  
  calculateDistanceFromWhite() {
    var rgbArray = [182, 106, 91];
    var firstColor = [255, 255, 255]; // White
    var boxWidth = 220;
    var ratio = this.calculateColorDistance(firstColor, rgbArray);
    // eslint-disable-next-line
    var pointerPosition = ratio * boxWidth;
  }

  calculateColorboxHorizontalColor() {
    var pointerPosition = this.state.pointer_style.left;
    var firstColor = [255, 255, 255];
    var secondColor = this.slider_color;
    var boxWidth = 220;
    var ratio = pointerPosition / boxWidth;
    var rgbArray = this.calculateRGBColor(firstColor, secondColor, ratio);
    this.setColorboxHorizontalColor(rgbArray);
  }

  calculateColorboxVerticalColor() {
    var pointerPosition = this.state.pointer_style.top;
    var firstColor = this.colorbox_horizontal_color;
    var secondColor = [0, 0, 0];
    var boxHeigth = 220;
    var ratio = pointerPosition / boxHeigth;
    var rgbArray = this.calculateRGBColor(firstColor, secondColor, ratio);
    this.setColorboxVerticalColor(rgbArray);
  }

  calculateSliderCurrentColor() {
    var sliderPosition = this.state.slider_style.top;
    var colorRange = [];

    for (var i = 0; i < this.sliderGradient.length; i++) {
      if (sliderPosition < this.sliderGradient[i][0]) {
        colorRange = [i - 1, i];
        break;
      }
    }

    var firstColor = this.sliderGradient[colorRange[0]][1];
    var secondColor = this.sliderGradient[colorRange[1]][1];

    var sliderHeight = 220;

    var firstColorPosition = sliderHeight * (this.sliderGradient[colorRange[0]][0] / 100);
    var secondColorPosition =  sliderHeight * (this.sliderGradient[colorRange[1]][0] / 100) - firstColorPosition;

    var computedSliderPosition = sliderHeight * (sliderPosition / 100) - firstColorPosition;
    var ratio = computedSliderPosition / secondColorPosition;

    var rgbArray = this.calculateRGBColor(firstColor, secondColor, ratio);
    this.setSliderColor(rgbArray);
  }

  calculateRGBColor(color1, color2, weight) {
    var w = weight * 2 - 1;
    var w1 = (w / 1 + 1) / 2;
    var w2 = 1 - w1;
    var rgb = [
      Math.round(color2[0] * w1 + color1[0] * w2),
      Math.round(color2[1] * w1 + color1[1] * w2),
      Math.round(color2[2] * w1 + color1[2] * w2)
    ];
    return rgb;
  }
  
  calculateHSLFromRGB() {
    
    var r = this.colorbox_vertical_color[0] / 255;
    var g = this.colorbox_vertical_color[1] / 255;
    var b = this.colorbox_vertical_color[2] / 255;
          
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    
    var l = (max + min) / 2;
    var s = 0;
    var h = 0;
        
    if(max !== min) { 
      
      var difference = max - min;
      
       // s = l > 0.5 ? d / (2 - max - min) : d / (max + min);            
      if (l > 0.5) {
        s = difference / (2 - max - min);
      } else {
        s = difference / (max + min);
      }
      
      switch(max) {
        case r: 
          h = (g - b) / difference;
          break;
        case g: 
          h = 2 + (b - r) / difference;
          break;
        case b: 
          h = 4 + (r - g) / difference;
          break;
        default:
          break
      }      
      
      h = h * 60;
      if (h < 0) {
        h = h + 360;
      }
    }
    
    this.hsl = [Math.round(h), Math.round(s * 100) , Math.round(l * 100)];
  }
  
  componentToHex(component) {
    var hex = component.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  calculateHex() {    
    this.hex =  
      this.componentToHex(this.colorbox_vertical_color[0]) + 
      this.componentToHex(this.colorbox_vertical_color[1]) + 
      this.componentToHex(this.colorbox_vertical_color[2]);
    this.props.setCurrentColor("#" + this.hex);
  }

  handleMouseDownColorbox(e) {
    var x = 215 - Math.abs((e.clientX + 118) - window.innerWidth);
    // var y = 220 - Math.abs((e.clientY + 110) - window.innerHeight);
    var y = e.clientY - e.currentTarget.offsetTop;
    this.setPointerCoordinates(x, y);

    this.setColor();

    e.currentTarget.addEventListener(
      "mousemove",
      this.bound_handleMouseMoveColorbox
    );
    
    e.currentTarget.addEventListener(
      "mouseup",
      this.bound_handleMouseUpColorbox
    );

    e.preventDefault();
  }

  handleMouseUpColorbox(e) {
    
    e.currentTarget.removeEventListener(
      "mousemove",
      this.bound_handleMouseMoveColorbox
    );
    
    e.currentTarget.removeEventListener(
      "mouseup",
      this.bound_handleMouseUpColorbox
    );

    e.preventDefault();
  }

  handleMouseMoveColorbox(e) {
    var x = 215 - Math.abs((e.clientX + 118) - window.innerWidth) ;
    // var y = 220 - Math.abs((e.clientY + 110) - window.innerHeight);
    var y = e.clientY - e.currentTarget.offsetTop;
    this.setPointerCoordinates(x, y);

    this.setColor();

    e.preventDefault();
  }

  handleMouseDownSlider(e) {
    var y = e.clientY - e.currentTarget.offsetTop;

    this.setSliderCoordinate(y);

    this.setColor();

    e.currentTarget.addEventListener(
      "mousemove",
      this.bound_handleMouseMoveSlider
    );
    
    e.currentTarget.addEventListener(
      "mouseup", 
      this.bound_handleMouseUpSlider
    );

    e.preventDefault();
  }

  handleMouseUpSlider(e) {
    
    e.currentTarget.removeEventListener(
      "mousemove",
      this.bound_handleMouseMoveSlider
    );
    
    e.currentTarget.removeEventListener(
      "mouseup",
      this.bound_handleMouseUpSlider
    );

    e.preventDefault();
  }

  handleMouseMoveSlider(e) {
    var y = e.clientY - e.currentTarget.offsetTop;
    this.setSliderCoordinate(y);

    this.setColor();

    e.preventDefault();
  }
  
  handleInputChange(e) {
    // eslint-disable-next-line
    var value = e.target.value > 255 ? 255 : e.target.value < 0 ? 0 : e.target.value;
    this.colorbox_vertical_color[0] = e.target.value;
    this.setColor();
  }
  
  // <input className="colorInput" onChange={e => {this.handleInputChange(e);}} defaultValue={this.colorbox_vertical_color[0]} /> 

  render() {
    return (
      <div className="colorpicker-snippet">
        <div className="color-preview">
        <div id="colorbox" onMouseDown={e => { this.handleMouseDownColorbox(e); }} style={this.colorbox_style} >
          <div className="pointer" style={this.state.pointer_style}>
            <div className="shape s1" />
            <div className="shape s2" />
          </div>
          <div className="background bg1" />
          <div className="background bg2" />
        </div>
        <div id="colorslider" onMouseDown={e => { this.handleMouseDownSlider(e); }} >
          <div className="slider" style={this.state.slider_style}>
            <div className="shape s3" />
          </div>
          <div className="bg" />
        </div>
        </div>
        <div id="data">
          <div className="colorField">
            <div className="color_hex">
              <p>Color</p>
              <label className="colorLabel hex">HEX</label>
              <label className="hex_code">{this.hex.toUpperCase()}</label>
              <div id="current-color" style={this.colorpicker_style} />
            </div>
          </div> 
          <div className="colorField rgb">
            <div className="color">
              <label className="colorLabel">R</label>
              <label className="colorText">{this.colorbox_vertical_color[0]}</label>
            </div>
            <div className="color">
              <label className="colorLabel">G</label>
              <label className="colorText">{this.colorbox_vertical_color[1]}</label>
            </div>
            <div className="color">
              <label className="colorLabel">B</label>
              <label className="colorText">{this.colorbox_vertical_color[2]}</label>
            </div>
          </div>
          <div className="colorField hsl">
            <div className="color">
              <label className="colorLabel">H</label>
              <label className="colorText">{this.hsl[0]}</label>
            </div>
            <div className="color">
              <label className="colorLabel">S</label>
              <label className="colorText">{this.hsl[1]}</label>
            </div>
            <div className="color">
              <label className="colorLabel">L</label>
              <label className="colorText">{this.hsl[2]}</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

