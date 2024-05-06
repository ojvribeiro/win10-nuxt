export const useSettingsStore = defineStore('settings', {
  state() {
    return {
      system: {},

      personalization: {
        background: {
          type: 'picture',
          picture: {
            path: '/img/wallpaper/windows10.jpg',
            fit: 'fill',
            position: 'center',
          },
        },
      },
    }
  },
})
