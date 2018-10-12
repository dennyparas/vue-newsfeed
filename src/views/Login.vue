<template>
  <b-container>
    <b-row>
      <b-col lg="5" class="mx-auto">
         <b-card>
            <h6 slot="header" class="mb-0 text-center">Login</h6>
            <b-form>
              <b-form-group label="Username" label-for="username">
                  <b-form-input type="text" id="username"></b-form-input>
              </b-form-group>
              <b-form-group label="Password" label-for="password">
                <b-form-input type="password" id="password"></b-form-input>
              </b-form-group>
                <b-button variant="primary">Login</b-button>
              </b-form>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {

};
</script>

<style>

</style>
