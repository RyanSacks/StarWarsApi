<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                {{ getAllStarWarsStarships() }}

                <ul>
                    <li v-for="item in starwarsallstarships.results">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {

        name: "StarWarsStarshipsComponent",

        data() {
            return {
                starwarsallstarships: []
            }
        },

        mounted() {
            console.log('Component mounted.')
        },

        methods:{

            getAllStarWarsStarships() {

                fetch("https://swapi.co/api/starships/")
                    .then(response=>response.json())
                    .then(data=>{
                        this.starwarsallstarships=data;
                    })

            }

        }
    }
</script>
