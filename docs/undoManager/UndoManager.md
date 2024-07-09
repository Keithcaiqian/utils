---
outline: deep
---

撤销回退操作
```
class UndoManager<T> {
    currentData: T | undefined; //当前数据
    maxStep: number; //最大撤销储存步数
    undoQueue: T[]; //撤销队列
    redoQueue: T[]; //回退队列
    onChange?: (undoQueue: T[], redoQueue: T[], currentData: T) => void; //队列改变的监听
    constructor(options: {
        currentData: T;
        maxStep?: number;
        onChange?: (undoQueue: T[], redoQueue: T[], currentData: T) => void;
    });
    setData(data: T): void;
    undo(): false | T | undefined;
    redo(): false | T | undefined;
}

```
### demo

**输入**
<div class="demo">
    <div class="area">
        <span style="margin-right: 20px;">{{number}}</span>
        <button @click="handleAdd">+</button>
        <button @click="handleSub">-</button>
    </div>
    <button 
        class="orange"
        :disabled="undoQueueRef.length === 0"
        @click="handleUndo"
    >撤销</button>
    <button 
        class="orange" 
        :disabled="redoQueueRef.length === 0" 
        @click="handleRedo"
    >回退</button>
</div>

<script lang="ts" setup>
    import { UndoManager } from '../../lib/undoManager.ts';
    import { ref, computed } from 'vue';
    window.UndoManager = UndoManager;

    const number = ref(1);
    const undoQueueRef = ref([]);
    const redoQueueRef = ref([]);

    const undoManager = new UndoManager({
        currentData: number.value,
        onChange(undoQueue, redoQueue, currentData){
            console.log("undoChange", undoQueue, redoQueue, currentData)
            number.value = currentData
            undoQueueRef.value = undoQueue;
            redoQueueRef.value = redoQueue;
        }
    })
    
    function handleAdd(){
        undoManager.setData(number.value + 1)
    }
    function handleSub(){
        undoManager.setData(number.value - 1)
    }

    function handleUndo(){
        undoManager.undo()
    }
    function handleRedo(){
        undoManager.redo()
    }
</script>

### 使用
```
<template>
    <div class="demo">
        <div class="area">
            <span style="margin-right: 20px;">{{number}}</span>
            <button @click="handleAdd">+</button>
            <button @click="handleSub">-</button>
        </div>
        <button 
            class="orange"
            :disabled="undoQueueRef.length === 0"
            @click="handleUndo"
        >撤销</button>
        <button 
            class="orange" 
            :disabled="redoQueueRef.length === 0" 
            @click="handleRedo"
        >回退</button>
    </div>
</template>

<script lang="ts" setup>
    import { UndoManager } from '@daitoue/utils';
    const number = ref(1);
    const undoQueueRef = ref([]);
    const redoQueueRef = ref([]);

    const undoManager = new UndoManager({
        currentData: number.value,
        onChange(undoQueue, redoQueue, currentData){
            console.log("change", undoQueue, redoQueue, currentData)
            number.value = currentData
            undoQueueRef.value = undoQueue;
            redoQueueRef.value = redoQueue;
        }
    })
    function handleAdd(){
        undoManager.setData(number.value + 1)
    }
    function handleSub(){
        undoManager.setData(number.value - 1)
    }
    //撤销
    function handleUndo(){
        undoManager.undo()
    }
    //回退
    function handleRedo(){
        undoManager.redo()
    }
</script>
```