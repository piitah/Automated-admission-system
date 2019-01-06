import Api from "@/services/api"

export default {
  createdept(credentials) {
    return Api().post('dept', credentials)
  },
  getFaculty() {
    return Api().get('dept')
  },

  getStudent() {
    return Api().get('student')
  },

  createfaculty(credentials) {
    return Api().post('faculty', credentials)
  },
  admissionUpdate(studentUtme) {
    return Api().get(`admission/${studentUtme}`)
  },
  validateUtme(utme) {
    return Api().post('admission', utme)
  },
  getpost() {
    return Api().get('')
  }
}