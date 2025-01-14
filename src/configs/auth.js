import { signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { toastError, toastSuccess } from "./toast";

const googleAuthProvider = new GoogleAuthProvider();
const facebookAuthProvider = new FacebookAuthProvider();

export function signInWithGoogle() {
  signInWithPopup(auth, googleAuthProvider)
    .then((result) => {
      toastSuccess('Đăng nhập thành công!');
    }).catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export function signInWithFacebook() {
  signInWithPopup(auth, facebookAuthProvider)
    .then((result) => {
      toastSuccess('Đăng nhập thành công!');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export function createUser(name, email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      toastSuccess('Đăng ký thành công!');
      const user = userCredential.user;
      user.displayName = name;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      toastError(errorMessage);
    });
};

export function logInUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorMessage = error.message;
      toastError(errorMessage);
    });
}

export function authSignOut() {
  signOut(auth).then(() => {
    toastSuccess('Đăng xuất thành công!');
  }).catch((error) => {
    toastError('Có lỗi xảy ra!');
  });

}