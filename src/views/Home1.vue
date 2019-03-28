<template>
    <div>
        <router-link :to= "{name: 'List'}">【列表】</router-link>
        <router-link :to= "{name: 'Detail',params:{id: 2}}">【详情】</router-link>
        <router-link :to= "{name: 'Login'}">【详情】</router-link>
        <router-link :to= "{name: 'Reg'}">【详情】</router-link>
    </div>
</template>