<template>
    <div class="p-4 border rounded-lg shadow-md bg-white">
        <p class="text-gray-600"><strong>First Name:</strong> {{ student.firstName }}</p>
        <p class="text-gray-600"><strong>Last Name:</strong> {{ student.lastName }}</p>
        <p class="text-gray-600"><strong>Email:</strong> {{ student.email }}</p>
        <p class="text-gray-600"><strong>Telegram:</strong> {{ student.telegram }}</p>
        <p class="text-gray-600"><strong>Country:</strong> {{ student.country }}</p>
        <p class="text-gray-600"><strong>Timezone:</strong> {{ student.timeZone }}</p>
    </div>
</template>

<script setup>
defineProps({
    student: {
        type: Object,
        required: true,
    },
});
</script>
