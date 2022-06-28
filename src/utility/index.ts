export function isEternalUrl(url: string): boolean {
  return (
    url.startsWith("https") || url.startsWith("https") || url.startsWith("www")
  );
}
export function getBlopUrlFromFile(file: File): string {
  return URL.createObjectURL(file);
}
