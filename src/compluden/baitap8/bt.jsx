import React from "react";

const click = ({ isRunning, startTimer, stopTimer, resetTimer }) => {
  return (
    <>
      <button onClick={startTimer} disabled={isRunning}>
        bắt đầu
      </button>
      <button onClick={stopTimer} disabled={!isRunning}>
        dừng lại
      </button>
      <button onClick={resetTimer}>làm mới</button>
    </>
  );
};

export default click;
