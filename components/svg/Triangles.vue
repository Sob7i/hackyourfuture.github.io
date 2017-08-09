<template>
  <div>
    <svg version="1.1" :width="width" xmlns="http://www.w3.org/2000/svg" :viewbox="`0 0 ${width} ${height}`" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern v-for="img, key in imgs" :id="`bg_svg_${key}`" x="0" y="0" width="1" height="1">
          <image :width="img.width" :height="img.height" y="0" x="-30" :xlink:href="img.url"/>
        </pattern>
      </defs>
      <g>
        <path v-for="item in paths" :fill="item.fill" :d="getPathString(item.vertex)"/>
      </g>
    </svg>
  </div>
</template>
<style scoped>
 path {
   transition: all 0.25s ease-in-out;
 }
</style>
<script>
 import Colors from '~/constants/colors'

 function rand(to) {
   return Math.floor(Math.random() * to)
 }

 export default {
   name: 'SVGTriangles',
   props: {
     animate: { default: false },
     interval: { default: 150 },
     orientation: { default: 0 },
     colors: {
       default: () => Colors.Custom,
     },
     width: { default: 0 },
     height: { default: 0 },
     size: { default: 100 },
     margin: { default: 50 },
     imgs: { default: () => [] }
   },
   data() {
     return {
       columns: 10,
       paths: this.getPaths(),
     }
   },
   mounted() {
     if( this.animate ) this.play()
   },
   watch: {
     width() {
       this.paths = this.getPaths()
     },
     height() {
       this.paths = this.getPaths()
     },
   },
   methods: {
     play () {
       this.tick = setInterval(() => {
         this.paths[rand(this.paths.length)].color = this.colors[rand(this.colors.length)]
       }, this.interval )
     },
     pause () {
       clearInterval(this.tick)
     },
     getPathString(i) {
       return `M ${i} z`
     },
     getPaths() {
       const paths = []
       const size = this.size
       const columns = Math.ceil(this.width / size)
       const rows = (Math.ceil(this.height / size) * 2) + 2

       for (let row = 0; row <= rows; row++) {
         for (let column = 0; column <= columns; column++) {
           let y = this.size * row / 2
           let x = this.size * column
           let orientation = this.orientation === 0 ? ( row % 2 ? 180 : 0 ) : ( row % 2 ? 90 : 270 )
           let fill = this.fill(row, column)

           if ( this.orientation === 0 ) {
             x = (x + this.margin) - this.size
             y = (y + this.margin) - this.size
           } else {
             x = row % 2 ? x - (this.size - this.margin) / 2 : x + this.margin / 2
             x = x - this.size
             y = row % 2 ? y - this.size / 2 : y
           }

           paths.push({ vertex: this.getVertex(size, { x, y }, orientation ), fill })
         }
       }

       return paths
     },

     getCords() {
       this.allCords = this.allCords || this.imgs.reduce((prev, next) => prev.concat(next.cords || []), [])
       return this.allCords
     },

     fill(row, column) {
       let hasCords = this.getCords().filter(obj => obj[0] === row && obj[1] === column).length > 0

       if (hasCords) {
         let index = this.imgs.findIndex(el => {
           let arr = el.cords.filter(cord => {
             return cord[0] === row && cord[1] === column
           })
             return arr.length > 0
         })

         return `url(#bg_svg_${index})`
       }

       return this.colors[rand(this.colors.length)]

     },

     getVertex(size, position, rotation) {
       let vertex = []
       const half = size / 2
       const full = size

       switch (rotation) {
         case 90:
           vertex[0] = [0, 0]
           vertex[1] = [half, full]
           vertex[2] = [full, 0]
           break

         case 180:
           vertex[0] = [0, 0]
           vertex[1] = [0, full]
           vertex[2] = [full, half]
           break

         case 270:
           vertex[0] = [0, full]
           vertex[1] = [full, full]
           vertex[2] = [half, 0]
           break

         default:
           vertex[0] = [0, half]
           vertex[1] = [full, full]
           vertex[2] = [full, 0]
           break
       }

       // Add postion variables
       vertex = vertex.map(item => item.map((cord, index) => (index === 0 ? cord + position.x : cord + position.y)))

       return `${vertex[0].join(',')} ${vertex[1].join(',')} ${vertex[2].join(',')}`
     },
   },
 }
</script>
