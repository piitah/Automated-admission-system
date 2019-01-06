<template>
  <div class="section-admin container">
      <div class="">
          <div class="row">
              <div class="c col-md-offset-6 mx-auto container bg1">
                  <h2>Admin Page</h2>

                <div class="form1">
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" placeholder="Enter your UTME NO" required autocomplete="false" v-model="username">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required v-model="password">
                        </div>
                            <button type="submit" class="btn" style="background-color:rgba(13, 88, 88); color:#fff;">Submit</button>
                    </form>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "adminLogin",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-admin {
  background-color: #eeeeee;
  height: 100vh;
}
.bg1 {
  background-color: #fff;
  width: 24rem;
  margin: 10rem;
  border-radius: 5px;
  padding: 2rem 2rem;
  box-shadow: 0 0 0 0.1rem rgba(29, 79, 102, 0.486);
}
</style>