<template>
    <div>
        <q-btn color="secondary" @click="$router.go(-1)">back</q-btn>
    </div>
</template>
<script>
export default {
    name: 'back-button'
}
</script>