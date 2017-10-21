new Vue({
  el: '#exercise',
  data: {
    atth: false,
    color: 'red',
    blue: 'blue',
    green: 'green',
    backgroundColor: 'red',
    width:0,


  },
  computed: {
    startEffect: function() {
      return{
        highlight: this.atth,
        shrink: !this.atth
      };
    },

  },
 methods:{
   move: function()
   {

    var loading = this;
    var id = setInterval(frame, 10);
          function frame() {
            if (loading.width == 100) {

              clearInterval(id)
            } else {

              loading.width++;


            }
          }




   }
}


});
