<template>
  <div class="wrapper">
    <div class="footer">
        <div class="d-flex flex-lg-nowrap flex-wrap flex-row container ">
            <div class="w-100">
                <div class="flex-column">
                    <div class="pl-3 footer-header">
                     <a href="#"><h2 style="color:#fff;">Lau<span class="text-md">te</span>ch</h2></a>                        
                    </div>
                    <div class="footer-menu">
                        <span class="sub-menu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa laudantium iste amet repellat rem maiores nihil velit laboriosam provid</span>
                    </div>
                </div>
            </div>
            <div class="w-50">
                <div class="flex-column">
                    <div class="pl-3 footer-header">Solution</div>
                    <div class="footer-menu">
                        <div class=" sub-menu">Dashboard</div>
                        <div class="sub-menu">Portal</div>
                        <div class="sub-menu">Admission</div>
                        <div class="sub-menu">School</div>
                        <div class="sub-menu">Latest News</div>
                    </div>
                </div>
            </div>
            <div class="w-50 h-100">
                 <div class="pt-0 mt-0 flex-column">
                    <div class="pl-3 footer-header">company</div>
                    <div class="footer-menu">
                        <div class="sub-menu">About Us</div>
                        <div class="sub-menu">Blog</div>
                        <div class="sub-menu">Certificate</div>
                        <div class="sub-menu">Terms of Service</div>
                        <div class="sub-menu">Privacy Policy</div>                        
                    </div>
                </div>
            </div>
            <div class="w-75">
                <div class="flex-column">
                    <div class="pl-3 footer-header">Get In Touch</div>
                    <div class="w-100 p-2 pl-1 footer-menu sub-menu">
                       Any questions? Let us know in store at 8th floor, 
                       379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                    </div>
                </div>
            </div>
            <div class="w-75">
                 <div class="flex-column">
                    <div class="pl-3 footer-header">subscribe now</div>
                    <div class="footer-menu">
                        <input type="text" placeholder="email" class="form-control">
                        <div class="submit mt-4">
                             <a href="#" class="footer-link"> subscribe</a>
                        </div>                     
                    </div>
                </div></div>            
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: 100%;
  background-color: rgb(10, 56, 68);
}
.footer {
  padding: 5rem 0;
}
.footer-header {
  font: 900;
  font-family: Montserrat-Bold;
  font-size: 1rem;
  text-transform: uppercase;
  color: #fff;
}
.footer-menu {
  padding: 1rem;
  color: #f7f7f7;
}
.sub-menu {
  color: darkgray;
  padding: 0.3rem 0;
  font: 400;
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
}
.footer-link {
  text-decoration: none;
  color: whitesmoke;
  background-color: rgba(0, 255, 255, 0.534);
  padding: 0.9rem 2.8rem;
  border-radius: 2rem;
  font: 700;
  text-transform: uppercase;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
}
.text-md {
  border-radius: 4px;
  background-image: linear-gradient(
    120deg,
    rgba(5, 190, 283, 0.395) 20%,
    transparent 50%
  );
  z-index: 200;
  color: rgba(0, 255, 255, 0.534);
}
</style>