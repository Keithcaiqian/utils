/**
 * @description: 数组转成树
 * @param {Array} list 原始数组数据
 * @param {Object} obj 原始数组数据中id,parentId,children的别名配置
 * @returns {Object} 返回 treeMap平铺对象和treeList树形数组
 */
export const arrayToTree = (
	list: {
        [key: string]: any;
    }[],
	obj?: {
		id?: string;
		pid?: string;
		children?: string;
	}
): {
	treeMap: {
		[id: string]: any;
	}; 
	treeList: any[];
} => {
	const id = obj?.id || "id";
	const pid = obj?.pid || "parentId";
	const children: string = obj?.children || "children";
	const idMap: {
		[id: string]: {
			[props: string]: any;
		};
	} = {};
	const treeList: any[] = [];
	list.forEach(function (v) {
		idMap[v[id]] = v;
	});
	list.forEach(function (v) {
		const parent = idMap[v[pid]];
		if (parent) {
			!parent[children] && (parent[children] = []);
			parent[children].push(v);
		} else {
			treeList.push(v);
		}
	});
	return {
		treeMap: idMap,
		treeList
	};
};