<template>
  <div class="p-4">
    <div class="mb-3 d-flex flex-column justify-content-center align-items-center">
      <h3 class="hd">Create New Department</h3>
      <div class="bb"></div>
    </div>
      <form style="padding-bottom: 15rem">
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label nm">Select Faculty</label>
          <div class="col-sm-10">
            <select v-model="faculty" class="custom-select">
              <option value="" disabled>Select faculty</option>
              <option v-for="faculty in faculties" :key="faculty._id">{{faculty.faculty}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label nm">Department</label>
          <div class="col-sm-10">
            <input type="text" v-model="dept" class="form-control" placeholder="New Department" required>
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label nm">Cutoff Mark</label>
          <div class="col-sm-10">
            <input type="number" v-model="cutoff" class="form-control"  placeholder="Cut-off Mark" required>
          </div>
        </div>
        <div class="form-group row mt-4">
          <div class="col-sm-10">
            <button type="submit" @click.prevent='createdept()' class="btn btn-primary btn-lg">Create</button>
          </div>
        </div>
      </form>
  </div>
</template>

<script>
import authenticationService from "@/services/authenticationService";

export default {
  name: "blank",
  data() {
    return {
      dept: "",
      cutoff: "",
      faculty: "",
      faculties: ""
    };
  },
  methods: {
    createdept: async function() {
      try {
        await authenticationService.createdept({
          dept: this.dept,
          faculty: this.faculty,
          cutoff: this.cutoff
        });
      } catch (error) {
        console.log(error);
      }
      (this.dept = ""), (this.faculty = ""), (this.cutoff = "");
    }
  },
  async mounted() {
    const response = await authenticationService.getFaculty();
    this.faculties = response.data;
    console.log(this.faculty);
    console.log("helloworld");
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
  width: 3rem;
  border: 1px solid orangered;
  color: black;
}
.nm {
  font: 200;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 1.2rem;
}
</style>