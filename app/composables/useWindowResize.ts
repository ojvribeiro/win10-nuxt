import type { MaybeRefOrGetter } from 'vue'
import type { AppWindow } from '~/stores/apps'
import { useEventListener } from '@vueuse/core'

export type ResizeDirection = 'n' | 's' | 'e' | 'w' | 'ne' | 'nw' | 'se' | 'sw'

interface MinSize {
  width: number
  height: number
}

export function useWindowResize(
  target: MaybeRefOrGetter<AppWindow | undefined>,
  minSize: MaybeRefOrGetter<MinSize>
) {
  const isResizing = ref(false)

  let direction: ResizeDirection | null = null

  let start = {
    pointerX: 0,
    pointerY: 0,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  }

  function startResize(resizeDirection: ResizeDirection, event: PointerEvent) {
    const appWindow = toValue(target)

    if (!appWindow || event.button !== 0) {
      return
    }

    event.preventDefault()

    direction = resizeDirection

    start = {
      pointerX: event.clientX,
      pointerY: event.clientY,
      ...appWindow.position,
      ...appWindow.size,
    }

    isResizing.value = true
  }

  useEventListener(window, 'pointermove', (event: PointerEvent) => {
    const appWindow = toValue(target)

    if (!isResizing.value || !direction || !appWindow) {
      return
    }

    const { width: minWidth, height: minHeight } = toValue(minSize)

    const deltaX = event.clientX - start.pointerX
    const deltaY = event.clientY - start.pointerY

    if (direction.includes('e')) {
      appWindow.size.width = Math.max(minWidth, start.width + deltaX)
    }

    if (direction.includes('s')) {
      appWindow.size.height = Math.max(
        minHeight,
        Math.min(
          start.height + deltaY,
          window.innerHeight - TASKBAR_HEIGHT - start.y
        )
      )
    }

    if (direction.includes('w')) {
      const width = Math.max(minWidth, start.width - deltaX)

      appWindow.size.width = width
      appWindow.position.x = start.x + start.width - width
    }

    if (direction.includes('n')) {
      // The title bar can't go above the top of the screen
      const height = Math.min(
        Math.max(minHeight, start.height - deltaY),
        start.y + start.height
      )

      appWindow.size.height = height
      appWindow.position.y = start.y + start.height - height
    }
  })

  useEventListener(window, ['pointerup', 'pointercancel'], () => {
    isResizing.value = false
    direction = null
  })

  return {
    isResizing,
    startResize,
  }
}
