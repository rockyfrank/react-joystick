import React from 'react';
import ReactDOM from 'react-dom';

import Joystick from '../src';

const Demo = () => {
  return <Joystick baseRadius={100} insideMode />;
};

ReactDOM.render(<Demo />, document.getElementById('app'));
