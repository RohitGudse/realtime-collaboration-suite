import { useEffect } from "react";

const useAutoSave = (data) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Auto-saving...", data);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);
};

export default useAutoSave;