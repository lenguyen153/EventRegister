import axios from 'axios'
import router from '../router'
var config = require('../../config')

var backendConfigurer = function(){
  switch(process.env.NODE_ENV){
      case 'development':
         return 'http://' + config.dev.backendHost + ':' + config.dev.backendPort;               //backend locally
        // return 'https://' + config.build.backendHost + ':' + config.build.backendPort ;           //backend on heroku
      case 'production':
          // return 'https://' + config.build.backendHost + ':' + config.build.backendPort ;
  }
};

var backendUrl = backendConfigurer();

var AXIOS = axios.create({
  baseURL: backendUrl,
 // headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

export default {
  name: 'test',
  data () {
    return {
      persons: [],
      events: [],
      newPerson: '',
      newEvent: {
        name: '',
        eventDate: '2017-12-08',
        startTime: '09:00',
        endTime: '11:00'
      },
      selectedPerson: '',
      selectedEvent: '',
      errorPerson: '',
      errorEvent: '',
      errorRegistration: '',
      response: []
    }
  },
  created: function () {
    // Initializing persons from backend
    AXIOS.get('/persons')
    .then(response => {
      // JSON responses are automatically parsed.
      this.persons = response.data
    })
    .catch(e => {
      this.errorPerson = e
    })
    // // Initializing events
    // AXIOS.get('/events')
    // .then(response => {
    //   this.events = response.data
    // })
    // .catch(e => {
    //   this.errorEvent = e
    //   // this.errors.push(e)
    // })
  },
  methods: {

  }
}