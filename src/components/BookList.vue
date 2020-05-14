<template>
    <div>
        <div class="row book-list" v-if="data.length">
            <div v-for="(book, i) in data" :key="i" class="col-6 col-md-4 col-lg-3">
                <book-card :data="book" @info-request="handleRequest" />
            </div>
        </div>

        <div class="text-center" v-else>
            <div class="spinner-border text-light" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>

// Components
import BookCard from '@/components/BookCard';

export default {
    name: 'BookList',

    components: {
        BookCard
    },

    props: {
        data: {
            type: Array,
            require: true
        }
    },

    methods: {
        handleRequest(payload) {
            this.$emit('info-request', payload)
        }
    }
}
</script>