---
outline: deep
---

下载图片(不支持跨域下载)
```
downloadPicture(picture: string, title?: string): void
```

### 参数
<p>picture: 图片链接</p>
<p>title?: 下载后的图片的名称</p>

### demo

<div class="demo">
    <img class="image" :src="link"></img>
    <button @click="handleDownload">下载</button>
</div>

<script lang="ts" setup>
    import { downloadPicture } from '../../lib/index.ts';
    import { ref, computed } from 'vue';
    window.downloadPicture = downloadPicture;
    const link = ref("/demo.png");

    function handleDownload(){
        downloadPicture(link.value, "demo.png");
    }
</script>

<style lang="less" scope>
    .image {
        width: 200px;
    }
</style>

### 使用
```
import { downloadPicture } from '@daitoue/utils';
downloadPicture("/demo.png", "demo.png");
```