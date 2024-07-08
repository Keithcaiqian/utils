/**
 * 下载图片
 */
export function downloadPicture(picture: string, title?: string) {
    const link = document.createElement("a");
	document.body.appendChild(link);
	link.href = picture;
	link.download = title || "picture.png";
	link.click();
	document.body.removeChild(link);
}

// 下载文件
export function downloadFile(content: BlobPart, fileName: string, type: string = "text/plain;charset=utf-8") {
	const aTag = document.createElement("a");
	const blob = new Blob([content], { type });
	aTag.download = fileName;
	aTag.href = URL.createObjectURL(blob);
	aTag.click(); // 模拟点击
	URL.revokeObjectURL(blob as unknown as string);
	aTag.remove();
}