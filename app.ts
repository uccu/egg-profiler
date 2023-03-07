import fs from 'fs'
import path from 'path'
import moment from 'moment'
import process from 'process'
import { Application } from "egg"
import { startProfiling, stopProfiling, setGenerateType } from 'v8-profiler-next'

export default (app: Application) => {

    setGenerateType(1)

    app.messenger.on('profiling', async time => {
        startProfiling('CPU profile')
        await new Promise(r => setTimeout(r, time))
        const profile = stopProfiling()
        const cpuprofile = path.join(`${app.config.eggProfiler.name}-${moment().format(app.config.eggProfiler.timeFormate)}-${process.ppid}-${process.pid}.cpuprofile`)
        profile
            .export()
            .pipe(fs.createWriteStream(cpuprofile))
            .on('finish', () => profile.delete())
    })

    app.profiler = {
        profiling: (time: number) => app.messenger.sendToApp('profiling', time)
    }
    app.coreLogger.info(`[egg-profiler] instance[${process.pid}] status OK`)

}