<template>
    <div class="inbox-container">
        <div class="inbox">
            <div v-for="msg in messages" :key="msg.id" class="msg" :class="{ 'selected-bg': msg.selected }">
                <input type="checkbox" v-model="msg.selected" :name="msg.id" :id="msg.id" class="mail-choice">
                <label :for="msg.id"></label>
                <div class="msg-content">
                    <div class="msg-title">{{ msg.title }}</div>
                    <div class="msg-date">{{ msg.date }}</div>
                </div>
                <img :src="msg.imgSrc" alt="" class="members mail-members">
            </div>
        </div>
        <div class="add-task">
            <button class="add-button">新建邮件</button>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue';
import data1 from '../test/data1';

// 页面挂载时，初始化数据
const messages = ref(data1);
</script>
  


<style scoped></style>