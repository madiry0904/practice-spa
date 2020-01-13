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
      <option value = "30"> 30 minutes or less</option>
      <option value ="30-45">30-45 minutes</option>
      <option value = "45">45 minutes or more</option>
    </select>
  </div>

  <div class="flex quiz justify-center">
    <button type ="submit">Submit</button>
  </div>
  </form>
</div>
`;
