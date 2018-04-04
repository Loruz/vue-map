<template>
	<div class="map">
		<gmap-map
			class="google-map"
	    	:center="center"
	   	 	:zoom="7"
	   		>
		    <gmap-marker
		  <!--     :key="index"
		      v-for="(m, index) in markers"
		      :position="m.position"
		      :clickable="true"
		      :draggable="true"
		      @click="center=m.position" -->
		    ></gmap-marker>
  		</gmap-map>
	</div>
</template>
<script>

	export default {
	data () {
	      return {
	        center: {
	        	lat: 10.0, 
	        	lng: 10.0
	        },
	        // markers: [{
	        //   position: {lat: 10.0, lng: 10.0}
	        // }, {
	        //   position: {lat: 11.0, lng: 11.0}
	        // }]
	      }
	   }
	}
</script>

<style lang="scss" scoped>
	.google-map {
		height: 400px;
	}
</style>