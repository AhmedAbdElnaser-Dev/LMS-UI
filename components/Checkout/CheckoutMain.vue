<script>
import FooterOne from "../Common/FooterOne.vue";
import PageTitle from "../Common/PageTitle.vue";
import HeaderFour from "../Common/HeaderFour.vue";
import ScrollToTop from "../Common/ScrollToTop.vue";

export default {
    name: "app",
    components: {
    FooterOne,
    PageTitle,
    HeaderFour,
    ScrollToTop
},
    data() {
        return {
            showCouponContent: false,
            showCheckout: false,
            showAcc: false,
            shipBox: false,
        }
    },
    methods: {
        handleShow() {
            return this.showCouponContent = !this.showCouponContent
        },
        showCheckoutContent() {
            return this.showCheckout = !this.showCheckout
        },
        showCreateAcc() {
            return this.showAcc = !this.showAcc
        },
        handleShipBox() {
            return this.shipBox = !this.shipBox
        },
        handleSubmit() {}
    }
};
</script>
<template>
    <div>
        <!-- header-area-start -->
        <HeaderFour />
        <!-- header-area-end -->

        <!-- PageTitle-area-end -->
        <PageTitle pageTitle="Checkout" pageSubTitle="Checkout" />
        <!-- PageTitle-area-end -->

        <!-- checkout-area-start -->
        <section class="coupon-area pt-100 pb-30">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="coupon-accordion">
                            <h3>Returning customer? <span @click="handleShow" id="showlogin">Click here to login</span>
                            </h3>
                            <div id="checkout-login"
                                :class="`${showCouponContent ? 'coupon-content d-block' : 'coupon-content'}`">
                                <div class="coupon-info">
                                    <p class="coupon-text">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed
                                        est sit amet ipsum luctus.</p>
                                    <form @submit.prevent="handleSubmit">
                                        <p class="form-row-first">
                                            <label>Username or email <span class="required">*</span></label>
                                            <input type="email" placeholder="Username or email" />
                                        </p>
                                        <p class="form-row-last">
                                            <label>Password <span class="required">*</span></label>
                                            <input type="password" placeholder="Password" />
                                        </p>
                                        <p class="form-row">
                                            <button class="edu-btn" type="submit">Login</button>
                                            <label>
                                                <input type="checkbox" />
                                                Remember me
                                            </label>
                                        </p>
                                        <p class="lost-password">
                                            <a href="#">Lost your password?</a>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="coupon-accordion">
                            <h3>Have a coupon? <span @click="showCheckoutContent" id="showcoupon">Click here to enter your
                                    code</span></h3>
                            <div id="checkout_coupon"
                                :class="`${showCheckout ? 'coupon-content d-block' : 'coupon-checkout-content'}`">
                                <div class="coupon-info">
                                    <form @submit.prevent="handleSubmit">
                                        <p class="checkout-coupon">
                                            <input type="text" placeholder="Coupon Code" />
                                            <button class="edu-btn" type="submit">Apply Coupon</button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="checkout-area pb-70">
            <div class="container">
                <form @submit.prevent="handleSubmit">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="checkbox-form">
                                <h3>Billing Details</h3>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="country-select">
                                            <label>Country <span class="required">*</span></label>
                                            <select>
                                                <option value="volvo">Bangladesh</option>
                                                <option value="saab">Algeria</option>
                                                <option value="mercedes">Afghanistan</option>
                                                <option value="audi">Ghana</option>
                                                <option value="audi2">Albania</option>
                                                <option value="audi3">Bahrain</option>
                                                <option value="audi4">Colombia</option>
                                                <option value="audi5">Dominican Republic</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>First Name <span class="required">*</span></label>
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>Last Name <span class="required">*</span></label>
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Company Name</label>
                                            <input type="text" placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Address <span class="required">*</span></label>
                                            <input type="text" placeholder="Street address" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <input type="text" placeholder="Apartment, suite, unit etc. (optional)" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Town / City <span class="required">*</span></label>
                                            <input type="text" placeholder="Town / City" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>State / County <span class="required">*</span></label>
                                            <input type="text" placeholder="State / County" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>Postcode / Zip <span class="required">*</span></label>
                                            <input type="text" placeholder="Postcode / Zip" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>Email Address <span class="required">*</span></label>
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="checkout-form-list">
                                            <label>Phone <span class="required">*</span></label>
                                            <input type="text" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list create-acc">
                                            <label @click="showCreateAcc">Create an account?</label>
                                        </div>
                                        <div id="cbox_info"
                                            :class="`${showAcc ? 'checkout-form-list create-account d-block' : 'checkout-form-list create-account'}`">
                                            <p>Create an account by entering the information below. If you are a
                                                returning
                                                customer please login at the top of the page.</p>
                                            <label>Account password <span class="required">*</span></label>
                                            <input type="password" placeholder="password" />
                                        </div>
                                    </div>
                                </div>
                                <div class="different-address">
                                    <div class="ship-different-title">
                                        <label @click="handleShipBox">Ship to a different address?</label>
                                    </div>
                                    <div id="ship-box-info" :class="`${shipBox ? 'd-block' : ''}`">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="country-select">
                                                    <label>Country <span class="required">*</span></label>
                                                    <select>
                                                        <option value="volvo">Bangladesh</option>
                                                        <option value="saab">Algeria</option>
                                                        <option value="mercedes">Afghanistan</option>
                                                        <option value="audi">Ghana</option>
                                                        <option value="audi2">Albania</option>
                                                        <option value="audi3">Bahrain</option>
                                                        <option value="audi4">Colombia</option>
                                                        <option value="audi5">Dominican Republic</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>First Name <span class="required">*</span></label>
                                                    <input type="text" placeholder="First Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Last Name <span class="required">*</span></label>
                                                    <input type="text" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Company Name</label>
                                                    <input type="text" placeholder="Company Name" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Address <span class="required">*</span></label>
                                                    <input type="text" placeholder="Street address" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <input type="text"
                                                        placeholder="Apartment, suite, unit etc. (optional)" />
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="checkout-form-list">
                                                    <label>Town / City <span class="required">*</span></label>
                                                    <input type="text" placeholder="Town / City" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>State / County <span class="required">*</span></label>
                                                    <input type="text" placeholder="State / County" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Postcode / Zip <span class="required">*</span></label>
                                                    <input type="text" placeholder="Postcode / Zip" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Email Address <span class="required">*</span></label>
                                                    <input type="email" placeholder="Email Address" />
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="checkout-form-list">
                                                    <label>Phone <span class="required">*</span></label>
                                                    <input type="text" placeholder="Phone" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-notes">
                                        <div class="checkout-form-list">
                                            <label>Order Notes</label>
                                            <textarea id="checkout-mess" cols="30" rows="10"
                                                placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="your-order mb-30 ">
                                <h3>Your order</h3>
                                <div class="your-order-table table-responsive">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th class="product-name">Product</th>
                                                <th class="product-total">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="cart_item">
                                                <td class="product-name">
                                                    Turn Yourself <strong class="product-quantity"> × 1</strong>
                                                </td>
                                                <td class="product-total">
                                                    <span class="amount">$24.00</span>
                                                </td>
                                            </tr>
                                            <tr class="cart_item">
                                                <td class="product-name">
                                                    Art of Not Giving <strong class="product-quantity"> ×
                                                        1</strong>
                                                </td>
                                                <td class="product-total">
                                                    <span class="amount">$12.00</span>
                                                </td>
                                            </tr>
                                            <tr class="cart_item">
                                                <td class="product-name">
                                                    Attract Women <strong class="product-quantity"> ×
                                                        1</strong>
                                                </td>
                                                <td class="product-total">
                                                    <span class="amount">$42.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr class="cart-subtotal">
                                                <th>Cart Subtotal</th>
                                                <td><span class="amount">$78.00</span></td>
                                            </tr>
                                            <tr class="shipping">
                                                <th>Shipping</th>
                                                <td>
                                                    <ul>
                                                        <li>
                                                            <input type="radio" id="Dollar" name="Amount" />
                                                            <label for="Dollar">
                                                                Flat Rate: <span class="amount">$7.00</span>
                                                            </label>
                                                        </li>
                                                        <li>
                                                            <input type="radio" id="Shipping" name="Amount" />
                                                            <label for="Shipping">Free Shipping:</label>
                                                        </li>
                                                        <li></li>
                                                    </ul>
                                                </td>
                                            </tr>
                                            <tr class="order-total">
                                                <th>Order Total</th>
                                                <td><strong><span class="amount">$85.00</span></strong></td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>

                                <div class="payment-method">
                                    <div class="accordion" id="checkoutAccordion">
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="checkoutOne">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#bankOne" aria-expanded="true" aria-controls="bankOne">
                                                    Payment Method
                                                </button>
                                            </h2>
                                            <div id="bankOne" class="accordion-collapse collapse show"
                                                aria-labelledby="checkoutOne" data-bs-parent="#checkoutAccordion">
                                                <div class="accordion-body">
                                                    <p>You need to pay it with your prefable methods</p>
                                                    <div class="payment-option mb-10">
                                                        <label for="pay_later_payment">
                                                            <input type="radio" id="pay_later_payment"
                                                                name="payment_method" /> Pay later
                                                        </label>
                                                    </div>
                                                    <div class="payment-option mb-10">
                                                        <label for="mollie_payment">
                                                            <input type="radio" id="mollie_payment" name="payment_method" />
                                                            Mobile Payment
                                                        </label>
                                                    </div>
                                                    <div class="payment-option mb-10">
                                                        <label for="paypal_payment">
                                                            <input type="radio" id="paypal_payment" name="payment_method" />
                                                            Pay with Paypal
                                                        </label>
                                                    </div>
                                                    <div class="payment-option mb-10">
                                                        <label for="stripe_payment">
                                                            <input type="radio" id="stripe_payment" name="payment_method" />
                                                            Pay with Visa/Mastercard
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="order-button-payment mt-20">
                                        <button type="submit" class="edu-btn">Place order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <!-- checkout-area-end -->

        <!-- education-area-end -->
        <FooterOne />
        <!-- education-area-end -->

        <!-- scrolltop-area-start -->
        <ScrollToTop />
        <!-- scrolltop-area-end -->

    </div>
</template>

<style scoped></style>