import React, { useState, useEffect } from "react";
import { Typography, Divider, Button } from "@mui/material";

function CountDownTimer({ duration, onTimeout,onResend,isVerified  }) {
  const [counter, setCounter] = useState(duration);
  const [isCompleted, setIsCompleted] = useState(false);
  const [shouldResetCounter, setShouldResetCounter] = useState(false);

  useEffect(() => {
    if (shouldResetCounter) {
      setCounter(duration);
      setIsCompleted(false);
      setShouldResetCounter(false);
    }

    const timer = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter > 0) {
          return prevCounter - 1;
        } else {
          clearInterval(timer);
          setIsCompleted(true);
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [counter, duration, onTimeout, shouldResetCounter]);
  const formatTime = (counter) => {
    const minutes = Math.floor(counter / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (counter % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };
  return (
    <>
    {!isVerified?
    
      <>
        <Typography variant="DubaiRegular16">
          
           {formatTime(counter)}
           
           </Typography>
        <Divider orientation="vertical" flexItem className="whiteDivider" />
        <Button
        size="small"
          variant="text"
          // color="primary"
          className="resendButton"
          disabled={!isCompleted || isVerified}
          onClick={() => {
            setShouldResetCounter(true);
            onResend();
          }}
        >
          Resend
        </Button>
      </>
    :null
    }
    </>
  );
}

export default CountDownTimer;
