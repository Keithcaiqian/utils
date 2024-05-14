/**
 * hex颜色转rgb颜色
*/
export function HexToRgb(str: string) {
	const r = /^#([A-Fa-f0-9]{6})$/;
	r.test(str);

	//test方法检查在字符串中是否存在一个模式，如果存在则返回true，否则返回false
	if (!r.test(str)) return false;

	//replace替换查找的到的字符串
	str = str.replace("#", "");

	//match得到查询数组
	let hxs: any = str.match(/../g);

	for (let i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);

	return hxs;
}

/**
 * GRB颜色转Hex颜色
*/
export function RgbToHex(a: number, b: number, c: number) {
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

	let rgbc = HexToRgb(color);

	//floor 向下取整

	for (let i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));

	return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}

/**
 * 得到hex颜色值为color的减淡颜色值，level为加深的程度，限0-1之间
*/
export function getLightColor(color: string, level: number) {
	const r = /^#([A-Fa-f0-9]{6})$/;

	if (!r.test(color)) return false;

	let rgbc = HexToRgb(color);

	for (let i = 0; i < 3; i++) rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i]);

	return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
}