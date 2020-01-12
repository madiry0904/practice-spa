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
