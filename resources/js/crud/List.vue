<template>
  <div>
    <h1 class="text-center mt-2">All List Page</h1>
    <div class="col-md-10 m-auto mt-5">
      <div class="card">
        <div class="card-header">
          <router-link :to="{ name: 'Add' }" class="btn btn-primary"
            >Add New
          </router-link>
        </div>
        <div class="card-body">
          <table class="table table-hover table-responsive table-scripted">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(student, index) in students.data" :key="index">
                <th scope="row">{{ ++index }}</th>
                <td>{{ student.name }}</td>
                <td>{{ student.email }}</td>
                <td>{{ student.phone }}</td>
                <td>{{ student.gender }}</td>

                <td>
                  <router-link
                    :to="{ name: 'student.edit', params: { id: student.id } }"
                    class="btn btn-primary"
                  >
                    Edit
                  </router-link>

                  <a
                    href=""
                    class="btn btn-danger"
                    @click.prevent="destroy(student.id)"
                  >
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    this.fachData();
  },
  methods: {
    fachData() {
      axios
        .get("/api/students")
        .then((res) => {
          this.students = res.data;
        })
        .catch((err) => {});
    },
    destroy(id) {
      if (!window.confirm("Are You Share To Delete ?")) {
        return;
      }
      axios
        .delete("/api/students/" + id)
        .then((res) => {
          if (res.status === 200) {
            this.fachData();
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },

  // mounted() {
  //
  // },
};
</script>
<style lang="">
</style>