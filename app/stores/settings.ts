export type BackgroundType = 'picture' | 'solid'

export type BackgroundFit =
  'fill' | 'fit' | 'stretch' | 'tile' | 'center' | 'span'

export const useSettingsStore = defineStore('settings', {
  state() {
    return {
      system: {},

      personalization: {
        background: {
          type: 'picture' as BackgroundType,
          picture: {
            path: '/img/wallpaper/windows10.jpg',
            fit: 'fill' as BackgroundFit,
            position: 'center',
          },
          recentPictures: [
            '/img/wallpaper/windows10.jpg',
            '/img/wallpaper/tetris.png',
          ],
          solid: {
            color: '#0063B1',
          },
        },

        colors: {
          accent: '#0078D7',
          showAccentOnTitleBars: false,
        },
      },
    }
  },

  actions: {
    addRecentPicture(path: string) {
      const { background } = this.personalization

      const pictures = [
        path,
        ...background.recentPictures.filter((picture) => picture !== path),
      ]

      // Pictures from "Browse" are object URLs, free the ones that drop off the list
      pictures
        .slice(5)
        .filter((picture) => picture.startsWith('blob:'))
        .forEach((picture) => URL.revokeObjectURL(picture))

      background.recentPictures = pictures.slice(0, 5)
      background.picture.path = path
    },
  },
})
