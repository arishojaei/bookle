<template>
  <div class="categories" v-if="categories.length">

    <div class="category">
      <input type="radio" v-model="slcCategory" :value="0" id="all">
      <label for="all">
        همه
      </label>
    </div>

    <div v-for="(category, i) in categories" :key="i" class="category">
      <input type="radio"
        v-model="slcCategory"
        :value="category.id"
        :id="`category-${category.id}`">
      <label :for="`category-${category.id}`">
        {{ category.title }}
      </label>
    </div>

  </div>
</template>

<script>

// Utils
import { get } from '@/utils/http-request'

export default {
  name: 'Categories',

  data() {
    return {
      categories: [],
      slcCategory: 0
    }
  },

  watch: {
    slcCategory(val) {
      this.$emit('filter', val)
    }
  },

  methods: {
    fetchCategories() {
      get('/categories.json')
        .then(response => {
          this.categories = response.data.categories
        })
    }
  },

  created() {
    this.fetchCategories()
  }
}
</script>