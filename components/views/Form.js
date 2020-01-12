export default `
<div id="quiz-picture"></div>

  <div class = " flex justify-center align-center">
  <form action ="#" method="POST" >

    <h3>Please select the answer that best applies to your current situation</h3>
  <div class= "flex quiz name">
    <label for = "name">Name</label>
    <input id ="name" type = "text" >
  </div>

  <div class= "flex quiz">
    <label for= "stress">Rate Your Stress Level (1-10)</label>
    <input id = "stress" type = "number" step ="1" >
  </div>

  <div class ="flex quiz">
    <label for ="time">Please select the amount of time you have</label>
    <select id = "time" name= "number">
      <option value = "10"> 15 minutes or less</option>
      <option value ="10-20">15-30 minutes</option>
      <option value = "30-45">30-45 minutes</option>
      <option value = "45-60">45-60 minutes</option>
      <option value = "60+">60+ minutes</option>
    </select>
  </div>

  <div class ="quiz">
    <label>Can you leave where you are and go to a class right now?</label>
    <label for ="yes">Yes</label>
    <input id = "yes" type = "radio" value = "yes">
    <label for = "no">No</label>
    <input id = "no" type = "radio" value = "no">
  </div>

  <div class="flex quiz justify-center">
    <button type ="submit">Submit</button>
  </div>
  </form>
</div>
`;

/*
export default `

<form action="forms/non-existent-form-handler.php"
      method="POST"
      class ="flex flex--column align-center"
      data-netlify="true"
      name= "Contact Form"
      >

        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Full Name" />
        </div>
        <div>
          <label for="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@somewhere.com"
          />
        </div>
        <div>
          <label for="fone">Phone:</label>
          <input type="tel" name="fone" id="fone" />
        </div>
        <div>
          <label for="msg">Enter your message:</label>
          <textarea name="msg" id="msg" cols="30" rows="10"></textarea>
        </div>
        <p>What's this message about?</p>
        <div>
          <input
            type="radio"
            name="subject"
            value="professional"
            id="pro"
            checked
          />
          <label for="pro">I'd like to hire you!</label>
        </div>
        <div>
          <input type="radio" name="subject" value="personal" id="personal" />
          <label for="personal">Personal message</label>
        </div>
        <div>
          <input type="radio" name="subject" value="other" />
          <label>Don't know/something else</label>
        </div>
        <input
          type="checkbox"
          name="optin"
          value="trusting"
          id="news"
          checked
        />
        <label for="news">Subscribe me to your newsletter!</label>
        <div>
          <label for="marketing">How did you hear about me?</label>
          <select name="marketing">
            <optgroup label="Online">
              <option value="social"
                >Social Media (FB, Twitter, LinkedIn)</option
              >
              <option value="github">Online Portfolio (GitHub)</option>
              <option value="search">Search Engine</option>
              <option value="email">Email</option>
            </optgroup>
            <optgroup label="In-Person">
              <option value="networking">We met at a networking event</option>
              <option value="referral">Personal referral</option>
              <option value="random">We met somewhere else</option>
            </optgroup>
            <option value="other">Other</option>
          </select>
        </div>
        <!-- Developer's Note: Default 'type' is "submit". -->
        <button>Submit!</button>
      </form>
      `;
      */
