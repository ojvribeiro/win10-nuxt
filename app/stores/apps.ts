import type { AppId } from '~/utils/apps'

export interface AppWindow {
  appId: AppId
  isMinimized: boolean
  isMaximized: boolean
  zIndex: number
  position: {
    x: number
    y: number
  }
  size: {
    width: number
    height: number
  }
}

export const useAppStore = defineStore('app', {
  state() {
    return {
      windows: [] as AppWindow[],
      focusedAppId: null as AppId | null,
      zIndex: 0,
    }
  },

  getters: {
    getWindow(state) {
      return (appId: AppId) =>
        state.windows.find((appWindow) => appWindow.appId === appId)
    },

    isRunning(state) {
      return (appId: AppId) =>
        state.windows.some((appWindow) => appWindow.appId === appId)
    },
  },

  actions: {
    open(appId: AppId) {
      const appWindow = this.getWindow(appId)

      if (appWindow) {
        appWindow.isMinimized = false

        this.focus(appId)

        return
      }

      const { width, height } = appDefinitions[appId].window

      const availableWidth = window.innerWidth
      const availableHeight = window.innerHeight - TASKBAR_HEIGHT

      const size = {
        width: Math.min(width, availableWidth),
        height: Math.min(height, availableHeight),
      }

      this.windows.push({
        appId,
        isMinimized: false,
        isMaximized: false,
        zIndex: ++this.zIndex,
        position: {
          x: Math.round((availableWidth - size.width) / 2),
          y: Math.round((availableHeight - size.height) / 2),
        },
        size,
      })

      this.focusedAppId = appId
    },

    close(appId: AppId) {
      this.windows = this.windows.filter(
        (appWindow) => appWindow.appId !== appId
      )

      if (this.focusedAppId === appId) {
        this.focusTopmost()
      }
    },

    focus(appId: AppId) {
      const appWindow = this.getWindow(appId)

      if (!appWindow) {
        return
      }

      if (appWindow.zIndex !== this.zIndex) {
        appWindow.zIndex = ++this.zIndex
      }

      this.focusedAppId = appId
    },

    blur() {
      this.focusedAppId = null
    },

    focusTopmost() {
      const topmost = this.windows
        .filter((appWindow) => !appWindow.isMinimized)
        .sort((a, b) => b.zIndex - a.zIndex)[0]

      this.focusedAppId = topmost?.appId ?? null
    },

    minimize(appId: AppId) {
      const appWindow = this.getWindow(appId)

      if (!appWindow) {
        return
      }

      appWindow.isMinimized = true

      if (this.focusedAppId === appId) {
        this.focusTopmost()
      }
    },

    toggleMaximize(appId: AppId) {
      const appWindow = this.getWindow(appId)

      if (!appWindow) {
        return
      }

      appWindow.isMaximized = !appWindow.isMaximized
    },

    // Same behavior as clicking an app on the Windows 10 taskbar
    toggleFromTaskbar(appId: AppId) {
      const appWindow = this.getWindow(appId)

      if (appWindow && !appWindow.isMinimized && this.focusedAppId === appId) {
        this.minimize(appId)

        return
      }

      this.open(appId)
    },
  },
})
