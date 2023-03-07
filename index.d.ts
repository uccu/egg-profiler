// import * as CacheService from './app/service/CacheService'


interface EggRedisOptions {
  name?: string
  timeFormate?: string
}

interface Profiler {
  profiling: (time: number) => void
}


declare module 'egg' {
  interface Application {
    profiler: Profiler
  }

  interface EggAppConfig {
    eggProfiler: EggRedisOptions
  }
}
