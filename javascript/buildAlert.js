// function showMoreAlert(id) {
//     // var alert = document.getElementById("alert"+id);
//     // var button = document.getElementById("showMoreAlert"+id);
//     // if(alert.className == "alert less"){
//     //   alert.className = "alert more";
//     //   button.innerText = "Show less";
//     // } else {
//     //   alert.className = "alert less";
//     //   button.innerText = "Show more";
//     // }
//     console.log('works '+id);
// }
//
//
//
// function buildAlertPreview(title, id){
//   alertList = document.getElementsByClassName("alert-list");
//
//   alert = document.createElement("DIV");
//   alert.id = 'alert'+id;
//
//   alertTitle = document.createElement("DIV");
//   alertTitle.className = 'title';
//
//   titleContent = document.createElement("H1");
//   titleContent.style = 'width: auto; color: black;';
//   titleContent.textContent = title;
//
//   alertTitle.appendChild(titleContent);
//
//   alert.appendChild(alertTitle);
//
//   var button = document.createElement("BUTTON");
//   button.onclick = "loadMore()";
//   button.id = "showMoreAlert"+id;
//   button.className = 'edit-button';
//   button.textContent = 'Show more';
//
//   alert.appendChild(button);
//
//   console.log(alert);
// }


var alertaJSON = {'id' : 1,
 'title' : 'Do You Have Winter Allergies?',
 'topics' : [
   'Intro', 'If you’re allergic to pollen, you may get a break when the weather gets cold. But if you have indoor allergies such as mold and dust mites, you may notice your allergy symptoms more during winter, when you spend more time inside.',
   'Causes', 'When it gets cold and your furnace kicks on, it sends dust, mold spores, and insect parts into the air. They can get into your nose and launch a reaction. Some common indoor allergy triggers are:Dust mites . These microscopic bugs flourish in mattresses and bedding. When their droppings and remains become airborne, they can cause allergy symptoms.Mold. This fungus thrives in damp, humid areas such as basements and bathrooms. When mold spores get into the air, they can trigger allergy symptoms.',
   'Symptoms', 'Allergy symptoms caused by dust, pollen, or mold include:Coughing Dark circles under the eyes Itchy eyes and nose Runny nose How can you tell whether your symptoms are from a cold, the flu, or allergies? A cold usually doesnt last for more than 10 days. Allergies can linger for weeks or even months. Also, colds and flu sometimes have a fever and aches and pains, which don’t usually happen with allergies.',
   ] };

alertaJSON = {
  'id' : 1,
  'title' : 'People With Sun Allergy (Photosensitivity) Are In Danger',
  'intro' : 'Nasa announced recently a gamma ray burst coming from the sun, wich means people with sesitivity to light should not leave the house',
  'causes' : 'Causes are still unknown by biologists, it is a DNA mutation but the exact cause of it happening in the first place is unknown.',
  'symptoms' : 'Symptoms are very subtle untill our sun throws a surprise, your skin is a little more red in the summer when you expose more of your body to direct sun light, you may have just a more sensitive skin in general.',
  'severity' : 5,
  'frequency' : {'interval' : 1, 'times' : 7},
  'statistics' : {  'casesPerHundred' : 4, 'costsComparedToSalary' : 0, 'severeCasesPerHundred' : 20, 'shouldYouBeWorried' : 10},
  'treatment' : 'There is no real treatment for this, except natural hidratant creams  wich just gets rid of the symptoms but not the problem'
}
alertaJSON = {
  'id' : 1,
  'title' : 'Do You Have Winter Allergies?',
  'intro' : 'If you’re allergic to pollen, you may get a break when the weather gets cold. But if you have indoor allergies such as mold and dust mites, you may notice your allergy symptoms more during winter, when you spend more time inside.',
  'causes' : 'Causes are still unknown by biologists, it is a DNA mutation but the exact cause of it happening in the first place is unknown.',
  'symptoms' : 'Allergy symptoms caused by dust, pollen, or mold include:Coughing Dark circles under the eyes Itchy eyes and nose Runny nose How can you tell whether your symptoms are from a cold, the flu, or allergies? A cold usually doesnt last for more than 10 days. Allergies can linger for weeks or even months. Also, colds and flu sometimes have a fever and aches and pains, which don’t usually happen with allergies.',
  'severity' : 1,
  'frequency' : {'interval' : 1, 'times' : 1},
  'statistics' : {  'casesPerHundred' : 15, 'costsComparedToSalary' : 15, 'severeCasesPerHundred' : 5, 'shouldYouBeWorried' : 6},
  'treatment' : 'There is no real treatment for this, except natural hidratant creams  wich just gets rid of the symptoms but not the problem'
}
// frequency.interval is in days , frequency.times is how many times to trigger the notification
console.log(JSON.stringify(alertaJSON));
//
//

