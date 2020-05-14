<template>
    <div class="pagination">

        <button @click="paginateTo('prev')" :class="isFirst ? 'inactive' : ''">
            <span class="ml-4">→</span>
            قبلی
        </button>

        <button @click="paginateTo('next')" :class="isLast ? 'inactive' : ''">
            بعدی
            <span class="mr-4">←</span>
        </button>

    </div>
</template>

<script>
export default {
    name: 'Pagination',

    props: {
        total: {
            type: Number,
            required: true
        },
        perPage: {
            type: Number,
            required: true
        },
    },

    watch: {
        total(val) {
            if (val) {
                this.totalPages = Math.ceil(this.total / this.perPage)
                this.paginateTo('first')
            }
        }
    },

    data() {
        return {
            totalPages: Math.ceil(this.total / this.perPage),
            currentPage: 1
        }
    },

    computed: {
        isFirst() {
            return this.currentPage === 1
        },
        isLast() {
            return this.currentPage === this.totalPages
        }
    },

    methods: {
        paginateTo(payload) {
            if (payload === 'next') {
                this.currentPage++
            } else if (payload === 'prev') {
                this.currentPage--
            } else if (payload === 'first') {
                this.currentPage = 1
            }
            this.$emit('pageChange', payload)
        }
    }
}
</script>