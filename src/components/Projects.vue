<template>
    <div class="side-wrapper">
        <div class="project-title">标签列表</div>
        <div class="project-name">
            <div class="project-department" v-for="(project, index) in projectList" :key="index">{{ project.department
                }}</div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const projectList = ref([
    { key: '垃圾广告', department: '垃圾广告' },
    { key: '论坛网站', department: '论坛网站' },
    { key: '科技周刊', department: '科技周刊' },
    { key: '服务订阅', department: '服务订阅' }
])

</script>