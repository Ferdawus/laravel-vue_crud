import {createRouter,createWebHistory} from "vue-router"
import Add from "../crud/AddNew.vue";
import List from "../crud/List.vue";
import StudentEdit from "../crud/EditData.vue";

const routes = [

    {
        path: '/',
        name: "List",
        component: List
    },
    {
        path: '/add-new',
        name: "Add",
        component: Add
    },
    {
        path: '/student/:id/edit/',
        name: "student.edit",
        component: StudentEdit
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
