
<template>
    <v-app>
        <v-btn small color="primary"> v-app</v-btn>
        <LoginViewComponent />
    </v-app>
</template>

<script>
import LoginViewComponent from "./LoginViewComponent.vue"
    export default {
    mounted() {
        console.log("Component mounted.");
    },
    components: { LoginViewComponent }
}
</script>