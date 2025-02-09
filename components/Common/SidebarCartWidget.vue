<template>
    <div class="cartmini__widget">
        <div class="cartmini__inner">
            <ul>
                <li>
                    <div class="cartmini__thumb">
                        <NuxtLink to="/cart"><img src="/img/products/product-thumb-01.png" alt="image not found"></NuxtLink>
                    </div>
                    <div class="cartmini__content">
                        <h5>
                            <NuxtLink to="/cart">Turn Yourself</NuxtLink>
                        </h5>
                        <div class="product-quantity mt-10 mb-10">
                            <span class="cart-minus" @click="handleDecreaseValue('valueFour')">-</span>
                            <input class="cart-input" type="text" v-model="valueFour" />
                            <span class="cart-plus" @click="handleIncreaseValue('valueFour')">+</span>
                        </div>
                        <div class="product__sm-price-wrapper">
                            <span class="product__sm-price">$24.00</span>
                        </div>
                    </div>
                    <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
                </li>
                <li>
                    <div class="cartmini__thumb">
                        <NuxtLink to="/cart"><img src="/img/products/product-thumb-02.png" alt="image not found"></NuxtLink>
                    </div>
                    <div class="cartmini__content">
                        <h5>
                            <NuxtLink to="/cart">Art of Not Giving</NuxtLink>
                        </h5>
                        <div class="product-quantity mt-10 mb-10">
                            <span class="cart-minus" @click="handleDecreaseValue('valueFive')">-</span>
                            <input class="cart-input" type="text" v-model="valueFive" />
                            <span class="cart-plus" @click="handleIncreaseValue('valueFive')">+</span>
                        </div>
                        <div class="product__sm-price-wrapper">
                            <span class="product__sm-price">$12.00</span>
                        </div>
                    </div>
                    <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
                </li>
                <li>
                    <div class="cartmini__thumb">
                        <NuxtLink to="/cart"><img src="/img/products/product-thumb-03.png" alt="image not found"></NuxtLink>
                    </div>
                    <div class="cartmini__content">
                        <h5>
                            <NuxtLink to="/cart">Attract Women</NuxtLink>
                        </h5>
                        <div class="product-quantity mt-10 mb-10">
                            <span class="cart-minus" @click="handleDecreaseValue('valueSix')">-</span>
                            <input class="cart-input" type="text" v-model="valueSix" />
                            <span class="cart-plus" @click="handleIncreaseValue('valueSix')">+</span>
                        </div>
                        <div class="product__sm-price-wrapper">
                            <span class="product__sm-price">$42.00</span>
                        </div>
                    </div>
                    <a href="#" class="cartmini__del"><i class="fal fa-times"></i></a>
                </li>
            </ul>
        </div>
        <div class="cartmini__checkout">
            <div class="cartmini__checkout-title mb-30">
                <h4>Subtotal:</h4>
                <span>$78.00</span>
            </div>
        </div>
        <div class="cartmini__viewcart">
            <NuxtLink to="/cart" class="edu-sec-btn">View cart</NuxtLink>
            <NuxtLink to="/checkout" class="edu-sec-btn">Checkout</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            valueFour: 1,
            valueFive: 1,
            valueSix: 1,
        };
    },
    methods: {
        handleIncreaseValue(value) {
            if (value === 'valueFour') {
                this.valueFour++;
            }
            if (value === 'valueFive') {
                this.valueFive++;
            }
            if (value === 'valueSix') {
                this.valueSix++;
            }
        },
        handleDecreaseValue(value) {
            if (value === 'valueFour' && this.valueFour > 1) {
                this.valueFour--;
            }
            if (value === 'valueFive' && this.valueFive > 1) {
                this.valueFive--;
            }
            if (value === 'valueSix' && this.valueSix > 1) {
                this.valueSix--;
            }
        }
    },
};
</script>