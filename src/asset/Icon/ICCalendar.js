import * as React from 'react';

function ICCalendar(props) {
  return (
    <div style={props.style} className={props.classNames}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        fill='none'>
        <path
          d='m19 7-9 9 9 9'
          stroke='#111'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  );
}

export default ICCalendar;