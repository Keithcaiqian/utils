---
outline: deep
---

```
getLightColor(color: string, level: number): string
```

hex颜色格式变浅

### 参数
color:  hex颜色格式,例如 #ff0000
level:  变浅的程度，限0-1之间,数字越大颜色越浅

### 返回
hex格式的颜色 例如 #ff0000


### demo

<div class="container">
    <div>输入的颜色</div>
    <input v-model="hex">
    <div>变浅的程度</div>
    <input v-model="deep">
    <div>输出</div>
    <input :value="rgb">
    <div class="box" :style="{background: rgb}"></div>
</div>

<script lang="ts" setup>
    import { getLightColor } from '../../lib/color.ts';
    import { ref, computed } from 'vue';
    const hex = ref("#ff0000");
    const deep = ref(0.1);
    const rgb = computed(() => getLightColor(hex.value, deep.value))
</script>

<style lang="less" scoped>
    .container {
        padding: 14px;
        background: #888;
        margin-top: 14px;
        input {
            border: 1px solid blue;
        }
        .box {
            width: 30px;
            height: 30px;
        }
    }
</style>

### 使用
```
import { getLightColor } from '@daitoue/utils';
const hex = getLightColor("#ff0000")
```