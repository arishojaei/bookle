<template>
    <div class="book-info-modal">
        <div class="content">
            <button class="closeBtn" @click="close">✕</button>

            <div class="cover">
                <img :src="data.image" :alt="data.title">
            </div>
            <div class="w-100 mr-5">
                <h2 class="mb-5">{{ data.title }}</h2>
                <ul>
                    <li>
                        <small class="opa-5">نویسنده</small>
                        <h5>{{ author(data.author_id) }}</h5>
                    </li>
                    <li v-if="data.translator">
                        <small class="opa-5">مترجم</small>
                        <h5>{{ data.translator }}</h5>
                    </li>
                    <li>
                        <small class="opa-5">دسته</small>
                        <h5>{{ category(data.category_id) }}</h5>
                    </li>
                    <li>
                        <small class="opa-5">توضیحات</small>
                        <p>{{ data.summary }}</p>
                    </li>
                </ul>
            </div>
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
        author(id) {
            let result = this.authors.find(author => author.id == id)
            if (result) return result.full_name
        },
        category(id) {
            let result = this.categories.find(category => category.id == id)
            if (result) return result.title
        },
        close() {
            this.$emit('close')
        }
    },

    created() {
        this.fetchAuthors();
        this.fetchCategories();
    }
}
</script>