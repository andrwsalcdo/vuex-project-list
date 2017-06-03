<template>
    <div class="">
        <table class="table">
            <thead>
                <tr>
                    <th>Project Name</th>
                    <th>Assigned To</th>
                    <th>Priority</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in projects">
                    <td>{{item.name}}</td>
                    <td>{{item.assignedTo}}</td>
                    <td>{{item.priority}}</td>
                    <td><i v-if="item.completed" class="fa fa-check"></i></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'projectList',
    // helper function mapState from Vuex
    // it's the same thing as...
    // computed: {
    //    projects () {
    //       return this.$store.state.projects
    //    }
    //}
    computed: mapState ([
        'projects'
    ])
}
</script>