<template>
    <div class="user-profile-area">
        <div class="task-manager">task manager</div>
        <div class="side-wrapper">
            <div class="user-profile">
                <img src="https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png" alt=""
                    class="user-photo">
                <div class="user-name">Natalie Smith</div>
                <div class="user-mail">natalie.smith@gmail.com</div>
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
</script>
