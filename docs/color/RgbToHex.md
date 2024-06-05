---
outline: deep
---

```
RgbToHex(str: string): string
```

rgb颜色格式转成hex颜色格式

### 参数
str:  rgb颜色格式,例如 rgb(255,0,0)

### 返回
hex颜色格式 例如 #ff0000


### demo

<div class="container">
    <div>输入</div>
    <input v-model="rgb">
    <div>输出</div>
    <input :value="hex">
</div>

<script lang="ts" setup>
    import { RgbToHex } from '../../lib/color.ts';
    import { ref, computed } from 'vue';
    const rgb = ref("rgb(255,0,0)");
    const hex = computed(() => RgbToHex(rgb.value))
</script>

<style lang="less" scoped>
    .container {
        padding: 14px;
        background: #888;
        margin-top: 14px;
        input {
            border: 1px solid blue;
        }
    }
</style>

### 使用
```
import { RgbToHex } from '@daitoue/utils';
const hex = RgbToHex("rgb(255,0,0)")
```