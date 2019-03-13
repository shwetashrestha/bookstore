<template>
  <div>
    <Slider></Slider>
    <NewArrivals></NewArrivals>
    <BestBook></BestBook>
    
  </div>
</template>
<script>
import Slider from '../components/Home/ImageSlider'
import NewArrivals from '../components/Home/NewArrivals'
import BestBook from '../components/Home/BestBook'
export default {
   components: {
         Slider,
         NewArrivals,
         BestBook       
      }
}
</script>
