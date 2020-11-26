<template>
  <div id="test">
    <h2>Persons</h2>
      <table>
        <tr v-for="person in persons">
            <td>{{ person.name }}</td>
            <td>
              <ul>
                <li>aaaaaaaaaaaaaaaaaaaa
                </li>
              </ul>
            </td>
        </tr>
         
    <!-- ... -->
    </table>
    <button type="button" v-on:click="goToHelloPage()" > Hello </button>
  </div>
</template>
<script src="./test.js"></script>


<style>
  #test {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background: #f2ece8;
  }
</style>