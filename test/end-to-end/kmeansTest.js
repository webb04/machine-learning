module.exports = {
  'kmeans shows on homepage': function(client) {
    client
    .url('http://machine-learning-analytics.herokuapp.com')
    .waitForElementVisible( 'body', 1000 )
    .verify.containsText('.card.medium:nth-child(2)', 'K-Means Clustering')
  },

  'kmeans link works on homepage': function (client) {
    client
    .url('http://machine-learning-analytics.herokuapp.com')
    .click(".card.medium:nth-child(2) a", function(response) {
      this.assert.ok(client === this, "Check if the context is right.");
      this.assert.ok(typeof response == "object", "We got a response object.");
    });
  },

  'kmeans form validation works': function (client) {
    client
    .url('http://machine-learning-analytics.herokuapp.com/kmeans')
    .pause(1000)
    .execute("document.querySelector('textarea').value = '[{\"rooms\":1,\"area\":350,\"type\":\"apartment\"},{\"rooms\":2,\"area\":300,\"type\":\"apartment\"},{\"rooms\":3,\"area\":300,\"type\":\"apartment\"},{\"rooms\":4,\"area\":250,\"type\":\"apartment\"},{\"rooms\":4,\"area\":500,\"type\":\"apartment\"},{\"rooms\":4,\"area\":400,\"type\":\"apartment\"},{\"rooms\":5,\"area\":450,\"type\":\"apartment\"},{\"rooms\":7,\"area\":850,\"type\":\"house\"},{\"rooms\":7,\"area\":900,\"type\":\"house\"},{\"rooms\":7,\"area\":1200,\"type\":\"house\"},{\"rooms\":8,\"area\":1500,\"type\":\"house\"},{\"rooms\":9,\"area\":1300,\"type\":\"house\"},{\"rooms\":8,\"area\":1240,\"type\":\"house\"},{\"rooms\":10,\"area\":1700,\"type\":\"house\"},{\"rooms\":9,\"area\":1000,\"type\":\"house\"},{\"rooms\":1,\"area\":800,\"type\":\"flat\"},{\"rooms\":3,\"area\":900,\"type\":\"flat\"},{\"rooms\":2,\"area\":700,\"type\":\"flat\"},{\"rooms\":1,\"area\":900,\"type\":\"flat\"},{\"rooms\":2,\"area\":1150,\"type\":\"flat\"},{\"rooms\":1,\"area\":1000,\"type\":\"flat\"},{\"rooms\":2,\"area\":1200,\"type\":\"flat\"},{\"rooms\":1,\"area\":1300,\"type\":\"flat\"}]'")
    .execute("document.querySelector('input[name=featureA]').value = '10';")
    .execute("document.querySelector('input[name=featureB]').value = '1200';")
    .waitForElementVisible('.btn.waves-effect.waves-light', 10000)
    .submitForm('form');
  },

  'kmeans visualisation is shown': function (client) {
    client
    .url('http://machine-learning-analytics.herokuapp.com/kmeans')
    .pause(1000)
    .execute("document.querySelector('textarea').value = '[{\"rooms\":1,\"area\":350,\"type\":\"apartment\"},{\"rooms\":2,\"area\":300,\"type\":\"apartment\"},{\"rooms\":3,\"area\":300,\"type\":\"apartment\"},{\"rooms\":4,\"area\":250,\"type\":\"apartment\"},{\"rooms\":4,\"area\":500,\"type\":\"apartment\"},{\"rooms\":4,\"area\":400,\"type\":\"apartment\"},{\"rooms\":5,\"area\":450,\"type\":\"apartment\"},{\"rooms\":7,\"area\":850,\"type\":\"house\"},{\"rooms\":7,\"area\":900,\"type\":\"house\"},{\"rooms\":7,\"area\":1200,\"type\":\"house\"},{\"rooms\":8,\"area\":1500,\"type\":\"house\"},{\"rooms\":9,\"area\":1300,\"type\":\"house\"},{\"rooms\":8,\"area\":1240,\"type\":\"house\"},{\"rooms\":10,\"area\":1700,\"type\":\"house\"},{\"rooms\":9,\"area\":1000,\"type\":\"house\"},{\"rooms\":1,\"area\":800,\"type\":\"flat\"},{\"rooms\":3,\"area\":900,\"type\":\"flat\"},{\"rooms\":2,\"area\":700,\"type\":\"flat\"},{\"rooms\":1,\"area\":900,\"type\":\"flat\"},{\"rooms\":2,\"area\":1150,\"type\":\"flat\"},{\"rooms\":1,\"area\":1000,\"type\":\"flat\"},{\"rooms\":2,\"area\":1200,\"type\":\"flat\"},{\"rooms\":1,\"area\":1300,\"type\":\"flat\"}]'")
    .execute("document.querySelector('input[name=featureA]').value = '10';")
    .execute("document.querySelector('input[name=featureB]').value = '1200';")
    .waitForElementVisible('.btn.waves-effect.waves-light', 10000)
    .submitForm('form')
    .verify.elementPresent('svg');
  },

  after : function(client) {
    client.end();
  }
}
