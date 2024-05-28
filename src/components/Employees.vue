<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { IEmployees } from '../models/IEmployees';
import axios from 'axios';


const employees = ref<IEmployees[]>([]);
const sortDirection = ref<'asc' | 'desc'>('asc');

const fetchEmployees = async () => {
    try {
        const response = await axios.get<{data: IEmployees[] }>(
            "https://reqres.in/api/users"
        );
        employees.value = response.data.data;
        console.log(response.data.data);
    } catch (e) {
        console.error("Could not fetch employees");
    }
};

const sortEmployees = () => {
    employees.value = employees.value.slice().sort((a, b) => {
        const nameA = `${a.first_name} ${a.last_name}`.toLowerCase();
        const nameB = `${b.first_name} ${b.last_name}`.toLowerCase();
        if(sortDirection.value === 'asc') {
            return nameA < nameB ? -1 : nameA > nameB ? 1:0;
        } else {
            return nameA > nameB ? -1 : nameA < nameB ? 1:0
        }
    });
};

const toggleSortDirection = () => {
    sortDirection.value = sortDirection.value === 'asc' ? 'desc' : 'asc';
    sortEmployees();
}

onMounted(fetchEmployees);
</script>

<template>
    <div>
        <div v-if="employees.length === 0">Loading...</div>
        <div v-else>
            <div>
                <h2 class="paginationArrows" @click="toggleSortDirection">⬆️⬇️</h2>
            </div>
            <div class="flexContainer">
            <h2 class="ourEmployeesHeader">Our Employees</h2>
            <ul class="employeesContainer">
                <li v-for="employee in employees" :key="employee.id">
                    <div class="employeeRow">
                    <img class="employeeImage" :src="employee.avatar" :alt="`${employee.first_name} ${employee.last_name}`" />
                    <p class="employeeNames">{{ employee.first_name }} {{ employee.last_name }}</p>
                    <a :href="`mailto:${employee.email}`" class="employeeEmail">{{ employee.email }}</a>
                    </div>
                </li>
            </ul>
         </div>
        </div>
    </div>
</template>

<style scoped>

.paginationArrows {
    display: flex;
    cursor: pointer;
}

.flexContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.ourEmployeesHeader {
    color: black;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 1px;
    font-weight: 400;
}

.employeesContainer {
    display: flex;
    flex-direction: column;
}

.employeeRow {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-bottom: 2em;
}

li {
    list-style-type: none;
}

.employeeImage {
    width: 5rem;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 5px 5px 10px rgb(40, 39, 39);
}

.employeeNames {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: black;
    cursor: pointer;
}


.employeeEmail {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    color: black;
    cursor: pointer;
}

.employeeEmail:hover, .employeeNames:hover {
    color: rgba(166, 126, 202, 0.793);
    transition: 0.5s;
}

.employeeImage:hover {
    opacity: 80%;
    transition: 0.3s;
}

@media (max-width: 768px) {
    .employeeImage {
        width: 15%;
    }
    .employeeNames {
        font-size: 0.7em;
    }
    .employeeEmail {
        font-size: 0.7em;
    }
}

@media (min-width: 768px) {
    .employeesContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 5em;
        margin-top: 2em;
    }
}
</style>
