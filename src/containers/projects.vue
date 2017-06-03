<template>
    <div id="projects">
        <div class="columns">
            <div class="column is-half">
                <!--components -->
                <project-list />
                <add-project />
            </div>
            <div class="column is-one-quarter">
                <!--components -->
                <project-status />
            </div>
        </div>
    </div>
</template>

<script>
import projectLIst from '../components/projectList'
import addProject from '../components/addProject'
import projectStatus from '../components/projectStatus'

export default {
    name: 'projects', 
    components: {
        projectList, 
        addProject, 
        projectStatus 
    }, 
}
</script>