<script setup lang="ts">

</script>

<template>
    <div class="navContainer">
        <img class="logo" src="https://vendre.se/thumb/1967/0x60/vendre-optimizers_logo-black.webp" alt="">
        <ul class="listStyle">
            <li>About Us</li>
            <li>Contact us</li>
            <li>Career</li>
        </ul>
    </div>
</template>


<style scoped>

.logo {
    width: 5em;
}

.navContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(35, 35, 35, 0.185);
    margin-bottom: 3em;
}

.listStyle {
    color: black;
    list-style-type: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    display: flex;
    gap: 1em;
    margin-left: 3em;
}

/* Satte enskilda Li här annars påverkas alla samtidigt! */
li:hover {
    color: rgba(166, 126, 202, 0.793);
    transition: 0.3s;
    cursor: pointer;
}

</style>