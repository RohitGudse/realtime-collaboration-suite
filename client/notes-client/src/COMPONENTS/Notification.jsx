import { useEffect } from "react";

const useAutoSave = (data) => {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Saved:", data);
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);
};

export default useAutoSave;