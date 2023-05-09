<script setup>
defineProps({
    lable:{
        type:String,
        rquired:true,
        validator(value){
            return value.length > 3
        }
    }
})
</script>
<template>
    <button class="rounded-md text-black bg-indigo-500 px-2 py-1 hover:bg-white transition-all">
        {{ lable }}
    </button>
</template>