// console.log(alertToShow);

function fillAlertWithContent(json){
  title = document.getElementById("title");
  title.textContent = json.title;

  intro = document.getElementById("intro-content");
  intro.textContent = json.intro;

  causes = document.getElementById("causes-content");
  causes.textContent = json.causes;

  symptoms = document.getElementById("symptoms-content");
  symptoms.textContent = json.symptoms

  treatment = document.getElementById("treatment-content");
  treatment.textContent = json.treatment;
}
alertToShow = localStorage.getItem("latestAlert");
alertToShow = JSON.parse(alertToShow);
fillAlertWithContent(alertToShow);
localStorage.setItem("shownAlert",JSON.stringify(alertToShow));

function displayStats(){
  content = document.getElementById("statistics-content");
  if(content.className == "hide-statistics"){
    content.className = "show-statistics";
  }else{
    content.className = "hide-statistics";
  }

}
// fillAlertWithContent(alertToShow);
// console.log(JSON.stringify(alertaJSON));

//
// var aleraaaJSON = {
//   'id' : 1
//   'title' : 'asd'
//   'topics' : {
//     'Intro' : 'asdas'
//     'Causes' : 'asdasfdfas'
//     'Symptoms' : 'asdasdas'
//   }
// }

// localStorage.setItem(1, JSON.stringify(alertaJSON));
//
// var parsedJSON = JSON.parse(localStorage.getItem(1));
//
// buildAlertPreview(parsedJSON.title, parsedJSON.id);
//
// function createAndAddTopic(topicTitle, topicContent){
//   var divTopic = document.createElement("DIV");
//   divTopic.calssName = 'topic';
//
//   var divMiniTitle = document.createElement("DIV");
//   divMiniTitle.className = 'mini-title';
//   var h2Title = document.createElement("H2");
//   h2Title.textContent = topicTitle;
//
//   divMiniTitle.appendChild(h2Title);
//
//   divTopic.appendChild(divMiniTitle);
//
//   var divContent = document.createElement("DIV");
//   divContent.className = 'content';
//   var divContentP = document.createElement("P");
//   divContentP.textContent = topicContent;
//
//   divContent.appendChild(divContentP);
//   divTopic.appendChild(divContent);
//
//   console.log(divTopic);
// }
//
// function loadFullAlert(id){
//   alert = document.getElementById("alert"+id);
//   fullContent = localStorage.getItem(id);
//   fullContent = JSON.parse(fullContent);
//
//   createAndAddTopic(fullContent.topics[0], fullContent.topics[1]);
//
// }
//
// loadFullAlert(1);

// <div id="alert1" class="alert less">
//   <div class="title">
//     <h1 style="width: auto; color: black;">Do You Have Winter Allergies?</h1>
//   </div>
//   <button onclick="showMoreAlert(1)" id="showMoreAlert1" class="edit-button">Show more</button>
//   <div class="topic">
//     <div class="mini-title">
//       <h2>Intro</h2>
//     </div>
//
//     <div class="content">
//       <p>If you’re allergic to pollen, you may get a break when the weather gets cold. But if you have indoor allergies such
//         as mold and dust mites, you may notice your allergy symptoms more during winter, when you spend more time inside.</p>
//     </div>
//   </div>
//   <hr class="for-alert-list">
//   <div class="topic">
//     <div class="mini-title">
//       <h2>Causes</h2>
//     </div>
//
//     <div class="content">
//       <p>When it gets cold and your furnace kicks on, it sends dust, mold spores, and insect parts into the air.
//         They can get into your nose and launch a reaction.
//
//         Some common indoor allergy triggers are:</p>
//         <ul>
//           <li>Dust mites . These microscopic bugs flourish in mattresses and bedding. When their droppings and remains become airborne, they can cause allergy symptoms.</li>
//           <li>Mold. This fungus thrives in damp, humid areas such as basements and bathrooms. When mold spores get into the air, they can trigger allergy symptoms.</li>
//         </ul>
//     </div>
//   </div>
//   <hr class="for-alert-list">
//   <div class="topic">
//     <div class="mini-title">
//       <h2>Symptoms</h2>
//     </div>
//
//     <div class="content">
//       <p>Allergy symptoms caused by dust, pollen, or mold include:</p>
//       <ul>
//         <li>Coughing</li>
//         <li>Dark circles under the eyes</li>
//         <li>Itchy eyes and nose</li>
//         <li>Runny nose</li>
//       </ul>
//       <p>How can you tell whether your symptoms are from a cold, the flu, or allergies? A cold usually doesn't last for more than 10 days. Allergies can linger for weeks or even months. Also, colds and flu sometimes have a fever and aches and pains, which don’t usually happen with allergies.</p>
//     </div>
//   </div>
// </div>
