
export function isEternalUrl(url: string): boolean {
    return url.startsWith('https') || url.startsWith('https') || url.startsWith('www');
}

export function getDate(date: string): any {
    return new Date(date)
}

type displayTimeType = "completed" | "remaining" | "incoming";

export function displayTime(type: displayTimeType, hours: number): string {
  if (type === "remaining") {
    if (hours < 1) {
      return `moins d'1h restante`;
    } else if (hours === 1) {
      return `1h restante`;
    } else if (hours > 1) {
      return `${hours}h restantes`;
    } else if (hours > 48) {
      return `${Math.ceil(hours / 24)}j restants`;
    }
  } else if (type === "completed") {
    if (hours < 1) {
      return `depuis moins d'1h`;
    } else if (hours === 1) {
      return `depuis 1h`;
    } else if (hours > 1) {
      return `depuis ${hours}h`;
    } else if (hours > 48) {
      return `depuis ${Math.ceil(hours / 24)}j`;
    }
  } else if (type === "incoming") {
    if (hours < 1) {
      return `dans moins d'1h`;
    } else if (hours === 1) {
      return `dans 1h`;
    } else if (hours > 1) {
      return `dans ${hours}h`;
    } else if (hours > 48) {
      return `dans ${Math.ceil(hours / 24)}j`;
    }
  }
  throw new Error()
}