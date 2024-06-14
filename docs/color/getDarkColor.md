---
outline: deep
---

hex颜色格式变深
```
getDarkColor(color: string, level: number): string
```

### 参数
color:  hex颜色格式,例如 #ff0000
level:  加深的程度，限0-1之间,数字越大颜色越深

### 返回
hex格式的颜色 例如 #ff0000


### demo

<div class="demo">
    <div>输入的颜色</div>
    <input type="text" v-model="hex">
    <div>加深的程度</div>
    <input type="text" v-model="deep">
    <pre>{{rgb}}</pre>
    <div class="box" :style="{background: rgb}"></div>
</div>

<script lang="ts" setup>
    import { getDarkColor } from '../../lib/color.ts';
    import { ref, computed } from 'vue';
    const hex = ref("#ff0000");
    const deep = ref(0.1);
    const rgb = computed(() => getDarkColor(hex.value, deep.value))
</script>

<style lang="less" scoped>
    .demo {
        .box {
            width: 30px;
            height: 30px;
        }
    }
</style>

### 使用
```
import { getDarkColor } from '@daitoue/utils';
const hex = getDarkColor("#ff0000")
```