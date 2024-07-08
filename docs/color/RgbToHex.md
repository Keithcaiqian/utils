---
outline: deep
---

rgb颜色格式转成hex颜色格式
```
RgbToHex(str: string): string
```

### 参数
str:  rgb颜色格式,例如 rgb(255,0,0)

### 返回
hex颜色格式 例如 #ff0000


### demo

<div class="demo">
    <input type="text" v-model="rgb">
    <pre>{{hex}}</pre>
</div>

<script lang="ts" setup>
    import { RgbToHex } from '../../lib/color.ts';
    import { ref, computed } from 'vue';
    window.RgbToHex = RgbToHex;
    const rgb = ref("rgb(255,0,0)");
    const hex = computed(() => RgbToHex(rgb.value))
</script>

### 使用
```
import { RgbToHex } from '@daitoue/utils';
const hex = RgbToHex("rgb(255,0,0)")
```