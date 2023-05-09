<script setup>
import { computed, ref } from 'vue';
const props = defineProps({
    conversations: {
        type: [Array],
        required: true,
    },
})
const conversations = ref([]);
const messageText = ref()
const sendMessage = () => {
    conversations.value.push({
        text: messageText,
        outgoing: true,
    })
    messageText.value = ''
}
</script>
<template>
    <div class="flex bg-chatbox rounded-3xl p-3 text-bold m-3">
        <div class="w-11/12 pt-1">
            <input @keyup.enter="sendMessage" v-model="messageText" type="text"
                class="bg-transparent w-full focus:outline-none" placeholder="Type your message here...">
        </div>
        <div class="flex justify-end w-1/12">
            <button @click="sendMessage" class="bg-black rounded-3xl py-1 px-3">Send</button>
        </div>
    </div>
</template>