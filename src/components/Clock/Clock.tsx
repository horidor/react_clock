import React from 'react';

type Props = {
  clockName: string;
};

type State = {
  clockTime: string;
};

export class Clock extends React.Component<Props, State> {
  state: State = {
    clockTime: new Date().toUTCString().slice(-12, -4),
  };

  timerClockTime = 0;

  componentDidMount(): void {
    this.timerClockTime = window.setInterval(() => {
      const newDate = new Date().toUTCString().slice(-12, -4);

      // eslint-disable-next-line no-console
      console.log(newDate);

      this.setState({ clockTime: newDate });
    }, 1000);
  }

  componentDidUpdate(prevProps: Readonly<Props>): void {
    if (prevProps.clockName !== this.props.clockName) {
      // eslint-disable-next-line no-console
      console.warn(
        `Renamed from ${prevProps.clockName} to ${this.props.clockName}`,
      );
    }
  }

  componentWillUnmount(): void {
    window.clearInterval(this.timerClockTime);
  }

  render() {
    const { clockTime } = this.state;
    const { clockName } = this.props;

    return (
      <div className="Clock">
        <strong className="Clock__name">{clockName}</strong>

        {' time is '}

        <span className="Clock__time">{clockTime}</span>
      </div>
    );
  }
}
