<template>
    <div class="book-info-modal">
        <div class="content">
            <button class="closeBtn">✕</button>
            <div class="cover">
                <img src="" alt="">
            </div>
            <h2 class="mb-5 text-center">نام کتاب</h2>
            <ul>
                <li>
                    <small class="opa-5">نویسنده</small>
                    <h5></h5>
                </li>
                <li>
                    <small class="opa-5">مترجم</small>
                    <h5></h5>
                </li>
                <li>
                    <small class="opa-5">توضیحات</small>
                    <p></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

// Utils
import { get } from '@/utils/http-request'

export default {
    name: 'Modal',

    props: {
        data: {
            type: Object,
            require: true
        }
    },

    data() {
        return {
            authors: [],
            categories: []
        }
    },

    methods: {
        fetchAuthors() {
            get('/authors.json')
                .then(response => {
                    this.authors = response.data.authors
                })
        },
        fetchCategories() {
            get('/categories.json')
                .then(response => {
                    this.categories = response.data.categories
                })
        },
    },

    created() {
        this.fetchAuthors();
        this.fetchCategories();
    }
}
</script>