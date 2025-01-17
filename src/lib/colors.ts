// src/lib/colors.ts

export const darkTheme = {
  // 主色调：高级灰
  primary: {
    50: '#F7F7F8',
    100: '#EEEEF0',
    200: '#D8D9DC',
    300: '#B4B6BB',
    400: '#8E9095',
    500: '#6B6D73',  // 主要文字
    600: '#4D4F54',  // 次要文字
    700: '#36383C',  // 背景色
    800: '#232529',  // 卡片背景
    900: '#18191C',  // 深色背景
  },

  // 强调色：高级金
  accent: {
    50: '#FFF9F0',
    100: '#FFF2DB',
    200: '#FFE4B7',
    300: '#FFD693',
    400: '#FFC56F',
    500: '#FFB44B', // 主要强调色
    600: '#CC903C',
    700: '#996C2D',
    800: '#66481E',
    900: '#33240F',
  },

  // 特殊状态色
  state: {
    success: '#4CAF50',
    warning: '#FFB44B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // 渐变色
  gradient: {
    primary: 'linear-gradient(135deg, #232529 0%, #36383C 100%)',
    accent: 'linear-gradient(135deg, #FFB44B 0%, #FFC56F 100%)',
    surface: 'linear-gradient(135deg, rgba(35,37,41,0.8) 0%, rgba(54,56,60,0.8) 100%)',
  },
  
  // 纹理
  texture: {
    noise: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
  }
}