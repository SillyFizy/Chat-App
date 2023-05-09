<script setup>
import ChatList from './Components/ChatList.vue';
import ChatBox from './Components/ChatBox.vue';
import ChatBubble from './Components/ChatBubble.vue';
import { ref } from 'vue';
const conversations = ref([]);
conversations.value.push({
  title: "Rowan",
  Image:"https://randomuser.me/api/portraits/women/72.jpg",
  messages: [
    {
      username: "Abbas",
      text: "Hi what up",
      outgoing: true,

    },
    {
      username: "Jasim",
      text: "Hello buddy",
      outgoing: false,

    },
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/women/76.jpg",
  title: "Alice",
  messages: [
    {
      username: "Alice",
      text: "Hi there!",
      outgoing: true
    },
    {
      username: "You",
      text: "Hey Alice, how are you?",
      outgoing: false
    },
    {
      username: "Alice",
      text: "I'm doing well, thanks! How about you?",
      outgoing: true
    }
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/men/75.jpg",
  title: "Bob",
  messages: [
    {
      username: "You",
      text: "Hey Bob, what's up?",
      outgoing: false
    },
    {
      username: "Bob",
      text: "Not much, just hanging out. How about you?",
      outgoing: true
    },
    {
      username: "You",
      text: "Same here. Just trying to stay busy!",
      outgoing: false
    }
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/men/1.jpg",
  title: "Claire",
  messages: [
    {
      username: "Claire",
      text: "Hey there!",
      outgoing: true
    },
    {
      username: "You",
      text: "Hi Claire, how's your day going?",
      outgoing: false
    },
    {
      username: "Claire",
      text: "It's going well, thanks! How about you?",
      outgoing: true
    }
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/men/4.jpg",
  title: "Dave",
  messages: [
    {
      username: "You",
      text: "Hey Dave, what are you up to?",
      outgoing: false
    },
    {
      username: "Dave",
      text: "Just working on some coding stuff. How about you?",
      outgoing: true
    },
    {
      username: "You",
      text: "Same here, actually! What are you working on?",
      outgoing: false
    }
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/women/44.jpg",
  title: "Emily",
  messages: [
    {
      username: "Emily",
      text: "Hiya!",
      outgoing: true
    },
    {
      username: "You",
      text: "Hey Emily, what's new?",
      outgoing: false
    },
    {
      username: "Emily",
      text: "Not much, just hanging out. How about you?",
      outgoing: true
    }
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/men/86.jpg",
  title: "Frank",
  messages: [
    {
      username: "You",
      text: "Hey Frank, how's it going?",
      outgoing: false
    },
    {
      username: "Frank",
      text: "Pretty good, thanks for asking. How about you?",
      outgoing: true
    },
    {
      username: "You",
      text: "I'm doing alright, just trying to stay busy.",
      outgoing: false
    }
  ]
})
conversations.value.push({
  Image:"https://randomuser.me/api/portraits/women/10.jpg",
  title: "Grace",
  messages: [
    {
      username: "Grace",
      text: "Hello!",
      outgoing: true
    },
    {
      username: "You",
      text: "Hey Grace, how are you doing?",
      outgoing: false
    },
    {
      username: "Grace",
      text: "I'm doing well, thanks for asking. How about you?",
      outgoing: true
    }
  ]
})


</script>
<template>
  <div class="container flex justify-center">
    <ChatList :conversations="conversations">
      <ChatBox :conversations="conversations"></ChatBox>
    </ChatList>
  </div>
</template>