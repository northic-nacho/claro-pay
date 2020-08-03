import { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { useHardwareConcurrency } from "react-adaptive-hooks/hardware-concurrency";
import { useMemoryStatus } from "react-adaptive-hooks/memory";

const useDeviceDetection = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(isMobile);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  const { numberOfLogicalProcessors } = useHardwareConcurrency();
  const { deviceMemory } = useMemoryStatus();

  useEffect(() => {
    if (numberOfLogicalProcessors < 2 || deviceMemory < 2) {
      setIsLowEndDevice(true);
    }
  }, []);

  return {
    isMobileDevice,
    isLowEndDevice,
  };
};

export { useDeviceDetection };
