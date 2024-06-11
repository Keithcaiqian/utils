---
outline: deep
---

```
HexToRgb(str: string): string
```

hex颜色格式转成rgb颜色格式

### 参数
str:  hex颜色格式,例如 #ff0000

### 返回
rgb颜色格式 例如 rgb(255,0,0)


### demo

<div class="demo">
    <input type="text" v-model="hex">
    <pre>{{rgb}}</pre>
</div>

<script lang="ts" setup>
    import { HexToRgb } from '../../lib/color.ts';
    import { ref, computed } from 'vue';
    const hex = ref("#ff0000");
    const rgb = computed(() => HexToRgb(hex.value))
</script>

### 使用
```
import { HexToRgb } from '@daitoue/utils';
const rgb = HexToRgb("#ff0000")
```