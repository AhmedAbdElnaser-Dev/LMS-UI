<template>
    <div class="modal fade" id="productModalId" tabIndex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered product__modal" role="document">
            <div class="modal-content">
                <div class="product__modal-wrapper p-relative">
                    <div class="product__modal-close p-absolute">
                        <button data-bs-dismiss="modal"><i class="fal fa-times"></i></button>
                    </div>
                    <div class="product__modal-inner">
                        <div class="row">
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product__modal-box">
                                    <div class="tab-content" id="modalTabContent">
                                        <div class="tab-pane fade show active" id="nav1" role="tabpanel"
                                            aria-labelledby="nav1-tab">
                                            <div class="product__modal-img w-img">
                                                <img src="/img/products/product-thumb-01.png" alt="img not found" />
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav2" role="tabpanel" aria-labelledby="nav2-tab">
                                            <div class="product__modal-img w-img">
                                                <img src="/img/products/product-thumb-02.png" alt="img not found" />
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav3" role="tabpanel" aria-labelledby="nav3-tab">
                                            <div class="product__modal-img w-img">
                                                <img src="/img/products/product-thumb-03.png" alt="img not found" />
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="nav4" role="tabpanel" aria-labelledby="nav4-tab">
                                            <div class="product__modal-img w-img">
                                                <img src="/img/products/product-thumb-04.png" alt="img not found" />
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="nav nav-tabs" id="modalTab" role="tablist">
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link active" id="nav1-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav1" type="button" role="tab" aria-controls="nav1"
                                                aria-selected="true">
                                                <img src="/img/products/product-thumb-01.png" alt="img not found" />
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="nav2-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav2" type="button" role="tab" aria-controls="nav2"
                                                aria-selected="false">
                                                <img src="/img/products/product-thumb-02.png" alt="img not found" />
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="nav3-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav3" type="button" role="tab" aria-controls="nav3"
                                                aria-selected="false">
                                                <img src="/img/products/product-thumb-03.png" alt="img not found" />
                                            </button>
                                        </li>
                                        <li class="nav-item" role="presentation">
                                            <button class="nav-link" id="nav4-tab" data-bs-toggle="tab"
                                                data-bs-target="#nav4" type="button" role="tab" aria-controls="nav4"
                                                aria-selected="false">
                                                <img src="/img/products/product-thumb-04.png" alt="img not found" />
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product__modal-content">
                                    <h4 data-bs-dismiss="modal"><NuxtLink to="/shop-details">Turn Yourself</NuxtLink></h4>
                                    <div class="product__modal-des mb-40">
                                        <p>Typi non habent claritatem insitam, est usus legentis in iis qui facit eorum
                                            claritatem.
                                            Investigationes demonstraverunt </p>
                                    </div>
                                    <div class="product__stock">
                                        <span>Availability :</span>
                                        <span>In Stock</span>
                                    </div>
                                    <div class="product__stock sku mb-30">
                                        <span>SKU:</span>
                                        <span>Juicera C49J89: £875, Debenhams Plus</span>
                                    </div>
                                    <div class="product__review d-sm-flex">
                                        <div class="rating rating__shop mb-15 mr-35">
                                            <ul>
                                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                                <li><a href="#"><i class="fas fa-star"></i></a></li>
                                            </ul>
                                        </div>
                                        <div class="product__add-review mb-15">
                                            <span data-bs-dismiss="modal"><NuxtLink to="/shop-details">1 Review</NuxtLink></span>
                                        </div>
                                    </div>
                                    <div class="product__price">
                                        <span>$59.00</span>
                                    </div>
                                    <div class="product__modal-form">
                                        <div class="product-quantity-cart mb-30">
                                            <div class="product-quantity-form">
                                                <form>
                                                    <span class="cart-minus" @click="handleDecreaseValue('valueOne')"><i class="far fa-minus"></i></span>
                                                    <input class="cart-input" type="text" v-model="value">
                                                    <span class="cart-plus" @click="handleIncreaseValue('valueOne')"><i class="far fa-plus"></i></span>
                                                </form>
                                            </div>
                                            <span data-bs-dismiss="modal"><NuxtLink to="/cart" class="edu-btn">Add to Cart</NuxtLink></span>
                                        </div>
                                    </div>
                                    <div class="product__modal-links">
                                        <ul>
                                            <li><a href="#" title="Add to Wishlist"><i class="fal fa-heart"></i></a></li>
                                            <li><a href="#" title="Compare"><i class="far fa-sliders-h"></i></a></li>
                                            <li><a href="#" title="Print"><i class="fal fa-print"></i></a></li>
                                            <li><a href="#" title="Share"><i class="fal fa-share-alt"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: "app",
   data() {
      return {
         value: 1,
      }
   },
   methods: {
      handleIncreaseValue(value) {
         if (value === 'valueOne') {
            this.value++
         }
      },
      handleDecreaseValue(value) {
         if (value === 'valueOne' && this.value > 1) {
            this.value--
         }
      }
   },
};
</script>