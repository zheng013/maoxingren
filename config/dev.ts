import type { UserConfigExport } from "@tarojs/cli";
export default {
   logger: {
    quiet: false,
    stats: true
  },
  mini: {},
  h5: {},
  rn: {
    appName: 'maoxingren'
  }
} satisfies UserConfigExport<'webpack5'>
