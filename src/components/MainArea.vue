<template>
    <div class="main-area">
        <MainHeader  @toggle="toggleCalendarVisibility"/>
        <div class="main-container">
            <InboxContainer v-if="!isCalendarVisible"/>
            <MailDetail v-if="!isCalendarVisible" />
            <CalendarContainer v-if="isCalendarVisible" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import MainHeader from './MainHeader.vue';
import InboxContainer from './InboxContainer.vue';
import MailDetail from './MailDetail.vue';
import CalendarContainer from './CalendarContainer.vue';

const isCalendarVisible = ref(false);

// 可以通过一个方法来切换日历的显示状态
function toggleCalendarVisibility() {
  isCalendarVisible.value = !isCalendarVisible.value;
}
</script>

<style scoped></style>