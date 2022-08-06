<template>
     <nav class = "navigation"> 
        <a href="index.html">Home</a>
        <a href="biography.html">biography</a>
        <a href="choices.html">choices</a>
        <a href="resume.html">resume</a>
        <a href="piano.html">piano</a>
        <a href="pictures.html">my cat</a>
     </nav> 
     <br><br>
     <body>
  <h1>Requests go to the toilet.</h1><h3>After you select submit, you will be taken to the toliet.</h3><h4> Make sure you click back to get back to the website!</h4>
    <form name ="choicesInput" action="https://ptsv2.com/t/qp7de-1659569758/post" method="post" onsubmit="return validateInput()">
        <section> 
        <br><h3>Please fill out the following information</h3>
        <!-- I added in alerts to the dom and to the page. -->
        <label>Please enter your first name:</label>
        <input type="text" id="firstName" name = "firstName" minlength="3" required  oninvalid="this.setCustomValidity('First Name is too short. Minimum of 3 characters. Please try again')"
        oninput="this.setCustomValidity('')"><br>
        <label>Please enter your last name:</label>
        <input type="text" id="lastName" name = "lastName" minlength="3" required oninvalid="this.setCustomValidity('Last Name is too short. Minimum of 3 characters. Please try again')"
        oninput="this.setCustomValidity('')"><br>
        </section>

        <section>
        <h3>Please select your favorite color</h3>
        <input type="radio" id="green" value="green" name="color">
        <label for="green">Green</label><br>
        <input type="radio" id="orange" value="orange" name="color">
        <label for="orange">Orange</label><br>
        <input type="radio" id="yellow" value="yellow" name="color">
        <label for="yellow">Yellow</label><br>
        <input type="radio" id="pink" value="pink" name="color">
        <label for="pink">Pink</label><br>
        </section>

        <section>
        <h3>Please select what instruments you have played</h3>        

        <input type="checkbox" id="piano" value="piano" name="instrument" >
        <label for="piano">Piano</label><br>
        <input type="checkbox" id="Guitar" value="Guitar" name="instrument">
        <label for="Guitar">Guitar</label><br>
        <input type="checkbox" id="Bass" value="Bass" name="instrument">
        <label for="Bass">Bass</label><br>
        <input type="checkbox" id="Violin" value="Violin" name="instrument">
        <label for="Violin">Violin</label><br>
        </section>
        
        <br>
        <input id ="submit" type="submit" value="Submit">
    </form>
 
    </body>
</template>

<script>
     



</script>
