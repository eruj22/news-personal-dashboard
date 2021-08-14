import sunny from "../assets/sunny.png"
import cloudy_sunny from "../assets/cloudy_sunny.png"
import cloudy from "../assets/cloudy.png"
import foggy from "../assets/foggy.png"
import raining from "../assets/raining.png"
import snowing from "../assets/snowing.png"
import snowy from "../assets/snowy.png"
import lightning from "../assets/lightning.png"
import drip from "../assets/drip.png"

export const saveToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
}

export const getFromLocalStorage = (name) => {
    return localStorage.getItem(name)
}

export const weatherIcon = (code) => {
    let imgLink = ""
    switch(code) {
        case 113:
          imgLink = sunny
          break;
        case 116:
          imgLink = cloudy_sunny
          break;
        case 119:
          imgLink = cloudy
          break;
        case 122:
          imgLink = cloudy_sunny
          break;
        case 143:
          imgLink = foggy
          break;
        case 176:
          imgLink = raining
          break;
        case 179:
          imgLink = snowing
          break;
        case 182:
          imgLink = snowing
          break;
        case 182:
          imgLink = snowy
          break;
        case 200:
          imgLink = lightning
          break;
        case 227:
          imgLink = snowing
          break;
        case 230:
          imgLink = snowing
          break;
        case 248:
          imgLink = foggy
          break;
        case 260:
          imgLink = foggy
          break;
        case 263:
          imgLink = drip
          break;
        case 266:
          imgLink = drip
          break;
        case 281:
          imgLink = drip
          break;
        case 284:
          imgLink = drip
          break;
        case 293:
          imgLink = drip
          break;
        case 293:
          imgLink = drip
          break;
        case 296:
          imgLink = drip
          break;
        case 299:
          imgLink = raining
          break;
        case 302:
          imgLink = raining
          break;
        case 305:
          imgLink = raining
          break;
        case 308:
          imgLink = raining
          break;
        case 311:
          imgLink = drip
          break;
        default:
          imgLink = ""
          break;
    }
    return imgLink
}