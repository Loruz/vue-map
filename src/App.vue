<template>
  <div id="app">
    <div class="map">
    <gmap-map
      class="google-map"
        :center="position"
        :zoom="10"
        :options="mapOptions">
        <gmap-marker
          :position="position"
        ></gmap-marker> 
    </gmap-map>
    <div class="map__link-list">
      <div class="map__link-list-title">Saved URLs</div>
      <ol>
        <li v-for="url in urlList">{{ url }}</li>
      </ol>
    </div>
      <div class="map__timer">
        <div class="map__timer-text">Next set in</div>
        <div class="map__timer-seconds">{{ counter }}</div>
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
          <label>
            <div class="label-name">Full URL</div>
            <input type="text" :value="longUrl">
          </label>
          
        </div>
        <div class="map__info-short-url">
          <label>
            <div class="label-name">Short URL</div>
            <div class="map__info-short-url-wrapper">
               <input type="text" :value="shortUrl">
               <button @click="saveShort">Save</button>
            </div>
          </label>
           
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {shortenURL} from 'gapi-url'
  export default {
  data () {
        return {
          position: {
            lat: 0, 
            lng: 0,
          },
          interval: null,
          longUrl: '',
          shortUrl: '',
          shortUrlKey: 'AIzaSyDoMGDS0J-ab1Q3nqgXfk5IUXfJHD7Utys',
          counter: 30,
          urlList: [],
          mapOptions: {
             fullscreenControl: false,
             zoomControl: false,
             streetViewControl: false,
             mapTypeControl: false
          }
        }
     },
     methods: {
      generateCoordinate () {
        this.position.lng = parseFloat(this.getRandom(-10,50,7).toFixed(7))
        this.position.lat = parseFloat(this.getRandom(0,70,7).toFixed(7))
        this.longUrl = `https://www.google.lt/maps/@${this.position.lat},${this.position.lng},10z?hl=en`
        this.makeShortUrl(this.longUrl)
      },
      makeShortUrl (url) {
         shortenURL(this.shortUrlKey, url, (err, short) => {
          this.shortUrl = short
        })
      },
      getRandom(from, to, fixed) {
        return (Math.random() * (to - from) + from).toFixed(fixed) * 1  
      },
      saveShort () {
        if (!this.urlList.includes(this.shortUrl)) {
            this.urlList.push(this.shortUrl); 
            localStorage.setItem('map.shorts', JSON.stringify(this.urlList))
          }
        },
      startInterval () {
        this.interval = setInterval(() => {
           this.counter--
          if (this.counter < 0) {
            clearInterval(this.interval);
            this.counter = 30
            this.generateCoordinate()
            this.startInterval()
          }
        }, 1000)
      }
     },
     mounted () {
        this.generateCoordinate()
        this.startInterval()
        let shorts = localStorage.getItem('map.shorts')
        if (shorts !== null) {
            shorts = JSON.parse(shorts)
            shorts.forEach((short) => {
                this.urlList.push(short)
            })
        }
     }
  }
</script>

<style lang="scss">
  $font-color: #585858;
  $cord-block-color: #ebebeb;
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: sans-serif;
  }
  .google-map {
    height: 400px;
  }
  .map {
    position: relative;
    &__link-list {
      position: absolute;
      right: 0;
      top: 0;
      height: 400px;
      background: rgba(255,255,255,.7);
      width: 300px;
      padding: 40px;
      &-title {
         color: $font-color;
      }
      ol {
        padding-left: 20px;;
        li {
          color: $font-color;
        }
      }
    }
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
        .label-name {
          margin-bottom: 15px;
        }
        input {
          width: 100%;
          padding: 10px;
          margin-right: 15px;
          font-size: 18px;
          color: $font-color;
        }
      }
      &-short-url {
        &-wrapper {
         display: flex;
        }
        button {
          padding: 10px 20px;
          color: #dedede;
          font-size: 16px;
          font-weight: bold;
          background: $font-color;
        }
      }
    }
  }
</style>