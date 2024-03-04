<template>
    <div class="calendar-container">
        <div class="calender-tab anim-y">
            <div class="week-month">
                <button class="button active">Week</button>
                <button class="button button-month">Month</button>
            </div>
            <div class="month-change">
                <div class="current-month">October</div>
                <div class="current-year">2020</div>
            </div>
            <div class="week-month">
                <button class="button button-weekends">Weekends</button>
                <button class="button button-task active">Add task</button>
            </div>
        </div>
        <div class="calendar-wrapper anim-y">
            <div class="calendar">
                <div class="days">Monday</div>
                <div class="days">Tuesday</div>
                <div class="days">Wednesday</div>
                <div class="days">Thursday</div>
                <div class="days">Friday</div>
                <div class="days">Saturday</div>
                <div class="days">Sunday</div>
                <div class="day not-work">31</div>
                <div class="day project-market">1
                    <div class="hover-title">Marketing</div>
                    <div class="project-detail">Sales report from last month</div>
                    <div class="project-detail">Prepare offers for clients</div>
                    <div class="popup-check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-check-square">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                    </div>
                </div>
                <div class="day">2</div>
                <div class="day project-design">3
                    <div class="project-detail design">Create 3 illustrations for blog post about design trends</div>
                </div>
                <div class="day">4</div>
                <div class="day">5</div>
                <div class="day">6</div>
                <div class="day project-develop">7
                    <div class="project-detail develop">Take part in course about future design trends and new technologies
                    </div>
                </div>
                <div class="day">8</div>
                <div class="day">9</div>
                <div class="day">10</div>
                <div class="day">11</div>
                <div class="day">12</div>
                <div class="day">13</div>
                <div class="day">14</div>
                <div class="day project-market">15
                    <div class="hover-title">Marketing</div>
                    <div class="project-detail">写一篇关于设计趋势的文章</div>
                    <div class="popup-check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-check-square">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                    </div>
                </div>
                <div class="day">16</div>
                <div class="day project-market">17
                    <div class="hover-title">Marketing</div>
                    <div class="project-detail">Create AdWords campaign</div>
                    <div class="project-detail">Send newsletter to clients</div>
                    <div class="popup-check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-check-square">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                    </div>
                </div>
                <div class="day">18</div>
                <div class="day">19</div>
                <div class="day">20</div>
                <div class="day">21</div>
                <div class="day">22</div>
                <div class="day project-finance">23
                    <div class="hover-title">Management</div>
                    <div class="project-detail finance">Redesign project ui interface for clients and get feedback</div>
                    <div class="popup-check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-check-square">
                            <path d="M9 11l3 3L22 4" />
                            <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                        </svg>
                    </div>
                </div>
                <div class="day">24</div>
                <div class="day">25</div>
                <div class="day">26</div>
                <div class="day">27</div>
                <div class="day">28</div>
                <div class="day">29</div>
                <div class="day">30</div>
                <div class="day not-work">1</div>
                <div class="day not-work">2</div>
                <div class="day not-work">3</div>
                <div class="day not-work">4</div>
            </div>
        </div>
    </div>
</template>
  

<script setup>

</script>


<style scoped></style>