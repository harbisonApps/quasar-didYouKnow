<template>
    <div>
        <q-btn label="back" icon="arrow_back" flat @click="$router.go(-1)"/>
    </div>
</template>
<script>
export default {
    name: 'back-button'
}
</script>