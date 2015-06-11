/*!
 *
 *  Web Starter Kit
 *  Copyright 2014 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

(function () {
  'use strict';

  var firstType = true;

  var querySelector = document.querySelector.bind(document);

  var navdrawerContainer = querySelector('.navdrawer-container');
  var body = document.body;
  var appbarElement = querySelector('.app-bar');
  var menuBtn = querySelector('.menu');
  var main = querySelector('main');

  var valueLabel = document.getElementById("value");
  var historyLabel = document.getElementById("history");
  var numberButtons = document.getElementsByClassName("number");
  var operationButtons = document.getElementsByClassName("operation");
  var enterButton = querySelector('.enter');
  var clearButton = querySelector('.clear');

  function closeMenu() {
    body.classList.remove('open');
    appbarElement.classList.remove('open');
  }

  function toggleMenu() {
    body.classList.toggle('open');
    appbarElement.classList.toggle('open');
    navdrawerContainer.classList.toggle('open');
    navdrawerContainer.classList.add('opened');
  }

  function numberButtonAction() {
    if (firstType == true) {
      valueLabel.innerHTML = this.innerHTML;
      firstType = false;
    } else {
      valueLabel.innerHTML += this.innerHTML;
    }
    historyLabel.innerHTML += this.innerHTML;
  }

  function operationButtonAction() {
    if (firstType == false) {
      valueLabel.innerHTML += this.innerHTML;
      historyLabel.innerHTML += this.innerHTML;
    } else {
      valueLabel.innerHTML = "Error";
    }
  }

  function evaluate() {
    valueLabel.innerHTML = eval(valueLabel.innerHTML);
    historyLabel.innerHTML = historyLabel.innerHTML + " = " + eval(valueLabel.innerHTML);
  }

  function clear() {
    valueLabel.innerHTML = 0.00;
    firstType = true;
  }

  main.addEventListener('click', closeMenu);
  menuBtn.addEventListener('click', toggleMenu);
  enterButton.addEventListener('click', evaluate);
  clearButton.addEventListener('click', clear);
  for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', numberButtonAction);
  }
  for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', operationButtonAction);
  }
  
})();
