"use client";

import { useCallback, useSyncExternalStore } from "react";

const EMPTY_IDS = "[]";
const LOCAL_EVENT = "dg-local-storage";

function serverSnapshot() {
  return EMPTY_IDS;
}

export function useLocalIds(key: string): [string[], (ids: string[]) => boolean] {
  const subscribe = useCallback(
    (callback: () => void) => {
      function handleStorage(event: StorageEvent) {
        if (event.key === key) callback();
      }

      function handleLocal(event: Event) {
        if ((event as CustomEvent<string>).detail === key) callback();
      }

      window.addEventListener("storage", handleStorage);
      window.addEventListener(LOCAL_EVENT, handleLocal);
      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener(LOCAL_EVENT, handleLocal);
      };
    },
    [key],
  );

  const getSnapshot = useCallback(() => {
    try {
      return window.localStorage.getItem(key) ?? EMPTY_IDS;
    } catch {
      return EMPTY_IDS;
    }
  }, [key]);
  const raw = useSyncExternalStore(subscribe, getSnapshot, serverSnapshot);

  let ids: string[] = [];
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      ids = parsed.filter((item): item is string => typeof item === "string");
    }
  } catch {
    ids = [];
  }

  const setIds = useCallback(
    (next: string[]) => {
      try {
        window.localStorage.setItem(key, JSON.stringify(next));
        window.dispatchEvent(new CustomEvent(LOCAL_EVENT, { detail: key }));
        return true;
      } catch {
        return false;
      }
    },
    [key],
  );

  return [ids, setIds];
}
