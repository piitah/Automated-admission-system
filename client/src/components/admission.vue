<template>
  <div class="section-admission">
      <div class="container">
          <h2>Admission Guildlines</h2>
          <div class="row">
              <div class="col-md-8 hd2">
                Admission of students into the undergraduate programmes is via Universities Matriculation Examinations (U.M.E.), 
                    <br><br> 
                Pre-Degree Sciences programme (PDS) and Direct Entry (D.E) 
                  <br><br>.
                Admission of Students into the University through U.M.E/Pre-Degree Sciences Programme
                Admission to 100 level is on the basis of performance in the University Matriculation Examination (U.M.E.) conducted by the Joint Admission and Matriculation Board (JAMB) or good performances in the Pre-Degree Science Programme final examination. 
                In addition, candidate must have at least five credit passes in English Language, Mathematics, Chemistry, Physics and Biology at the S.S.C.E/G.C.E O'Level or its equivalent in order to qualify for admission into any of the faculties. For this purpose, a combination of credit passes at ”0” Level in five science subjects and at not more than two sittings is acceptable. 
                Candidates are also required to fulfill such faculty and department entry requirements as may be prescribed from time to time.
                <br><br>
                Admission by Direct Entry <br><br>
                Admission to 200 level by Direct Entry is based on the performance at the G.C.E. ”A” Level Examination or its equivalent. Applicants with any of the following qualifications may be considered for admission by Direct Entry, provided all the five subjects at '0' Level are obtained at not more than two sittings; 
                ND with upper credit/HND/N.C.E. at credit level in relevant subjects (plus U.M.E. requirements) may be considered for admission into the 200 Level. 
                Penalty for Gaining Admission with Falsified Credentials/Certificates 
                Candidates admitted to the University are seriously warned in their own interest, not to present false credentials/certificates to the University for their admission. The laws that established LAUTECH empowers the Senate to deprive any person of any degree, diploma or other award of the University which has been conferred upon him/her if, after due enquiry, it is discovered that the candidate has fraudulently gained admission into the University or obtained that award.
                <br><br>
                Deferment of Admissionbr
                <br><br>
                Any new student who, on account of ill health or other unforeseen circumstance, wants to defer his/her admission must satisfy the following conditions: 
                Must be duly registered and matriculated. 
                Must have paid all fees and obtained receipts.

                The procedures for deferment of Admission are as follows:
                Any new student who wants to defer his/her admission should apply to the Dean of his/her Faculty. The faculty board will consider the application and make necessary recommendation(s) to the Senate.
              </div>


              <div class="col-md-4 ">
                <div class="form1">
                    <form>
                          <div class="form-group">
                              <label for="exampleInputEmail1">UTME NO</label>
                              <input type="text" class="form-control" required placeholder="Enter your UTME NO" v-model="utme">
                              <small class="form-text text-danger">{{ error}}</small>
                               <small class="form-text text-danger">{{ invalid}}</small>
                          </div>
                          <button type="submit"  @click.prevent="admissionUpdate" class="btn" style="background-color:rgba(13, 88, 88); color:#fff;">Submit</button>
                    </form>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import authenticationService from "../services/authenticationService";

export default {
  name: "admission",
  data() {
    return {
      utme: "",
      error: "",
      valid: "",
      invalid: ""
    };
  },
  methods: {
    admissionUpdate: async function() {
      try {
        const response = await authenticationService.validateUtme({
          utme: this.utme
        });
        this.valid = response.data.valid;
        console.log("hello world");
      } catch (error) {}

      if (this.utme) {
        if (this.valid) {
          this.$router.push({
            name: "admissionResult",
            params: { studentUtme: this.utme }
          });
        } else {
          this.invalid = " INVALID UTME NUMBER";
        }
      } else {
        this.error = "Please fill out this field";
      }
      this.utme = "";
      console.log(invalid);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section-admission {
  padding: 2rem 0;
}
.form1 {
  background-color: #fcfbfd;
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 0 0 0.1rem rgba(13, 88, 88, 0.486);
}
.hd2 {
  color: #333;
  font: 500;
  font-family: "Times New Roman", Times, serif;
  font-size: 1.1rem;
}
</style>