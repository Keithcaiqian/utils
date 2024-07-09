---
outline: deep
---

react中撤销回退操作
```
class RUndoManager<T> {
    maxStep: number; //最大撤销储存步数
    undoQueue: T[]; //撤销队列
    redoQueue: T[]; //回退队列
    onChange?: (undoQueue: T[], redoQueue: T[]) => void; //队列改变的监听
    constructor(options?: {
        maxStep?: number;
        onChange?: (undoQueue: T[], redoQueue: T[]) => void;
    });
    setData(data: T): void;
    undo(data: T): false | T | undefined;
    redo(data: T): false | T | undefined;
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
    import { RUndoManager } from '../../lib/undoManager.ts';
    import { ref, computed } from 'vue';
    window.RUndoManager = RUndoManager;

    const number = ref(1);
    const undoQueueRef = ref([]);
    const redoQueueRef = ref([]);

    const undoManager = new RUndoManager({
        onChange(undoQueue, redoQueue){
            console.log("undoChange", undoQueue, redoQueue)
            undoQueueRef.value = undoQueue;
            redoQueueRef.value = redoQueue;
        }
    })
    
    function handleAdd(){
        undoManager.setData(number.value)
        number.value++
    }
    function handleSub(){
        undoManager.setData(number.value - 1)
        number.value--
    }

    function handleUndo(){
        const value = undoManager.undo(number.value)
        if(value !== false){
            number.value = value;
        } 
    }
    function handleRedo(){
        const value = undoManager.redo(number.value)
        if(value !== false){
            number.value = value;
        }  
    }
</script>

### 使用
```
import { useState } from "react";
import { RUndoManager } from '@daitoue/utils';

const Demo = () => {
    const [number, setNumber] = useState(1);
    const [undoManager] = useState(
        new UndoManager({
            onChange(undoQueue, redoQueue){
                console.log("change", undoQueue, redoQueue)
            }
        })
    );

    function handleAdd(){
        setNumber(number + 1)
        undoManager.setData(number)
    }
    function handleSub(){
        setNumber(number - 1)
        undoManager.setData(number)
    }
    //撤销
    function handleUndo(){
        const value = undoManager.undo(number);
        if(value !== false){
            setNumber(value)
        } 
    }
    //回退
    function handleRedo(){
        const value = undoManager.redo(number)
        if(value !== false){
            setNumber(value)
        } 
    }

    return (
        <div class="demo">
            <div class="area">
                <span style="margin-right: 20px;">{number}</span>
                <button onClick="handleAdd">+</button>
                <button onClick="handleSub">-</button>
            </div>
            <button 
                class="orange"
                onClick="handleUndo"
            >撤销</button>
            <button 
                class="orange" 
                onClick="handleRedo"
            >回退</button>
        </div>
    )
}

export default Demo;

```