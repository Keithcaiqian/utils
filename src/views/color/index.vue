<template>
    <div class="list">
        <a-space class="listItem">
            <a-input v-model:value="deepColor" placeholder="Basic usage" />
            <a-input v-model:value="deepNum" placeholder="Basic usage" />
            <div class="res" :style="{
                backgroundColor: getDarkColor(deepColor, deepNum) || 'none'
            }"></div>
        </a-space>
    </div>
</template>

<script lang="ts" setup>
    // import { getDarkColor } from '$/lib/index';
    import { getDarkColor } from '@daitoue/utils';
    import { ref } from 'vue';
    const deepColor = ref("#f00");
    const deepNum = ref(0.2);
</script>

<style lang="less" scoped>
    .list {
        .listItem {
            display: flex;
            .res {
                width: 10px;
                height: 10px;
            }
        }
    }
</style>