/**
 * hex颜色转rgb颜色
*/
export function HexToRgb(str: string) {
	const r = /^#([A-Fa-f0-9]{6})$/;
	//test方法检查在字符串中是否存在一个模式，如果存在则返回true，否则返回false
	if (!r.test(str)) return false;

	//replace替换查找的到的字符串
	str = str.replace("#", "");

	//match得到查询数组
	let hxs: any = str.match(/../g);

	for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
	return `rgb(${hxs})`;
}

/**
 * GRB颜色转Hex颜色
*/
export function RgbToHex(rgb: string) {
	console.log("rgb", rgb)
	const hexString = rgb.match(/\(([^)]*)\)/);
	const hexArr = hexString![1].split(",");
	let a = Number(hexArr[0]), b = Number(hexArr[1]), c = Number(hexArr[2]);
	let r = /^\d{1,3}$/;

	if (!r.test(a.toString()) || !r.test(b.toString()) || !r.test(c.toString())) return false;

	let hexs = [a.toString(16), b.toString(16), c.toString(16)];

	for (let i = 0; i < 3; i++) if (hexs[i].length == 1) hexs[i] = "0" + hexs[i];

	return "#" + hexs.join("");
}

/**
 * 得到hex颜色值为color的加深颜色值，level为加深的程度，限0-1之间
*/
export function getDarkColor(color: string, level: number) {
	const r = /^#([A-Fa-f0-9]{6})$/;

	if (!r.test(color)) return false;

	let rgbc: string = HexToRgb(color) as string;
	rgbc = rgbc.match(/\(([^)]*)\)/)![1];
	const rgb = rgbc.split(",").map(item => Number(item));

	//floor 向下取整
	
	for (let i = 0; i < 3; i++) rgb[i] = Math.floor(rgb[i] * (1 - level));
	return RgbToHex(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}

/**
 * 得到hex颜色值为color的减淡颜色值，level为加深的程度，限0-1之间
*/
export function getLightColor(color: string, level: number) {
	const r = /^#([A-Fa-f0-9]{6})$/;

	if (!r.test(color)) return false;

	let rgbc: string = HexToRgb(color) as string;
	rgbc = rgbc.match(/\(([^)]*)\)/)![1];
	const rgb = rgbc.split(",").map(item => Number(item));


	for (let i = 0; i < 3; i++) rgb[i] = Math.floor((255 - rgb[i]) * level + rgb[i]);

	return RgbToHex(`rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`);
}