<template>
	<div class="map">
		<gmap-map
			class="google-map"
	    	:center="position"
	   	 	:zoom="5"
	   		>
		    <gmap-marker
		      :position="position"
		      :clickable="true"
		      :draggable="true"
		      @click="center=m.position"
		    ></gmap-marker>
  		</gmap-map>
  		<div class="map__timer">
  			<div class="map__timer-text">Next set in</div>
  			<div class="map__timer-seconds">24</div>
  		</div>
  		<div class="map__info">
  			<div class="map__info-cord-wrap">
  				<div class="map__info-cord--long">
  					<div class="map__info-text">Longtitude</div>
  					<div class="map__info-cord-block">{{ position.lng }}</div>
  				</div>
  				<div class="map__info-cord--lat">
  					<div class="map__info-text">Latitude</div>
  					<div class="map__info-cord-block">{{ position.lat }}</div>
  				</div>
  			</div>
  			<div class="map__info-long-url">
  				
  			</div>
  			<div class="map__info-shor-url">
  				
  			</div>
  		</div>
	</div>
</template>
<script>

	export default {
	data () {
	      return {
	      	position: {
	      		lat: 0, 
	        	lng: 0,
	      	}
	      }
	   },
	   methods: {
	   	generateCoordinate () {
	   		this.position.lng = Math.random() * 180
	   		this.position.lat = Math.random() * 90
	   	}
	   },
	   mounted () {
	   		this.generateCoordinate()
	   }
	}
</script>

<style lang="scss" scoped>
	$font-color: #585858;
	$cord-block-color: #ebebeb;
	.google-map {
		height: 400px;
	}
	.map {
		position: relative;
		&__timer {
			position: absolute;
    		top: 280px;
		    left: 50%;
		    text-align: center;
		    color: $font-color;
		    transform: translate(-50%);
		    font-weight: bold;
		    &-text {
		    	font-size: 20px;
		    }
		    &-seconds {
		    	font-size: 70px;
		    }
		}
		&__info {
			width: 100%;
			max-width: 900px;
			margin: 0 auto;
			padding: 30px;
			&-text {
				color: $font-color;
				margin-bottom: 15px;
			}
			&-cord {
				&--long,
				&--lat {
					width: 47%;
				}
			}
			&-cord-wrap {
				display: flex;
				justify-content: space-between;
				width: 100%;
			}
			&-cord-block {
				background: $cord-block-color;
				padding: 10px;
				color: $font-color;
				text-align: center;
			}
		}
	}
</style>