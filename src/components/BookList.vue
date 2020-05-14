<template>
    <div>
        <div class="row book-list" v-if="data.length">
            <div v-for="(book, i) in books" :key="i" class="col-6 col-md-4 col-lg-3">
                <book-card :data="book" @info-request="handleRequest" />
            </div>

            <div class="col-12">
                <pagination
                    :total="data.length"
                    :per-page="perPage"
                    @pageChange="handlePageChange" />
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
import Pagination from '@/components/Pagination';

export default {
    name: 'BookList',

    components: {
        BookCard,
        Pagination
    },

    props: {
        data: {
            type: Array,
            require: true
        }
    },

    data() {
        return {
            listStart: 0,
            perPage: 4
        }
    },

    computed: {
        books() {
            return this.data.slice(this.listStart, this.listStart + this.perPage)
        }
    },

    methods: {
        handleRequest(payload) {
            this.$emit('info-request', payload)
        },
        handlePageChange(payload) {
            if (payload === 'next') {
                this.listStart = this.listStart + this.perPage
            } else {
                this.listStart = this.listStart - this.perPage
            }
        }
    }
}
</script>