import * as React from 'react';
import '../churchcrm.scss';

interface ICircleText {
  showText: string;
  circleSz: number;
  bgColor: string;
}

class CircleText extends React.Component<ICircleText> {
  public static async getInitialProps() {
    return {
      namespacesRequired: ['common'],
    };
  }

  public render() {
    return (
      <svg height={this.props.circleSz} width={this.props.circleSz}>
        <circle
          cx="50%"
          cy="50%"
          r="50%"
          fill={this.props.bgColor}
        />
        <text
          x="50%"
          y="50%"
          fontFamily="Consolas, sans-serif"
          textAnchor="middle"
          dominantBaseline="central"
          textLength="80%"
          lengthAdjust="spacing"
          fontSize={Math.floor(this.props.circleSz * 0.75)}
          fill="white"
        >
          {this.props.showText}
        </text>
      </svg>
    );
  }
}

export default CircleText;
