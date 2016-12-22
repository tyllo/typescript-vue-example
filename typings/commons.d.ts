declare enum ENV {}

interface process {
  ENV: ENV,
}

declare module 'vue' {
  import * as V from 'vue'
  export const t: typeof V
}