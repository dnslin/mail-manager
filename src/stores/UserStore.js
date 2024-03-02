import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        userInfo: {
            name: '林祈',
            email: 'i@dnsl.in',
            url: 'https://pan.dnslin.com/d/cn/temp/title.png',
        },
    }),
});
