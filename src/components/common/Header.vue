<template>
    <div class="header">
        <div class="route">
            {{route}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: {},
    props: {},
    data() {
        return {
            route: ''
        }
    },
    created() {
        console.log(this.$route);
        this.route = this.$route.name
    }
};
</script>
<style scoped>
.header {
    width: 100%;
    height: 7%;
    background-image: linear-gradient(120deg, #ebedee 0%, #ebedee 100%);
    display: flex;
    align-items: center;
}

.route {
    font-size: 1.2em;
    margin-left: 2%;
}
</style>