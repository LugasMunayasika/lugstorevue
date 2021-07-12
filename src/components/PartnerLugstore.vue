<template>
    <!-- Partner Logo Section Begin -->
    <div class="partner-logo">
        <div class="container">
            <carousel class="logo-carousel" :loop="true" :autoplay="true" :items="5" :dots="false" :nav="false" >
                <div class="logo-item" >
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/Logo Sajiku Tepung Bumbu.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/logoroyco.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/ajinomoto.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/Kecap_Bango.png" alt="" />
                    </div>
                </div>
                <div class="logo-item">
                    <div class="tablecell-inner">
                        <img src="img/logo-carousel/unilever.jpg" alt="" />
                    </div>
                </div>
            </carousel>
        </div>
    </div>
    <!-- Partner Logo Section End -->
</template>
<script>
import carousel from "vue-owl-carousel";
export default {
    name : "PartnerLugstore",
    components: {
        carousel
    }
}
</script>
