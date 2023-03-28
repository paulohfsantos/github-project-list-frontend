// set types for plugins without error in project
import { ComponentCustomProperties } from 'vue'

declare module 'vue' {
  interface ComponentCustomProperties {
    $dashRemove: (str: string) => string
    $lowercase: (str: string) => string
  }
}
