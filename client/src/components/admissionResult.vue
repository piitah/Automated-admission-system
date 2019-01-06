<template>
  <div>
     <div class="container content-bg">
          <div class="content-bg1 d-flex flex-column align-items-center">
              <div>
                <p class="hd1 mb-5">
                  admission application information
                </p>
                <div>
                  <div class="row">
                    <div class="col-md-4 display-p">
                      <div class="pics">
                        <img src="../../src/assets/image-4.jpg" class="img-fluid" alt="">
                      </div>
                    </div>
                    <div class="col-md-8" >
                        <div class="title-1 pl-3">
                          personal information
                        </div>  
                     <div class="d-flex flex-row justify-content-center w-100">
                       <div class="d-flex flex-column w-50 pl-5">
                         <span class="p-2">UTME NO</span>
                         <span class="p-2">FULLNAME</span>
                         <span class="p-2">STATE</span>
                         <span class="p-2">LOCAL GOVT</span>
                         <span class="p-2">SCORE</span>
                       </div>

                       <div class="d-flex flex-column w-50">
                         <div class="p-2">{{student.UTME}}</div>
                         <div class="p-2">{{student.FULLNAME}}</div>
                         <div class="p-2">{{student.STATE}}</div>
                         <div class="p-2">{{student.LOCAL_GOVT}}</div>
                         <div class="p-2">{{student.SCORE}}%</div>
                       </div>
                     </div>
                    </div>
                  </div>

                  <div class="title-1 pl-3 mt-5">
                    admission status information
                  </div>
                  <div>
                    <div class="d-flex flex-row justify-content-start w-100">
                       <div class="d-flex flex-column w-25">
                         <span class="p-2">ADMISSION STATUS</span>
                         <span class="p-2">Entry Mode</span>
                         <span class="p-2 mt-1">Faculty</span>
                         <span class="p-2 mt-2">Department</span>
                         <span class="p-2 mt-2">Session Admitted</span>
                       </div>

                       <div class="d-flex flex-column mb-5 ">
                         <div v-if="dept && student">
                            <div class="p-2 txt">ADMITTED</div>
                            <div class="p-2 txt">UTME(JAMB)</div>
                            <div class="p-2 txt">{{dept.faculty}}</div>
                            <div class="p-2 txt">{{dept.dept}}</div>
                            <div class="p-2 txt">2017/2018</div>
                         </div>
                         
                         <div v-else>
                            <div class="p-2 txt">PENDING</div>
                            <div class="p-2 txt">UTME(JAMB)</div>
                            <div class="p-2 txt">PENDING</div>
                            <div class="p-2 txt">PENDING</div>
                            <div class="p-2 txt">2017/2018</div>
                         </div>
                       </div>
                     </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam facilis distinctio fuga aut esse exercitationem dignissimos facere natus enim, architecto ab soluta culpa iste dicta eveniet numquam expedita sapiente!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repellat, reiciendis necessitatibus aut nobis quidem unde libero quisquam sint non ea? Officia qui quos saepe voluptatum ea vitae cum at.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae accusantium libero est odit consequatur dolore minus. Earum, et harum, perspiciatis, quidem quia molestiae delectus in cumque ducimus exercitationem excepturi labore?
                  </div>
                </div>    
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import authenticationService from "../services/authenticationService";

export default {
  name: "admissionResult",
  data() {
    return {
      dept: "",
      student: ""
    };
  },
  async mounted() {
    const studentUtme = this.$store.state.route.params.studentUtme;
    console.log(studentUtme);
    const response = await authenticationService.admissionUpdate(studentUtme);
    this.dept = response.data.dept;
    this.student = response.data.student;
    console.log(this.student);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-bg1 {
  background-image: linear-gradient(rgba(255, 255, 255, 0.87)),
    url("../assets/logo.png");
  background-position: top;
  background-size: cover;
  margin: 2rem 0;
  border-radius: 5px;
  padding: 1.6rem 4rem;
  box-shadow: 0 0 0 0.1rem rgba(29, 79, 102, 0.486);
}
.hd1 {
  font: 800;
  font-family: "Times New Roman", Times, serif;
  font-size: 2rem;
  text-transform: uppercase;
  display: block;
  text-align: center;
  background-image: linear-gradient(to right, rgb(29, 79, 102), cyan);
  -webkit-background-clip: text;
  color: transparent;
  line-height: 2rem;
}
.hd2 {
  color: #333;
  font: 500;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.1rem;
}
.title-1 {
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgb(29, 79, 102),
    rgba(9, 40, 41, 0.87)
  );
  color: white;
  border-radius: 3px;
  padding: 1rem 0;
  margin-bottom: 1rem;
  box-shadow: 0 0.7rem 3rem rgba(0, 0, 0, 0.2);
  text-transform: uppercase;
  font: 800;
  font-family: "Times New Roman", Times, serif;
  font-size: 1rem;
}
.display-p {
  box-shadow: 0 0 0 0.1rem rgba(29, 79, 102, 0.486);
}
.pics {
  padding: 2rem;
}
.txt {
  font: 700;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.2rem;
}
</style>