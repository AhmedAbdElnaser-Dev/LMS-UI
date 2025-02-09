<template>
    <section class="login__area pt-110 pb-110">
        <div class="container">
            <div class="login__inner p-relative z-index-1">
                <div class="row justify-content-center">
                    <div class="col-xl-6 col-lg-8 col-md-10">
                        <div class="login__wrapper">
                            <div class="login__top mb-30 text-center">
                                <h3 class="login__title">Forgot Password?</h3>
                                <p>Enter your email address to request password reset.</p>
                            </div>
                            <div class="login__form">
                                <form class="text-center" @submit.prevent="handleSubmit">
                                    <div class="login__input-wrapper">
                                        <div class="login__input-item">
                                            <div class="signup-wrapper">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sing-buttom d-inline-block mx-auto px-5 mb-20">
                                        <button type="submit">
                                            Send Request
                                        </button>
                                    </div>
                                </form>
                                <div class="login__register-now text-center">
                                    <p>
                                        Remember your password? <NuxtLink to="/signin">Login</NuxtLink>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    methods: {
        handleSubmit() { }
    }
}
</script>