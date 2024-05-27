<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IEmployees } from '../models/IEmployees';
import axios from 'axios';


const employees = ref<IEmployees[]>([]);

const fetchEmployees = async () => {
    try {
        const response = await axios.get<{posts: IEmployees[] }>(
            "https://reqres.in/api/users"
        );
        employees.value = response.data.posts;
        console.log(response.data.posts);
    } catch (e) {
        console.error("Could not fetch employees");
    }
};

onMounted(fetchEmployees);
</script>

<template>
    <div class="employeesContainer">
        <div v-if="employees.length === 0">Loading...</div>
        <div v-else="">
            
        </div>
    </div>
</template>

<style scoped>
</style>
