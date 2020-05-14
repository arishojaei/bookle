<template>
    <div class="book-card" @click="handleClick">
          <div class="book-card-cover">
                <img :src="data.image" :alt="data.title">
          </div>
          <h4 class="book-card-title"> {{ data.title }} </h4>
    </div>
</template>

<script>
export default {
    name: 'BookCard',

    props: {
        data: {
            type: Object,
            require: true
        }
    },

    methods: {
        handleClick() {
            this.$emit('info-request', this.data)
        }
    }
}
</script>