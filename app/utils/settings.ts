export interface SettingsPage {
  slug: string
  name: string
  icon: string
}

export interface SettingsCategory {
  slug: string
  name: string
  description: string
  icon: string
  pages: SettingsPage[]
}

export const settingsCategories: SettingsCategory[] = [
  {
    slug: 'system',
    name: 'System',
    description: 'Display, sound, notifications, power',
    icon: 'fluent-mdl2:system',
    pages: [],
  },
  {
    slug: 'devices',
    name: 'Devices',
    description: 'Bluetooth, printers, mouse',
    icon: 'fluent-mdl2:devices-3',
    pages: [],
  },
  {
    slug: 'phone',
    name: 'Phone',
    description: 'Link your Android, iPhone',
    icon: 'fluent-mdl2:cell-phone',
    pages: [],
  },
  {
    slug: 'network',
    name: 'Network & Internet',
    description: 'Wi-Fi, airplane mode, VPN',
    icon: 'fluent-mdl2:globe',
    pages: [],
  },
  {
    slug: 'personalization',
    name: 'Personalization',
    description: 'Background, lock screen, colors',
    icon: 'fluent-mdl2:personalize',
    pages: [
      {
        slug: 'background',
        name: 'Background',
        icon: 'fluent-mdl2:photo-2',
      },
      {
        slug: 'colors',
        name: 'Colors',
        icon: 'fluent-mdl2:color',
      },
    ],
  },
  {
    slug: 'apps',
    name: 'Apps',
    description: 'Uninstall, defaults, optional features',
    icon: 'fluent-mdl2:all-apps',
    pages: [],
  },
  {
    slug: 'accounts',
    name: 'Accounts',
    description: 'Your accounts, email, sync, work, family',
    icon: 'fluent-mdl2:contact',
    pages: [],
  },
  {
    slug: 'time-language',
    name: 'Time & Language',
    description: 'Speech, region, date',
    icon: 'fluent-mdl2:locale-language',
    pages: [],
  },
  {
    slug: 'gaming',
    name: 'Gaming',
    description: 'Xbox Game Bar, captures, Game Mode',
    icon: 'fluent-mdl2:game',
    pages: [],
  },
  {
    slug: 'ease-of-access',
    name: 'Ease of Access',
    description: 'Narrator, magnifier, high contrast',
    icon: 'fluent-mdl2:accessibilty-checker',
    pages: [],
  },
  {
    slug: 'search',
    name: 'Search',
    description: 'Find my files, permissions',
    icon: 'fluent-mdl2:search',
    pages: [],
  },
  {
    slug: 'privacy',
    name: 'Privacy',
    description: 'Location, camera, microphone',
    icon: 'fluent-mdl2:lock',
    pages: [],
  },
  {
    slug: 'update-security',
    name: 'Update & Security',
    description: 'Windows Update, recovery, backup',
    icon: 'fluent-mdl2:sync',
    pages: [],
  },
]

// The Windows 10 accent color palette, in the same order as the Colors page
export const windowsColors = [
  '#FFB900',
  '#FF8C00',
  '#F7630C',
  '#CA5010',
  '#DA3B01',
  '#EF6950',
  '#D13438',
  '#FF4343',
  '#E74856',
  '#E81123',
  '#EA005E',
  '#C30052',
  '#E3008C',
  '#BF0077',
  '#C239B3',
  '#9A0089',
  '#0078D7',
  '#0063B1',
  '#8E8CD8',
  '#6B69D6',
  '#8764B8',
  '#744DA9',
  '#B146C2',
  '#881798',
  '#0099BC',
  '#2D7D9A',
  '#00B7C3',
  '#038387',
  '#00B294',
  '#018574',
  '#00CC6A',
  '#10893E',
  '#7A7574',
  '#5D5A58',
  '#68768A',
  '#515C6B',
  '#567C73',
  '#486860',
  '#498205',
  '#107C10',
  '#767676',
  '#4C4A48',
  '#69797E',
  '#4A5459',
  '#647C64',
  '#525E54',
  '#847545',
  '#7E735F',
]
