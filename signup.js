//==========append sign up form to placeholder in HTML==========//
function showSignUp() {
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
   //==========load signup form onto page==========//
   const signUpHTML = document.createElement('div');
   signUpHTML.setAttribute('id', `signup`);
   signUpHTML.innerHTML = `
   <div class="jumbotron jumbotron-fluid bg-white text-dark p-1" id="signupForm">
      <br />
      <div class="container">
         <form>
            <p class="display-6 text-center">Sign Up</p>
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
               <label for="Name" class="col-md-2 col-form-label">
                  Full Name
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="Name"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="Street" class="col-md-2 col-form-label">
                  Street
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="Street"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="City" class="col-md-2 col-form-label">
                  City
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="City"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="City" class="col-md-2 col-form-label">
                  State
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="State"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="Zip" class="col-md-2 col-form-label">
                  Zip
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="Zip"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="Email" class="col-md-2 col-form-label">
                  Email
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="Email"
                     placeholder=" "
                  />
               </div>
            </div>
            <br />
            <div class="form-group row justify-content-center">
               <label for="Phone" class="col-md-2 col-form-label">
                  Phone
               </label>
               <div class="col-md-4">
                  <input
                     type="text"
                     class="form-control"
                     id="Phone"
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
   .insertAdjacentHTML('beforebegin', signUpHTML.innerHTML); //prettier-ignore
   //==========add submit event listeners to signup form==========//
   let submitSignUp = document.querySelector('#signupForm > div > form');
   submitSignUp.addEventListener('submit', (e) => {
      e.preventDefault();
      let Username = e.target.Username.value;
      let Name = e.target.Name.value;
      let Street = e.target.Street.value;
      let City = e.target.City.value;
      let State = e.target.State.value;
      let Zip = e.target.Zip.value;
      let Email = e.target.Email.value;
      let Phone = e.target.Phone.value;
      document.querySelector('#signupForm > div > form').remove();
      document.querySelector('#signupForm > div').insertAdjacentHTML(
         'beforeend',
         `
         <div class="jumbotron jumbotron-fluid bg-white text-dark p-1" id="signupForm">
            <div class="container">
            <p class="display-6 text-center">You have successfully signed up!</p>
            <br />
               <form>
                  <div class="form-group row justify-content-center">
                     <div class="col-2">Username</div>
                     <div class="col-4">${Username}</div>
                  </div>
                  <br />
                  <div class="form-group row justify-content-center">
                     <div class="col-2">Name</div>
                     <div class="col-4">${Name}</div>
                  </div>
                  <br />
                  <div class="form-group row justify-content-center">
                     <div class="col-2">Address</div>
                     <div class="col-4">${Street}, ${City}, ${State} ${Zip}</div>
                  </div>
                  <br />
                  <div class="form-group row justify-content-center">
                     <div class="col-2">Email</div>
                     <div class="col-4">${Email}</div>
                  </div>
                  <br />
                  <div class="form-group row justify-content-center">
                     <div class="col-2">Phone</div>
                     <div class="col-4">${Phone}</div>
                  </div>
                  <br />
               </form>
            </div>
         </div>
      `
      );
   });
}
