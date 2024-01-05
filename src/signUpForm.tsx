export function SignUpForm() {
  return (
    <div>
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        id="firstName"
        className="border-black border-2"
      />{" "}
      <br />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" className="border-black border-2" />{" "}
      <br />
      <label htmlFor="phoneNumber">Phone Number</label>
      <input type="text" name="" id="phoneNumber" />
      <label htmlFor="gmail">Gmail</label>
      <input type="email" id="gmail" /> <br />
      <label htmlFor="password">Create Password</label>
      <input type="password" id="password" /> <br />
      <label htmlFor="re_password">Re-write Password</label>
      <input type="password" id="re_password" />
      <br />
      <label htmlFor="gender">Gender</label>
      <label htmlFor="male">Male</label>
      <input type="radio" name="gender" id="male" />
      <label htmlFor="female">Female</label>
      <input type="radio" name="gender" id="female" />
      <label htmlFor="other">Others</label>
      <input type="radio" name="gender" id="other" />
      <br />
      <label htmlFor="age">Age</label>
      <input type="number" name="age" id="age" />
    </div>
  );
}
