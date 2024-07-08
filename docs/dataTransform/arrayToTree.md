---
outline: deep
---

一维数组数据转化为树形数组
```
arrayToTree(
    list: {
        [key: string]: any;
    }[],
    obj: {
        id?: string;
        pid?: string;
        children?: string;
    }
): {
    treeMap: {
        [id: string]: any;
    }; 
    treeList: any[];
}
```

### 参数
list:  原始数组数据
obj?：原始数组数据中id,parentId,children的别名配置

### 返回
treeMap 平铺对象
treeList 树形数组

### demo

**输入**
<div class="demo">
    <pre>{{JSON.stringify(array, null, 4)}}</pre>
</div>

**输出treeMap**
<div class="demo">
    <pre>{{JSON.stringify(treeMap, null, 4)}}</pre>
</div>

**输出treeList**
<div class="demo">
    <pre>{{JSON.stringify(treeList, null, 4)}}</pre>
</div>

<script lang="ts" setup>
    import { arrayToTree } from '../../lib/dataTransform.ts';
    import { ref, computed } from 'vue';
    window.arrayToTree = arrayToTree;
    const array = [
        {
            id: "1-1",
            name: "1-1",
            parentId: "1"
        },
        {
            id: "1",
            name: "1"
        },
        {
            id: "2",
            name: "2"
        },
        {
            id: "2-2",
            name: "2-2",
            parentId: "2"
        }
    ];
    const {treeMap, treeList} = arrayToTree(array);
    // const rgb = computed(() => HexToRgb(hex.value))
</script>

### 使用
```
import { arrayToTree } from '@daitoue/utils';
const array = [
    {
        id: "1-1",
        name: "1-1",
        parentId: "1"
    },
    {
        id: "1",
        name: "1"
    },
    {
        id: "2",
        name: "2"
    },
    {
        id: "2-2",
        name: "2-2",
        parentId: "2"
    }
];
const {treeMap, treeList} = arrayToTree(array);
```