---
outline: deep
---

下载文件
```
downloadFile(content: BlobPart, fileName: string, type: string = "text/plain;charset=utf-8"): void
```

### 参数
<p>content: 文件内容</p>
<p>fileName: 下载后的文件的名称</p>
<p>type: <a href="https://www.iana.org/assignments/media-types/media-types.xhtml">文件类型</a></p>

### demo

<div class="demo">
    <button @click="handleDownload">下载</button>
</div>

<script lang="ts" setup>
    import { downloadFile } from '../../lib/index.ts';
    window.downloadFile = downloadFile;
    function handleDownload(){
        downloadFile(["A1", "B1"], "demo", "text/csv");
    }
</script>

<style lang="less" scope>
    .image {
        width: 200px;
    }
</style>

### 使用
```
import { downloadFile } from '@daitoue/utils';
downloadFile(["A1", "B1"], "demo", "text/csv");
```