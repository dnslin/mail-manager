<template>
    <div class="user-profile-area">
        <div class="task-manager">task manager</div>
        <div class="side-wrapper">
            <div class="user-profile">
                <a-avatar :size="81">
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
    </div>
</template>

<script setup>
import UserNotification from './UserNotification.vue';
import TaskStatus from './TaskStatus.vue';
import Projects from './Projects.vue';
import Team from './Team.vue';
import { useUserStore } from '../stores/UserStore';

const { userInfo } = useUserStore();

</script>

<style scoped></style>
