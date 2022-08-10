<template>
        <div class="grid mt-40">      
            <vue-typed-js :strings="['Rimbaud Cyprien']" :showCursor="false" :shuffle="true" :cursorChar="'_'" :typeSpeed="75" >
                <p class="typing container mx-auto md:px-80 ml-12 mr-12 font-medium md:text-5xl font-sans md:font-serif"></p>
            </vue-typed-js>
            <vue-typed-js :strings="['Apprenti développeur']" :showCursor="false" :cursorChar="'_'" :typeSpeed="75" >
                <p class="typing container mx-auto md:px-80 ml-12 mr-12 font-medium md:text-5xl font-sans md:font-serif"></p>
            </vue-typed-js>
            <div class="grid place-content-center item-center mt-10 mb-10">
                <button v-if="aboutDisplay" v-on:click="removeAbout">
                    <svg class="animate-bounce w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                </button>

                <button v-else v-on:click="addAbout">
                <svg class="animate-bounce w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </button>
                
            </div>
            <div v-if="aboutDisplay">
                <vue-typed-js :strings="[this.aboutTxt]" :showCursor="false" :cursorChar="'_'" :typeSpeed="5" >
                    <p class="typing container mx-auto ml-12 mr-12 font-medium md:text-xl font-sans md:font-serif"></p>
                </vue-typed-js>
            </div>

        </div>
        
</template>

<script>
    export default {
        data() {
            return {
                aboutDisplay: false,
                aboutTxt: "Passionné par le développement depuis le collège, j’en ai appris les bases en autodidacte puis j’ai continué jusqu’au lycée où j’ai pris une option numérique, afin d’en apprendre plus sur le développement et l’univers de l’informatique. Mon intégration vers un BTS SIO s’est donc inscrite dans la continuité de mon parcours. En fin d’année 2020, mes résultats m’ont permis de pouvoir intégrer l’option SLAM de ce BTS."
            }
        },
        methods: {
            addAbout() {
                this.aboutDisplay = true;
            },
            removeAbout() {
                this.aboutDisplay = false;
            }
        }
    }

</script>
