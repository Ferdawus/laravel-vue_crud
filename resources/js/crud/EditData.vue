<template>
  <div>
    <div class="col-md-6 m-auto mt-5">
      <div class="card">
        <div class="card-header">
          <router-link :to="{ name: 'List' }" class="btn btn-info"
            >All Data</router-link
          >
        </div>
        <div class="card-body">
          <!-- {{errors}} -->
          <!-- {{this.$route.params.id}} -->
          <form @submit.prevent="updateData">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="form.name"
              />
              <span v-if="errors.name" class="text-danger">{{
                errors.name[0]
              }}</span>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="form.email"
              />
              <span v-if="errors.email" class="text-danger">{{
                errors.email[0]
              }}</span>
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">Phone</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                v-model="form.phone"
              />
              <span v-if="errors.phone" class="text-danger">{{
                errors.phone[0]
              }}</span>
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-control"
                name=""
                id="gender"
                v-model="form.gender"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <span v-if="errors.gender" class="text-danger">{{
                errors.gender[0]
              }}</span>
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        gender: "",
      },

      errors: [],
    };
  },
  mounted() {
    this.editData();
  },
  methods: {
    editData() {
      axios
        .get("/api/students/" + this.$route.params.id)
        .then((res) => {
          if (res.status === 200) {
            this.form = res.data.data;
            // this.errors = "";
          }
          // console.log(res);
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          // console.log(err.response.data.errors);
        });
    },
    updateData() {
      axios
        .put("/api/students/" + this.$route.params.id,this.form)
        .then((res) => {
          if (res.status === 200) {
            this.form = "";
            this.errors = "";
            this.$router.push({name:'List'});
            // this.errors = "";
          }
          // console.log(res);
        })
        .catch((err) => {
          this.errors = err.response.data.errors;
          // console.log(err.response.data.errors);
        });
    },

  },
  

  
};
</script>

<style>
</style>