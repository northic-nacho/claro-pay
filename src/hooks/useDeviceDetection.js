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
    if (numberOfLogicalProcessors < 4 || deviceMemory < 3) {
      setIsLowEndDevice(true);
    }

    console.log("----DEVICE SPECS----");
    console.log("Is mobile: ", isMobileDevice);
    console.log("Is low end: ", isLowEndDevice);
    console.log("Processors: ", numberOfLogicalProcessors);
    console.log("Memory: ", deviceMemory);
    console.log("----DEVICE SPECS----");

    setIsLowEndDevice(true);
  }, []);

  return {
    isMobileDevice,
    isLowEndDevice,
  };
};

export { useDeviceDetection };
