<script setup>
const props = defineProps(['message'])

</script>
<template>
    <div class="flex self-start bg-bubble text-white text-xl font-extrabold p-4 rounded-full mt-3"
        :class="{ 'bg-outgoing self-end': message.outgoing }">
        <div v-if="!message.outgoing" class="">
            <div v-for="(conversation, index) in conversations" ><img class="rounded-3xl w-10" :src="conversation.Image" alt=""></div>
        </div>
        <p class="m-2 flex justify-center items-center">{{ message.text }}</p>
    </div>
</template>