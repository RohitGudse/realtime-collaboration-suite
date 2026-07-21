import { useState, useEffect, useRef, useCallback } from "react";

/*
-------------------------------------------------------
Custom Hook : useAutoSave
-------------------------------------------------------
Features
✓ Automatic Saving
✓ Manual Save
✓ Last Saved Time
✓ Enable / Disable Autosave
✓ Custom Save Interval
✓ Error Handling
-------------------------------------------------------
*/

const useAutoSave = ({
  data,
  onSave,
  interval = 4000,
  enabled = true,
}) => {
  const timerRef = useRef(null);

  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState(null);
  const [error, setError] = useState(null);

  const saveData = useCallback(async () => {
    if (!enabled) return;

    try {
      setIsSaving(true);
      setError(null);

      if (onSave) {
        await onSave(data);
      }

      console.log("Data Saved Successfully");
      console.log(data);

      setLastSaved(new Date());
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  }, [data, enabled, onSave]);

  useEffect(() => {
    if (!enabled) return;

    timerRef.current = setInterval(() => {
      saveData();
    }, interval);

    return () => {
      clearInterval(timerRef.current);
    };
  }, [saveData, interval, enabled]);

  return {
    saveData,
    isSaving,
    lastSaved,
    error,
  };
};

export default useAutoSave;