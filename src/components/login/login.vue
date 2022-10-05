<template>
    <div class="content">
        <Header></Header>
        <div class="login">
            <div class="tip">
                Please sign in with your Nokia credentials
            </div>
            <div class="usr">
                <div>Account</div>
                <input type="text" class="form">
            </div>
            <div class="pwd">
                <div>Password</div>
                <input type="password" name="pwd" class="form">
            </div>
            <div class="check">
                <input type="checkbox">Keep me logged in<br>
                <button @click="goToHome">
                    Sign in
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../common/Header.vue'
export default {
    name: 'Login',
    components: {
        Header
    },
    props: {},
    methods: {
        goToHome() {
            this.$router.push('/home')
        }
    }
};
</script>
<style scoped>
.content {
    width: 100%;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
}

.login {
    width: 50%;
    height: 60%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.login>div {
    width: 400px;
    margin: 10px 0 20px 0;
}

.login .tip {
    margin-bottom: 15%;
}

.form,
button {
    margin-top: 10px;
    width: 350px;
    height: 2em;
}

button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    border: 0px;
    border-radius: 10px;
    background-color: #79bbff;
    padding: 8px 15px;
}
</style>