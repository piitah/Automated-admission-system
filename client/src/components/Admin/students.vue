<template>
  <div class="p-4">
    <div class="mb-3 d-flex flex-column justify-content-center align-items-center">
      <h3 class="hd">Students List</h3>
      <div class="bb"></div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">UTME NO</th>
            <th scope="col">Fullname</th>
            <th scope="col">Dept</th>
            <th scope="col">State</th>
            <th scope="col"> Local Govt</th>      
            <th scope="col"> Score</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="student in students" :key="student._id">
              <th>{{ student.UTME}}</th>
              <td>{{ student.FULLNAME}}</td>
              <td>{{ student.DEPT}}</td>
              <td>{{ student.STATE}}</td>
              <td>{{ student.LOCAL_GOVT}}</td>
              <td>{{ student.SCORE}}%</td>                        
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";

export default {
  name: "student",
  data() {
    return {
      UTME: "",
      FULLNAME: "",
      DEPT: "",
      LOCAL_GOVT: "",
      STATE: "",
      SCORE: "",
      students: ""
    };
  },
  async mounted() {
    const response = await authenticationService.getStudent();
    this.students = response.data;
    console.log(this.students);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hd {
  font: 700;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.4rem;
  color: rgb(50, 148, 5);
  display: block;
}
.bb {
  height: 1px;
  width: 2rem;
  border: 1px solid orangered;
  color: black;
}
</style>