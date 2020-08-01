import { useState } from "react";
import { isMobile } from "react-device-detect";

const useDeviceDetection = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  return {
    isMobileDevice,
    isLowEndDevice,
  };
};

export { useDeviceDetection };
