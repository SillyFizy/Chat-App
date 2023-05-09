<script setup>
import ChatBubble from './ChatBubble.vue';
import ChatBox from './ChatBox.vue';
import { computed, ref } from 'vue';
const props = defineProps({
    conversations: {
        type: [Array],
        required: true,
    }

})
const selectedConversationIndex = ref();
const currentConversation = computed(() => {
    return props.conversations[selectedConversationIndex.value]
})
</script>
<template>
    <div class="flex w-full text-black m-6">
        <div class="w-1/4 flex flex-col bg-sidebar text-gray-100 rounded-md pt-5">
            <div class="flex items-center ml-6 w-full">
                <img class="rounded-full w-1/6" src="https://randomuser.me/api/portraits/men/43.jpg" alt="">
                <div class="ml-3 font-bold">Ahmed Ali</div>
            </div>
            <div @click="selectedConversationIndex = index, clicked" v-for="(conversation, index) in conversations"
                class="p-4 ml-6 cursor-pointer shadow-md bg-container rounded-full rounded-r-none mt-4">
                <div class="flex">
                    <img class="w-1/12 rounded-full" :src="conversation.Image" alt="">
                    <span class="ml-2 font-bold">{{ conversation.title }}</span>
                </div>
            </div>
        </div>
        <div class="flex flex-col justify-end w-4/5 bg-conversation text-white rounded-md h-[95.25vh]">
            <div v-if="currentConversation != null" class="flex flex-col w-full px-4 mb-3">
                <ChatBubble v-for="message in currentConversation.messages" :message="message">
                </ChatBubble>
            </div>
            <div v-else class="flex justify-center h-full items-center text-4xl">
                Select a conversation
            </div>
            <div v-if="currentConversation != null">
                <ChatBox :conversations="conversations"></ChatBox>
            </div>
        </div>
    </div>
</template>