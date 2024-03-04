<template>
    <div class="mail-contents">
        <div class="mail-contents-subject">
            <input type="checkbox" name="msg" id="mail20" class="mail-choice" checked>
            <label for="mail20"></label>
            <div class="mail-contents-title">写一篇关于设计的文章</div>
        </div>
        <div class="mail">
            <div class="mail-time">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-clock">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                </svg>
                {{ new Date('12 Mar, 2019').toISOString().split('T')[0] }}
            </div>
            <div class="mail-inside">
                在夜幕的笼罩下，星星在宇宙的喜悦中闪烁，
                风的低语在寂静的困境中回响，
                一个灵魂徘徊在迷宫般的梦境中，
                现实与幻想在溪流中起舞。
                在黎明苏醒的寂静中，
                金色的光芒重新照亮天空，
                生命的交响乐，辽阔的画布，
                每一刻都是一笔财富，稍纵即逝，却坚如磐石。
                让我们用燃烧的心来把握这一天，
                拥抱未知，因为它并不驯服，
                在存在的织锦中，我们留下了自己的印记，
                穿越光明与黑暗的奇妙之旅。
                所以让我们珍惜每一步，
                因为生命是我们共同参与的旋律，
                在每一次呼吸中，一个不为人知的故事，
                在每一个节拍中，都有一个值得一看的故事。.</div>
            <div class="mail-assign">
                <div class="assignee">
                    <strong>奥克拉·诺瓦克</strong> 分配给娜塔莉·史密斯.
                    <span class="assign-date">{{ new Date('25 Nov, 2019').toISOString().split('T')[0] }}</span>
                </div>
                <div class="assignee">
                    <strong>奥克拉·诺瓦克</strong> 添加到营销中.
                    <span class="assign-date">{{ new Date('18 Feb, 2019').toISOString().split('T')[0] }}</span>
                </div>
                <div class="assignee">
                    <strong>奥克拉·诺瓦克 </strong> 已创建的任务.
                    <span class="assign-date">{{ new Date('18 Feb, 2019').toISOString().split('T')[0] }}</span>
                </div>
            </div>
            <div class="mail-checklist">
                <input type="checkbox" name="msg" id="mail30" class="mail-choice" checked>
                <label for="mail30">娜塔莉.史密斯完成了这项任务.</label>
                <div class="mail-checklist-date">{{ new Date('19 May, 2020').toISOString().split('T')[0] }}</div>
            </div>
            <div class="mail-doc">
                <div class="mail-doc-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-file-text">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
                    </svg>
                    <div class="mail-doc-detail">
                        <div class="mail-doc-name">Article.docx</div>
                        <div class="mail-doc-date">添加日期：2020年5月17日</div>
                    </div>
                </div>
                <div class="mail-doc-icons">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-trash-2">
                        <path
                            d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2M10 11v6M14 11v6" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="feather feather-download-cloud">
                        <path d="M8 17l4 4 4-4M12 12v9" />
                        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>


<style scoped></style>