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
                    <td><complete-toggle :item="item" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import completeToggle from './completeToggle'

export default {
    name: 'projectList',
    components: {
        completeToggle
    },
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

<style>
.completed {
    text-decoration: line-through; 
}
</style>