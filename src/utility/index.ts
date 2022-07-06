import {
  IAuthTokens,
  TokenRefreshRequest,
  applyAuthTokenInterceptor,
} from "axios-jwt"
import axios from "axios"
import { displayTimeType } from "./../types"
import { BASE_API_URL } from "@const/index"

export function isEternalUrl(url: string): boolean {
  return (
    url.startsWith("https") || url.startsWith("https") || url.startsWith("www")
  )
}
export function getBlopUrlFromFile(file: File): string {
  return URL.createObjectURL(file)
}

export function getDate(date: string): any {
  return new Date(date)
}

export const getDateWithoutHours = (createdAt: string) => {
  let date = getDate(createdAt)
  let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  let month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
  let formatDate = `${day}/${month}/${date.getFullYear()}`

  return formatDate
}

export function displayTime(type: displayTimeType, hours: number): string {
  if (type === "remaining") {
    if (hours < 1) {
      return `moins d'1h restante`
    } else if (hours === 1) {
      return `1h restante`
    } else if (hours > 1) {
      return `${hours}h restantes`
    } else if (hours > 48) {
      return `${Math.ceil(hours / 24)}j restants`
    }
  } else if (type === "completed") {
    if (hours < 1) {
      return `depuis moins d'1h`
    } else if (hours === 1) {
      return `depuis 1h`
    } else if (hours > 1) {
      return `depuis ${hours}h`
    } else if (hours > 48) {
      return `depuis ${Math.ceil(hours / 24)}j`
    }
  } else if (type === "incoming") {
    if (hours < 1) {
      return `dans moins d'1h`
    } else if (hours === 1) {
      return `dans 1h`
    } else if (hours > 1) {
      return `dans ${hours}h`
    } else if (hours > 48) {
      return `dans ${Math.ceil(hours / 24)}j`
    }
  }
  throw new Error()
}

export function checkReservationState(reservation, todaysDate: number): displayTimeType {
    // diff en seconde
    const diff = (todaysDate - getDate(reservation.date_start)) / 1000
    // à venir
    if(diff < 0) return 'incoming'
    // terminées
    if(diff - (reservation.duration * 86400) > 0) return 'completed'
    // en cours
    return 'remaining'
}

export const makeCaseAndAccentInsensitiveString = (param) => {
  return param.toLowerCase()
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
}

export const windowIsNotReady = () => {
  return (typeof window == "undefined" ||
  typeof window.localStorage == "undefined")
}

// Axios jwt utility

// 1. Create an axios instance that you wish to apply the interceptor to
export const axiosInstance = axios.create({ baseURL: BASE_API_URL })
// 2. Define token refresh function.
const requestRefresh: TokenRefreshRequest = async (
  refreshToken: string
): Promise<IAuthTokens | string> => {
  // Important! Do NOT use the axios instance that you supplied to applyAuthTokenInterceptor (in our case 'axiosInstance')
  // because this will result in an infinite loop when trying to refresh the token.
  // Use the global axios client or a different instance
  const response = await axios.post(`${BASE_API_URL}/auth/refresh_token`, {
    token: refreshToken,
  })

  // If your backend supports rotating refresh tokens, you may also choose to return an object containing both tokens:
  // return {
  //  accessToken: response.data.access_token,
  //  refreshToken: response.data.refresh_token
  //}

  return response.data.access_token
}

applyAuthTokenInterceptor(axiosInstance, { requestRefresh })
