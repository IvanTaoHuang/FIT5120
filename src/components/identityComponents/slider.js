import * as React from "react";
import * as ReactDOM from "react-dom";
import { SliderComponent } from "@syncfusion/ej2-react-inputs";
export default class DateSlider extends React.Component {
  constructor() {
    super(...arguments);
    this.min = new Date(2013, 6, 13, 11).getTime();
    this.max = new Date(2013, 6, 13, 17).getTime();
    this.value = new Date(2013, 6, 13, 13).getTime();
    this.step = 3600000;
    // Slider ticks customization
    this.ticks = { placement: "After", largeStep: 2 * 3600000 };
    this.tooltip = { placement: "Before", isVisible: true };
  }
  renderingTicksHandler(args) {
    let totalMiliSeconds = Number(args.value);
    let custom = { hour: "2-digit", minute: "2-digit" };
    args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
  }
  tooltipChangeHandler(args) {
    let totalMiliSeconds = Number(args.text);
    let custom = { hour: "2-digit", minute: "2-digit" };
    args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
  }
  render() {
    return (
      <div id="container">
        <div className="wrap">
          <SliderComponent
            id="slider"
            min={this.min}
            max={this.max}
            value={this.value}
            step={this.step}
            tooltip={this.tooltip}
            ticks={this.ticks}
            showButtons={true}
            tooltipChange={this.tooltipChangeHandler.bind(this)}
            renderingTicks={this.renderingTicksHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<DateSlider />, document.getElementById("element"));
