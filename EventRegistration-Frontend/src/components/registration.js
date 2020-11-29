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
  name: 'eventregistration',
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
    createPerson: function (personName) {
      AXIOS.post('/persons/'.concat(personName), {}, {})
        .then(response => {
        // JSON responses are automatically parsed.
          this.persons.push(response.data)
          this.errorPerson = ''
          this.newPerson = ''
        })
        .catch(e => {
          var errorMsg = e.response.data.message
          console.log(errorMsg)
          this.errorPerson = errorMsg
        })
    },
  goToHelloPage: function() {
    router.push({
    name: "test"
    });
  },

    createEvent: function (eventName, eventDate, startTime, endTime) {
      AXIOS.post('/events/'.concat(eventName), {}, {
        params: {
          date: eventDate,
          startTime: startTime,
          endTime: endTime
        }})
        .then(response => {
        // JSON responses are automatically parsed.
          this.events.push(response.data)
          this.errorEvent = ''
          this.newEvent.name = ''
        })
        .catch(e => {
          var errorMsg = e.response.data.message
          console.log(errorMsg)
          this.errorEvent = errorMsg
        })
    },

    registerEvent: function (personName, eventName) {
      var indexEv = this.events.map(x => x.name).indexOf(eventName)
      var indexPart = this.persons.map(x => x.name).indexOf(personName)
      var person = this.persons[indexPart]
      var event = this.events[indexEv]
      AXIOS.post('/register', {},
        {params: {
          person: person.name,
          event: event.name}})
      .then(response => {
        // Update appropriate DTO collections
        person.events.push(event)
        this.selectedPerson = ''
        this.selectedEvent = ''
        this.errorRegistration = ''
      })
      .catch(e => {
        var errorMsg = e
        console.log(errorMsg)
        this.errorRegistration = errorMsg
      })
    }
  }
}