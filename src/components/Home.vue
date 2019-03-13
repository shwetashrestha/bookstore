<template>
  <div>
    <Slider></Slider>
    <NewArrivals></NewArrivals>
    <BestBook></BestBook>
    
  </div>
</template>
<script>
import Slider from './Slider'
import NewArrivals from './NewArrivals'
import BestBook from './BestBook'
export default {
   components: {
         Slider,
         NewArrivals,
         BestBook       
      }
}
</script>

