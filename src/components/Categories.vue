<template>
    <div class="categories">
        <div v-for="(category, i) in categories" :key="i" class="category">
            <input type="checkbox" v-model="slcCategory" :value="category.id" :id="`category-${category.id}`">
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
      slcCategory: []
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