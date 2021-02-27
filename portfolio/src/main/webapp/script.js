// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomAvatarQuote() {
  const quotes =
      ['Failure is only the opportunity to try again, only more wisely this time',
       'Pride is not the opposite of shame but its source', 
       'There is nothing wrong with letting the people who love you help you', 
       'My cabbages!!',
       'Step aside, filth',
       'Sometimes life is like this tunnel. You can’t always see the light at the end of the tunnel, but if you keep moving, you will come to a better place',
       'It’s easy to do nothing, it’s hard to forgive',
       'Life happens wherever you are, whether you make it or not' 
    ];

  // Pick a random greeting.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
