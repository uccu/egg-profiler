import { EggAppConfig, PowerPartial } from 'egg';

export default function () {
    const config = {} as PowerPartial<EggAppConfig>;

    config.eggProfiler = {
        name: 'profiling',
        timeFormate: 'YYYYMMDD-HHmmssSSS'
    };


    return {
        ...config,
    };
}