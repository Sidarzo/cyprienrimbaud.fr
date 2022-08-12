<template>
<div class="container mx-auto ">
        <div class="grid mt-40">      
            <vue-typed-js :strings="['Rimbaud Cyprien']" :showCursor="false" :shuffle="true" :cursorChar="'_'" :typeSpeed="75" >
                <p class="typing container mx-auto md:px-80 ml-8 mr-12 font-medium md:text-5xl text-2xl font-sans md:font-serif"></p>
            </vue-typed-js>
            <vue-typed-js :strings="['Apprenti développeur']" :showCursor="false" :cursorChar="'_'" :typeSpeed="75" >
                <p class="typing container mx-auto md:px-80 ml-8 mr-12 font-medium md:text-4xl text-xl font-sans md:font-serif"></p>
            </vue-typed-js>
            <div class="grid place-content-center item-center mt-10 mb-10">
                <button v-if="aboutDisplay" v-on:click="removeAbout">
                    <svg class="animate-bounce w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path></svg>
                </button>
                <button v-else v-on:click="addAbout">
                <svg class="animate-bounce w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </button>
            </div>
            <transition name="aboutText">
                <div v-if="aboutDisplay">
                    <p class="ml-12 mr-12 font-medium md:text-xl font-sans md:font-serif text-justify mb-5">{{this.aboutTxt}}</p>
                </div>
            </transition>
        </div>
    </div>
        
</template>

<script>
    export default {
        data() {
            return {
                aboutDisplay: false,
                aboutTxt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel volutpat purus. Nunc quis eleifend lectus, et consectetur felis. Nulla congue libero mauris, et tempor libero feugiat finibus. Suspendisse posuere dignissim orci, id accumsan enim scelerisque ut. Aenean eu nulla non erat vehicula mattis. Suspendisse id odio vel mi aliquet imperdiet. Praesent nulla leo, egestas eu maximus nec, cursus tincidunt odio. Curabitur sit amet nisi varius, consectetur neque non, porta dolor. Fusce sed pulvinar nisi, rutrum posuere eros. Nullam semper leo nec felis imperdiet euismod. Nulla finibus ligula odio, sed semper tortor congue non. Nunc elementum auctor ipsum ut malesuada. Nam cursus, neque nec venenatis semper, mauris tortor feugiat felis, ac mattis nisl leo posuere metus. Etiam sit amet accumsan ex."
            }
        },
        methods: {
            addAbout() {
                this.aboutDisplay = true;
            },
            removeAbout() {
                this.aboutDisplay = false;
            }
        },
        transition: 'aboutText'
    }

</script>

<style>
  .aboutText-enter-active, .aboutText-leave-active { transition: opacity 1.5s; }
  .aboutText-enter, .aboutText-leave-active { opacity: 0; }
</style>