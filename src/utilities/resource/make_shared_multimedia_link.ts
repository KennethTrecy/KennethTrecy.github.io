export default function(imageID: string, intrinsicWidth: number): string {
	return `https://drive.google.com/thumbnail?id=${imageID}&sz=w${intrinsicWidth}`
}
