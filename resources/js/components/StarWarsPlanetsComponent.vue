<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                {{ getAllStarWarsPlanets() }}

                <ul>
                    <li v-for="item in starwarsallplanets.results">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        name: "StarWarsPeopleComponent",

        data() {
            return {
                starwarsallplanets: []
            }
        },

        mounted() {
            console.log('Component mounted.')
        },

        methods:{

            getAllStarWarsPlanets() {

                fetch("https://swapi.co/api/planets/")
                    .then(response=>response.json())
                    .then(data=>{
                        this.starwarsallplanets=data;
                    })

            }

        }
    }
</script>
