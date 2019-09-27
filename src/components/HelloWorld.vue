<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <vue-form id="testForm" name="testForm" :state="formstate" @submit.prevent="submit">
      <validate>
        <label for="name">Name</label>
        <input
          required
          id="name"
          name="name"
          type="text"
          maxlength="10"
          v-model="name">
        <field-messages name="name" class="error-message">
          <span id="requiredError" slot="required">Required</span>
          <span id="maxLengthError" slot="maxlength">Max length 10</span>
        </field-messages>
      </validate>
      <button type="submit">Submit</button>
    </vue-form>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  data () {
    return {
      formstate: {},
      name: '',
      sync: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
