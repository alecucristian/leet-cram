type UpdateCallback = (reg: ServiceWorkerRegistration) => void;

let registration: ServiceWorkerRegistration | null = null;
let updateAvailableCallback: UpdateCallback | null = null;
let refreshing = false;

/**
 * Register the Service Worker and wire up update event listeners.
 */
export function registerPWA(onUpdateAvailable?: UpdateCallback): void {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return;
  }

  if (onUpdateAvailable) {
    updateAvailableCallback = onUpdateAvailable;
  }

  // When the active service worker controller changes, reload once to get fresh assets
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (refreshing) return;
    refreshing = true;
    window.location.reload();
  });

  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((reg) => {
        registration = reg;
        console.log("[PWA] Service Worker registered with scope:", reg.scope);

        // If a worker is already waiting, trigger the update notification immediately
        if (reg.waiting) {
          notifyUpdate(reg);
        }

        // Listen for new service worker installation
        reg.addEventListener("updatefound", () => {
          const newWorker = reg.installing;
          if (!newWorker) return;

          newWorker.addEventListener("statechange", () => {
            // New worker installed and ready, and an existing controller is currently serving
            if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
              console.log("[PWA] Update ready to activate.");
              notifyUpdate(reg);
            }
          });
        });

        // Proactive update check immediately after registration
        reg.update().catch(() => {});

        // Periodic update check every 15 minutes
        setInterval(() => {
          reg.update().catch(() => {});
        }, 15 * 60 * 1000);
      })
      .catch((err) => {
        console.warn("[PWA] Service Worker registration failed:", err);
      });
  });

  // Re-check for updates whenever the tab or PWA becomes active again
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && registration) {
      registration.update().catch(() => {});
    }
  });

  // Re-check when internet connection is restored
  window.addEventListener("online", () => {
    if (registration) {
      registration.update().catch(() => {});
    }
  });
}

function notifyUpdate(reg: ServiceWorkerRegistration) {
  if (updateAvailableCallback) {
    updateAvailableCallback(reg);
  }
  window.dispatchEvent(new CustomEvent("pwa-update-available"));
}

/**
 * Manually trigger a check for Service Worker updates.
 * Returns true if an update is found or waiting.
 */
export async function checkForPwaUpdate(): Promise<boolean> {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return false;
  }

  if (!registration) {
    try {
      registration = (await navigator.serviceWorker.getRegistration("./")) ?? null;
    } catch {
      return false;
    }
  }

  if (!registration) {
    return false;
  }

  try {
    await registration.update();
    return Boolean(registration.waiting || registration.installing);
  } catch {
    return false;
  }
}

/**
 * Tell the waiting service worker to skip waiting and activate immediately.
 */
export function applyPwaUpdate(): void {
  if (registration?.waiting) {
    registration.waiting.postMessage({ type: "SKIP_WAITING" });
  } else {
    window.location.reload();
  }
}
