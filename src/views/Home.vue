<template>
  <div class="my-4">

    <div class="banner">
      <img src="@/assets/img/banner.png" alt="">
    </div>

  <Categories />

    <div class="row book-list">
      <div v-for="(book, i) in books" :key="i" class="col-6 col-md-4 col-lg-3">
        <BookCard :data="book" />
      </div>
    </div>

  </div>
</template>

<script>

// Components
import BookCard from '@/components/BookCard';
import Categories from '@/components/Categories';

// Utils
import { get } from '@/utils/http-request'

export default {
  name: 'Home',

  components: {
    Categories,
    BookCard
  },

  metaInfo() {
    return {
      title: 'Bookle'
    }
  },

  data() {
    return {
      books: []
    }
  },

  methods: {
    fetchBooks() {
      get('/books.json')
        .then(response => {
          this.books = response.data.books
        })
    }
  },

  created() {
    this.fetchBooks()
  }
}
</script>
