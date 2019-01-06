<template>
    <div class="section-header">
        <div class="header-primary">
            <div class="">
                <nav class="navbar navbar-expand-lg navbar-light">
                    
                </nav>
                <div class=" container d-flex flex-row align-items-baseline pt-3 pb-3">
                    <div class="">
                        <img src="../../../assets/logo.png" class="img-fluid" height="100" width="90" alt="">
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
                <div class="header-sec">
                    <nav class="container navbar navbar-expand-lg mx-auto p-0 navbar-light">
                        <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto">
                            <router-link tag="li" to="/" active-class="active" class="nav-item">
                                <a class="nav-link active border-left">Home</a>
                            </router-link>
                            <router-link tag="li" to="/admission" class="nav-item">
                                <a class="nav-link">Admission</a>
                            </router-link>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                            <router-link tag="li" to="/login" class="nav-item">
                                <a class="nav-link">Portal</a>
                            </router-link>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            </ul>
                        </div>
                        </nav>
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
.header-primary {
  background-image: linear-gradient(
      to right,
      rgba(17, 23, 75, 0.788),
      rgba(13, 88, 88, 0.486)
    ),
    url(../../../assets/image-8.jpg);
  background-position: top;
  background-size: cover;
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
.header-sec {
  border-top: 0.7px solid #999999;
  background-image: linear-gradient(
    to right,
    rgba(17, 23, 75, 0.74),
    rgb(13, 88, 88)
  );
  background-position: top;
  color: #fff;
}
.nav-link {
  margin: 0 !important;
  padding: 0.9rem 2.5rem !important;
  border-right: 1px solid #999999;
  background-image: linear-gradient(
    to right,
    rgb(192, 187, 181),
    #fff
  ) !important;
  -webkit-background-clip: text;
  color: transparent !important;
}
.nav-item:hover {
  background-image: linear-gradient(
    to right,
    rgba(5, 10, 56, 0.596),
    rgba(3, 39, 54, 0.548)
  );
}
</style>