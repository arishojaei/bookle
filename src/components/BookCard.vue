<template>
    <div class="book-card">
          <div class="book-card-cover">
            <img :src="data.image" :alt="data.title">
          </div>
          <h4 class="book-card-title"> {{ data.title }} </h4>
          <span class="book-card-author"> {{ data.author }} </span>
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
}
</script>