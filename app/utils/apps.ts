import type { Component } from 'vue'
import { defineAsyncComponent, markRaw } from 'vue'

export interface AppDefinition {
  name: string
  icon: string
  component: Component
  window: {
    width: number
    height: number
    minWidth: number
    minHeight: number
  }
}

export const appDefinitions = {
  settings: {
    name: 'Settings',
    icon: 'fluent-mdl2:settings',
    component: markRaw(
      defineAsyncComponent(() => import('~/components/Apps/Uwp/Settings.vue'))
    ),
    window: {
      width: 1000,
      height: 700,
      minWidth: 500,
      minHeight: 400,
    },
  },
} satisfies Record<string, AppDefinition>

export type AppId = keyof typeof appDefinitions

export const TASKBAR_HEIGHT = 44

export const TITLE_BAR_HEIGHT = 32

export function getTitleBarSlotId(appId: AppId) {
  return `window-title-bar-${appId}`
}
