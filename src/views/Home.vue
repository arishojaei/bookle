<template>
  <div class="my-4">

    <div class="banner">
      <img src="@/assets/img/banner.png" alt="">
    </div>

    <categories @filter="handleFilter" />

    <book-list :data="filteredBooks" />

    <modal />

  </div>
</template>

<script>

// Utils
import { get } from '@/utils/http-request'

// Components
import Modal from '@/components/Modal';
import BookList from '@/components/BookList';
import Categories from '@/components/Categories';

export default {
  name: 'Home',

  components: {
    Categories,
    BookList,
    Modal
  },

  metaInfo() {
    return {
      title: 'Bookle'
    }
  },

  data() {
    return {
      books: [],
      filteredBooks: []
    }
  },

  methods: {
    fetchBooks() {
      get('/books.json')
        .then(response => {
          this.books = response.data.books
          this.filteredBooks = this.books
        })
    },
    handleFilter(payload) {
      if (payload == 0) {
        this.filteredBooks = this.books
      } else {
        this.filteredBooks = this.books.filter(book => {
          return book.category_id == payload
        })
      }
    }
  },

  created() {
    this.fetchBooks()
  }
}
</script>
