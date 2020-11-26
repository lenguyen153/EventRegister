<template>
  <div id="eventregistration">
    <h2>Persons</h2>
      <table>
        <tr v-for="person in persons" >
            <td>{{ person.name }}</td>
            <td> 
              <ul>
                <li v-for="event in person.events">
                  {{event.name}}
                </li>
              </ul>
            </td>
        </tr>
        <tr>
            <td>
                <input type="text" v-model="newPerson" placeholder="Person Name">
            </td>
            <td>
                <button v-bind:disabled="!newPerson" @click="createPerson(newPerson)">Create Person</button>
            </td>
        </tr>
      </table>
    <p>
      <span v-if="errorPerson" style="color:red">Error: {{errorPerson}} </span>
    </p>
  <hr>
  <h2>Events</h2>
  <table>
    <tr>
      <th>Event Name</th>
      <th>Date</th>
      <th>Start</th> 
      <th>End</th>
      <!--<th>Edit</th>-->
    </tr>
    <tr v-for="event in events">
      <td>{{ event.name }}</td>
      <td>{{ event.eventDate }}</td>
      <td>{{ event.startTime }}</td>
      <td>{{ event.endTime }}</td>
      <!--<td>
        <button v-on:click="updateEvent(event.name)">Edit</button>
      </td>-->
    </tr>
    <tr>
      <td>
        <input type="text" v-model="newEvent.name" placeholder="Event Name">
      </td>
      <td>
        <input type="date" v-model="newEvent.eventDate" placeholder="YYYY-MM-DD">
      </td>
      <td>
        <input type="time" v-model="newEvent.startTime" placeholder="HH:mm">
      </td>
      <td>
        <input type="time" v-model="newEvent.endTime" placeholder="HH:mm">
      </td>
      <td>
        <button 
          <button v-bind:disabled="!newEvent.name" v-on:click="createEvent(newEvent.name, newEvent.eventDate, newEvent.startTime, newEvent.endTime)">Create</button>
      </td>
    </tr>
  </table>
      <span v-if="errorEvent" style="color:red">Error: {{errorEvent}} </span>
  <hr>
  <h2>Registrations</h2>
  <label>Person:     
    <select v-model="selectedPerson">
      <option disabled value="">Please select one</option>
      <option v-for="person in persons" >
        {{ person.name }}
      </option>
    </select>
  </label>
  <label>Event:     
    <select v-model="selectedEvent">
      <option disabled value="">Please select one</option>
      <option v-for="event in events" >
        {{ event.name }}
      </option>
    </select>
  </label>
  <button v-bind:disabled="!selectedPerson || !selectedEvent" @click="registerEvent(selectedPerson,selectedEvent)">Register</button>
  <hr>
  <span v-if="errorRegistration" style="color:red">Error: {{errorRegistration}} </span> 
  </div>
</template>
<script src="./registration.js"></script>
<style>
#eventregistration {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2ece8;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: disc;
  text-align:left;
  padding: 1;
}
li {
  margin: 1 10px;
}
a {
  color: #42b983;
}
</style>