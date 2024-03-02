import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userInfo: {
            name: '林祈',
            email: 'i@dnsl.in',
            url: 'https://assets.codepen.io/3364143/Screen+Shot+2020-08-01+at+12.24.16.png',
        },
    }),
});
