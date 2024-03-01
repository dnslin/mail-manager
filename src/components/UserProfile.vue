<template>
    <div class="user-profile-area">
        <div class="task-manager">task manager</div>
        <div class="side-wrapper">
            <div class="user-profile">
                <a-avatar @click="handleClick" :size="81">
                    <img alt="avatar" style="object-fit: cover;" :src=userInfo.url /></a-avatar>
                <div class="user-name">{{ userInfo.name }}</div>
                <div class="user-mail">{{ userInfo.email }}</div>
            </div>
            <UserNotification />
            <div class="progress-status">12/34</div>
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
            <TaskStatus />
        </div>
        <Projects />
        <Team />
        <a-modal v-model:visible="visible" title="个人信息" @cancel="handleCancel" @before-ok="handleBeforeOk">
            <a-form :model="userInfo">
                <a-avatar :size="108" class="avatar-form-item">
                    <img alt="avatar" style="object-fit: cover;" :src=userInfo.url /></a-avatar>
                <a-form-item field="name" label="昵称:">
                    <a-input v-model="userInfo.name" />
                </a-form-item>
                <a-form-item field="email" label="邮箱地址:">
                    <a-input v-model="userInfo.email" />
                </a-form-item>
            </a-form>
        </a-modal>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import UserNotification from './UserNotification.vue';
import TaskStatus from './TaskStatus.vue';
import Projects from './Projects.vue';
import Team from './Team.vue';

const userInfo = reactive({
    name: '林祈',
    email: 'i@dnsl.in',
    url: 'https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png',
});
const visible = ref(false);

const handleClick = () => {
    visible.value = true;
};
const handleBeforeOk = (done) => {
    window.setTimeout(() => {
        done();
        // prevent close
        // done(false)
    }, 1000);
};
const handleCancel = () => {
    visible.value = false;
};
</script>

<style scoped>
.avatar-form-item {
    margin: auto;
}
</style>
