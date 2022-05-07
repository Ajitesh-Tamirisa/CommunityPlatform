import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCwkPLFn3JrIc_LXqresr1ma12F7NBy0xA",
    authDomain: "community-platform-2d62b.firebaseapp.com",
    projectId: "community-platform-2d62b",
    storageBucket: "community-platform-2d62b.appspot.com",
    messagingSenderId: "137314454156",
    appId: "1:137314454156:web:7295553df83bb64db889a9"
  };

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const PostsStorageRef = ref(storage, `Announcements/Posts/{fileName}`);
export const NotesStorageRef = ref(storage, `Announcements/Notes/{fileName}`);