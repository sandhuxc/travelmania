import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

function App() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
//   upload file is the function use to upload image on firebase and gives back a link that is (url)
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url)
        setImageUrls((prev) => [...prev, url]);
      });
    });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageUpload(event.target.files[0]);
        }}
      />
      <button onClick={uploadFile}> Upload Image</button>
    </div>
  );


}