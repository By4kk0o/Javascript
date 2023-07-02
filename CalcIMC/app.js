function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultDiv = document.getElementById("result");
  
    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value) / 100; // Convertir en mètres
  
    if (isNaN(weight) || isNaN(height)) {
      resultDiv.innerText = "Veuillez entrer des valeurs valides pour le poids et la taille.";
      return;
    }
  
    var bmi = weight / (height * height);
    var bmiRounded = bmi.toFixed(1);
  
    var category = "";
    if (bmi < 18.5) {
      category = "Sous-poids";
    } else if (bmi < 25) {
      category = "Poids normal";
    } else if (bmi < 30) {
      category = "Surpoids";
    } else {
      category = "Obésité";
    }
  
    resultDiv.innerText = "Votre IMC est de " + bmiRounded + ". Catégorie: " + category;
  }
  