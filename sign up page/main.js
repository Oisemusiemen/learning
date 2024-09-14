function toggleSignIn() {
  const signUp = document.getElementById("signup");
  const signIn = document.getElementById("signin");

  if (signUp.style.display == "flex") {
    signUp.style.display = "none";
    signIn.style.display = "flex";
  } else {
    signUp.style.display = "flex";
    signIn.style.display = "none";
  }
}
