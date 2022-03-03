import { TiWeatherCloudy, TiWeatherDownpour, TiWeatherSunny,TiWeatherSnow, TiWeatherStormy } from 'react-icons/ti'

export const getWeekDay = (d) => {
    let m = d.getMonth() + 1
    let mf
    switch (m) {
        case 1:
            mf = 'Enero'
            break
        case 2:
            mf = 'Febrero'
            break
        case 3:
            mf = 'Marzo'
            break
        case 4:
            mf = 'Abril'
            break
        case 5:
            mf = 'Mayo'
            break
        case 6:
            mf = 'Junio'
            break
        case 7:
            mf = 'Julio'
            break
        case 8:
            mf = 'Agosto'
            break
        case 9:
            mf = 'Septiembre'
            break
        case 10:
            mf = 'Ouctubre'
            break
        case 11:
            mf = 'Noviembre'
            break
        case 12:
            mf = 'Diciembre'
            break
        default:
            break;
    }
    const dateFormat = `${d.getDate()} ${mf}`

    let wd = d.getDay()
    switch (wd) {
        case 0:
            return `Domingo, ${dateFormat}`
        case 1:
            return `Lunes, ${dateFormat}`
        case 2:
            return `Martes, ${dateFormat}`
        case 3:
            return `Miercoles, ${dateFormat}`
        case 4:
            return `Jueves, ${dateFormat}`
        case 5:
            return `Viernes, ${dateFormat}`
        case 6:
            return `Sábado, ${dateFormat}`
        default:
            break;
    }
}

export const getIcon = (id) => {
    if (id === 2 || id === 3 || id === 4 || id === 5 || id === 16 || id === 17 || id === 24 || id === 25 || id === 26 || id === 27) {
        return <TiWeatherCloudy /> //céu nublado
    } else if (id === 6 || id === 7 || id === 8 || id === 9 || id === 10 || id === 11 || id === 12 || id === 13 || id === 14 || id === 15 || id === 21) {
        return <TiWeatherDownpour /> //chuva
    } else if (id === 1) {
        return <TiWeatherSunny /> //ceu limpo
    } else if (id === 18 || id === 22) {
        return <TiWeatherSnow /> //neve
    } else if (id === 19 || id === 20 || id === 23) {
        return <TiWeatherStormy /> //tempestade
    }
}