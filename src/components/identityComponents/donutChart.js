import React from "react";

import PieChart, {
  Legend,
  Series,
  Tooltip,
  Format,
  Label,
  Connector,
  Title,
  Font,
} from "devextreme-react/pie-chart";

class DonutChart extends React.Component {
  render() {
    return (
      <PieChart
        id="pie"
        type="doughnut"
        // title="The Population of Continents and Regions"
        palette="Soft Pastel"
        dataSource={this.props.data}
      >
        <Title text={this.props.title}>
          <Font color="white"></Font>
        </Title>
        <Series argumentField="region">
          <Label visible={true} format="percent">
            <Connector visible={true} />
          </Label>
        </Series>
        {/* <Export enabled={true} /> */}
        <Legend
          margin={0}
          horizontalAlignment="center"
          orientation="horizontal"
          verticalAlignment="bottom"
          markerSize={this.props.markerSize}
        />
        <Tooltip enabled={true} customizeTooltip={this.customizeTooltip}>
          <Format type="percent" />
        </Tooltip>
      </PieChart>
    );
  }

  customizeTooltip(arg) {
    return {
      text: `${arg.argumentText} - ${(arg.percent * 100).toFixed(2)}%`,
    };
  }
}

export default DonutChart;
