<template>
	<div class="map">
		<gmap-map
			class="google-map"
	    	:center="position"
	   	 	:zoom="5"
	   		>
		    <gmap-marker
		      :position="position"
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
  					<div class="map__info-cord-block">{{ position.lng | cordsShort }}</div>
  				</div>
  				<div class="map__info-cord--lat">
  					<div class="map__info-text">Latitude</div>
  					<div class="map__info-cord-block">{{ position.lat | cordsShort }}</div>
  				</div>
  			</div>
  			<div class="map__info-long-url">
  				<label>
  					Full URL
  					<input type="text">
  				</label>
  				
  			</div>
  			<div class="map__info-short-url">
  				<label>
  					Short URL
  				<input type="text">
  				</label>
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
	      	},
	      	longUrl: '',
	      	shortUrl: ''
	      }
	   },
	   filters: {
	   	 cordsShort (val) {
	   	 	return val.toFixed(7)
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
			&-short-url,
			&-long-url {
				color: $font-color;
				margin-top: 15px;
				input {
					width: 100%;
					margin-top: 15px;
					padding: 10px;
					font-size: 18px;
					color: $font-color;
				}
			}
		}
	}
</style>