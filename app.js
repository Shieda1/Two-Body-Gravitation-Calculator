// https://calculator.swiftutors.com/two-body-gravitation-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gravitationPotentialEnergyRadio = document.getElementById('gravitationPotentialEnergyRadio');
const massofthefirstobjectRadio = document.getElementById('massofthefirstobjectRadio');
const massofthesecondobjectRadio = document.getElementById('massofthesecondobjectRadio');
const distancebetweentheobjectsRadio = document.getElementById('distancebetweentheobjectsRadio');

let gravitationPotentialEnergy;
const G = 6.673e-11;
let massofthefirstobject = v1;
let massofthesecondobject = v2;
let distancebetweentheobjects = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

gravitationPotentialEnergyRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass of the first object (kg)';
  variable2.textContent = 'Mass of the second object (kg)';
  variable3.textContent = 'Distance between the objects (m)';
  massofthefirstobject = v1;
  massofthesecondobject = v2;
  distancebetweentheobjects = v3;
  result.textContent = '';
});

massofthefirstobjectRadio.addEventListener('click', function() {
  variable1.textContent = 'Gravitation Potential Energy (J)';
  variable2.textContent = 'Mass of the second object (kg)';
  variable3.textContent = 'Distance between the objects (m)';
  gravitationPotentialEnergy = v1;
  massofthesecondobject = v2;
  distancebetweentheobjects = v3;
  result.textContent = '';
});

massofthesecondobjectRadio.addEventListener('click', function() {
  variable1.textContent = 'Gravitation Potential Energy (J)';
  variable2.textContent = 'Mass of the first object (kg)';
  variable3.textContent = 'Distance between the objects (m)';
  gravitationPotentialEnergy = v1;
  massofthefirstobject = v2;
  distancebetweentheobjects = v3;
  result.textContent = '';
});

distancebetweentheobjectsRadio.addEventListener('click', function() {
  variable1.textContent = 'Gravitation Potential Energy (J)';
  variable2.textContent = 'Mass of the first object (kg)';
  variable3.textContent = 'Mass of the second object (kg)';
  gravitationPotentialEnergy = v1;
  massofthefirstobject = v2;
  massofthesecondobject = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gravitationPotentialEnergyRadio.checked)
    result.textContent = `Gravitation Potential Energy = ${computeGravitationPotentialEnergy()} J`;

  else if(massofthefirstobjectRadio.checked)
    result.textContent = `Mass of the first object = ${computeMassofthefirstobject().toFixed(2)} kg`;

  else if(massofthesecondobjectRadio.checked)
    result.textContent = `Mass of the second object = ${computeMassofthesecondobject().toFixed(2)} kg`;

  else if(distancebetweentheobjectsRadio.checked)
    result.textContent = `Distance between the objects = ${computeDistancebetweentheobjects().toFixed(2)} m`;
})

// calculation

function computeGravitationPotentialEnergy() {
  return (G * Number(massofthefirstobject.value) * Number(massofthesecondobject.value)) / Number(distancebetweentheobjects.value);
}

function computeMassofthefirstobject() {
  return (Number(gravitationPotentialEnergy.value) * Number(distancebetweentheobjects.value)) / (G * Number(massofthesecondobject.value));
}

function computeMassofthesecondobject() {
  return (Number(gravitationPotentialEnergy.value) * Number(distancebetweentheobjects.value)) / (G * Number(massofthefirstobject.value));
}

function computeDistancebetweentheobjects() {
  return (G * Number(massofthefirstobject.value) * Number(massofthesecondobject.value)) / Number(gravitationPotentialEnergy.value);
}