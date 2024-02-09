<template>
    <!-- food section -->
    <section class="food_section layout_padding">
        <div class="container">
            <div class="heading_container heading_center">
                <h2>
                    Our Menu
                </h2>
            </div>

            <ul class="filters_menu">
                <li class="active">All</li>
                <li v-for="(category, index) in categories" :key="index" data-filter="pizza">{{ category.name_category }}</li>
            </ul>

            <div class="filters-content">
                <div v-for="category in categories" :key="category.id" class="row grid group_category_items pizza">
                    <div class="col-12 mt-4">
                        <h4 class="text-center"><span class="badge badge-dark">{{ category.name_category }}</span></h4>
                    </div>
                    <div v-for="menu in category.menus" :key="menu.id" class="col-sm-6 col-lg-4 all">
                        <div class="box">
                            <div class="img-box">
                                <img :src="menu.photo" alt="">
                            </div>
                            <div class="detail-box">
                                <h5>
                                    {{ menu.name_menu }}
                                </h5>
                                <p>
                                    {{ menu.description }}
                                </p>
                                <div class="options">
                                    <h6>
                                        ${{ menu.price }}
                                    </h6>
                                    <a href="">
                                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                            viewBox="0 0 456.029 456.029"
                                            style="enable-background:new 0 0 456.029 456.029;" xml:space="preserve">
                                            <g>
                                                <g>
                                                    <path
                                                        d="M345.6,338.862c-29.184,0-53.248,23.552-53.248,53.248c0,29.184,23.552,53.248,53.248,53.248
                                                        c29.184,0,53.248-23.552,53.248-53.248C398.336,362.926,374.784,338.862,345.6,338.862z" />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path d="M439.296,84.91c-1.024,0-2.56-0.512-4.096-0.512H112.64l-5.12-34.304C104.448,27.566,84.992,10.67,61.952,10.67H20.48
                                                        C9.216,10.67,0,19.886,0,31.15c0,11.264,9.216,20.48,20.48,20.48h41.472c2.56,0,4.608,2.048,5.12,4.608l31.744,216.064
                                                        c4.096,27.136,27.648,47.616,55.296,47.616h212.992c26.624,0,49.664-18.944,55.296-45.056l33.28-166.4
                                                        C457.728,97.71,450.56,86.958,439.296,84.91z" />
                                                </g>
                                            </g>
                                            <g>
                                                <g>
                                                    <path
                                                        d="M215.04,389.55c-1.024-28.16-24.576-50.688-52.736-50.688c-29.696,1.536-52.224,26.112-51.2,55.296
                                                    c1.024,28.16,24.064,50.688,52.224,50.688h1.024C193.536,443.31,216.576,418.734,215.04,389.55z" />
                                                </g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                            <g>
                                            </g>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="btn-box">
                <a href="">
                    View More
                </a>
            </div>
        </div>
    </section>

    <!-- end food section -->
</template>

<script setup>
    import axios from 'axios';
    import { useRoute } from 'vue-router';
    import { ref, onMounted } from 'vue'

    const restaurantMenu = ref();
    const categories = ref();
    const route = useRoute();

    const getRestaurantMenus = () => {
        axios.get(`menus/${route.params.id}`)
        .then((response) => {
            restaurantMenu.value = response.data,
            categories.value = response.data.data.categories

            console.log(categories.value);

        })
    }

    // const filterCategories = (item) => {

    //     let categoryFilter = item.currentTarget.getAttribute('data-filter')

    //     $('.filters_menu li').removeClass('active');

    //     item.currentTarget.classList.add("active")

    //     $('.group_category_items').removeClass('d-none');

    //     const elements = document.querySelectorAll('.group_category_items')
    //     elements.forEach((element) => {
    //         if (element.classList.contains(categoryFilter)) {
    //             element.classList.add('d-none')
    //         }
    //     })
    // }

    onMounted(() => {
        getRestaurantMenus();
    })
</script>