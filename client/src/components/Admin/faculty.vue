<template>
  <div class="p-4">
    <div class="mb-3 d-flex flex-column justify-content-center align-items-center">
      <h3 class="hd">Create Faculty</h3>
      <div class="bb"></div>
    </div>
    <form style="padding-bottom: 15rem">
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label nm">New Faculty</label>
          <div class="col-sm-10">
            <input type="text" v-model="faculty" class="form-control" placeholder="Faculty">
          </div>
        </div>
       
        <div class="form-group row mt-4">
          <div class="col-sm-10">
            <button type="submit" @click.prevent="createfaculty()" class="btn btn-primary btn-lg">Create</button>
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
      faculty: ""
    };
  },
  methods: {
    async createfaculty() {
      try {
        await authenticationService.createfaculty({
          faculty: this.faculty
        });
        this.faculty = "";
      } catch (error) {
        console.log(error);
      }
    }
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