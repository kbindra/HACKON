(function(window, undefined) {
  var dictionary = {
    "5e1c57d3-826f-4784-b6f7-92ba0a979053": "doctor",
    "75c5dda3-16dd-437c-8543-c0d91a41dc87": "logindoctor",
    "02de6312-8455-4aa5-bfd0-86e54fabedc9": "Doctorview",
    "b48d6f1b-1e15-499c-bf41-ba0a9aeb5cbe": "loginhospital",
    "1ff13f0b-3e65-4b5a-98a9-ba47b23ee8a8": "patientB",
    "e69acaca-9311-4985-9ebf-a289046f3ca0": "hospital",
    "0cbcde3a-b2fb-4529-9177-fe5686eebf21": "patientA",
    "fbf299d8-64eb-4385-b6b8-1e41958f701a": "trackA",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "14478d48-e293-4420-affe-8ead07aa9a89": "First page",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);