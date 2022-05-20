//==========append sign up form to placeholder in HTML==========//
function showSignIn() {
   //==========empty cards list and remove signup form (when signup button is clicked)==========//
   if (document.querySelector('#cards')) {
      document.querySelector('#cards').remove();
   }
   if (document.querySelector('#signupForm')) {
      document.querySelector('#signupForm').remove();
   }
   if (document.querySelector('#signinForm')) {
      document.querySelector('#signinForm').remove();
   }
   //==========load signin form onto page==========//
   const signInHTML = document.createElement('div');
   signInHTML.setAttribute('id', `signin`);
   signInHTML.innerHTML = `
   <div class="jumbotron jumbotron-fluid bg-white text-dark p-1" id="signinForm">
      <br />
      <div class="container">
         <form>
            <p class="display-6 text-center">Sign In</p>
            <br>
            <div class="form-group row justify-content-center">
               <label for="Username" class="col-md-2 col-form-label">
                  Username
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="Username"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="Password" class="col-md-2 col-form-label">
                  Password
               </label>
               <div class="col-md-4">
                  <input
                     type="Password"
                     class="form-control"
                     id="Password"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="Submit" class="col-md-2 col-form-label"></label>
               <div class="col-md-4">
                  <button type="submit" class="btn btn-outline-secondary">
                     Submit
                  </button>
               </div>
            </div>
            <br />
         </form>
      </div>
      </div>
      `;
   document.querySelector('#cardlist')
   .insertAdjacentHTML('beforebegin', signInHTML.innerHTML); //prettier-ignore
   //==========add submit event listeners to signin form==========//
   let submitSignIn = document.querySelector('#signinForm > div > form');
   submitSignIn.addEventListener('submit', (e) => {
      e.preventDefault();
      let Username = e.target.Username.value;
      document.querySelector('#signinForm > div > form').remove();
      document.querySelector('#signinForm > div').insertAdjacentHTML(
         'beforeend',
         `
         <div class="jumbotron jumbotron-fluid bg-white text-dark p-1" id="signinForm">
         <div class="container">
         <p class="display-6 text-center">You have successfully signed in!</p>
         <p class="display-6 text-center">Welcome back, ${Username}!</p>
         <br><br><br><br><br>
         </div>
      `
      );
   });
}
