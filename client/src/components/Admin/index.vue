<template>
    <div class="section-admin">
        <div class="admin">
            <div class="admin-bg w-100">
                <div class=" container d-flex flex-row align-items-baseline pt-3 pb-3">
                        <div class="">
                            <img src="../../assets/logo.png" class="img-fluid" height="100" width="90" alt="">
                        </div>
                        <div class="align-self-center w-100">
                            <span class="ad-title">
                                vuetify khan university of technology
                            </span>
                            <span class="ad-t1">
                                2018/2019 Admission screening exercise
                            </span>
                        </div>
                    </div>

                    <div class="main container mt-4 pt-3 pb-3">
                        <h1 class="pb-2 hhb">Admin Page</h1>
                        <ul class="nav nav-tabs">
                           <router-link tag="li" to="/admin" class="nav-item">
                                <a class="nav-link">Faculty</a>
                            </router-link>
                            <router-link tag="li" to="/admin/dept" active-class="active" class="nav-item">
                                <a class="nav-link">Department</a>
                            </router-link>
                            <router-link tag="li" to="/admin/students" class="nav-item">
                                <a class="nav-link">Students</a>
                            </router-link>
                            <!-- <router-link tag="li" to="/admin/adm" class="nav-item">
                                <a class="nav-link">Adminssion</a>
                            </router-link> -->
                        </ul>

                        <div>
                            <router-view></router-view>
                        </div>
                    </div>
                    
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "blank",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.admin-bg {
  background-image: linear-gradient(
    to right,
    rgba(1, 6, 22, 0.849),
    rgba(1, 5, 26, 0.918)
  );
  background-position: top;
  background-size: cover;
}
.main {
  background-color: #fff;
  height: auto 60rem;
  border-radius: 4px;
  box-shadow: 0 2rem 3rem 2rem rgba(0, 0, 0, 0.2);
}
.ad-title {
  font: 800;
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  text-align: center;
  background-image: linear-gradient(to right, rgb(219, 218, 217), #fff);
  -webkit-background-clip: text;
  color: transparent;
}
.ad-t1 {
  font: 500;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.2rem;
  text-transform: uppercase;
  display: block;
  text-align: center;
  background-image: linear-gradient(to right, rgb(192, 187, 181), #fff);
  -webkit-background-clip: text;
  color: transparent;
}
.nav-link {
  color: #333333;
  font: 700;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
  text-transform: uppercase;
}
.hhb {
  font: 900;
  font-family: "Times New Roman", Times, serif;
  text-transform: uppercase;
}
</style>