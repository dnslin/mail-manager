<template>
    <div class="side-wrapper">
        <div class="project-title">Team</div>
        <div class="team-member">
            <a-tooltip :content="sender.address" position="top" v-for="sender in senderRank" :key="sender.address" background-color="rgb(154, 199, 238)">
                <img :src="sender.imgUrl" class="members">
            </a-tooltip>
        </div>
    </div>
</template>


<script setup>
import { reactive } from 'vue';
// 发件人排名
const senderRank = reactive([
        { address: 'John@gmail.com', imgUrl: "https://pan.dnslin.com/d/189/img/a.webp" },
        { address: 'Doe@testmail.com', imgUrl: "https://pan.dnslin.com/d/189/img/b.webp" },
        { address: 'Jane@unioop.com', imgUrl: "https://pan.dnslin.com/d/189/img/c.webp" },
        { address: 'Smith@qq.com', imgUrl: "https://pan.dnslin.com/d/189/img/d.webp" },
        { address: 'Tom@live.cn', imgUrl: "https://pan.dnslin.com/d/189/img/e.webp" },
    ]);

</script>

<style scoped>
.members {
  width: 36px;
  height: 36px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 10px;
} 
.team-member {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  color: rgb(154, 199, 238);
}

</style>