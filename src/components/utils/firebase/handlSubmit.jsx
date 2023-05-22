import { getDownloadURL,ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "./firebase";
import {collection, addDoc, serverTimestamp, doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword,getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const uploadFile = async (file,fileType) =>{
    if(!file){
        console.log("File doesnot exist")
    }else{

      const fileName = `${Date.now()}_${file.name}`;

      const storageRef = ref(storage, `/file/${fileType}/${fileName}`);

      const snapshot = await uploadBytes(storageRef, file);

      const downloadUrl = await getDownloadURL(snapshot.ref)

      return downloadUrl

    }
}



export const handleSubmit = async (data, image,audio) =>{
    
    try{
        
        const imageUrl = await uploadFile(image, 'image');
        const audioUrl = await uploadFile(audio, 'audio');
    

        const refData = collection(firestore, "song");
        console.log(data)

        await addDoc(refData, {
            ...data,
            audio: `${audioUrl}`,
            image: `${imageUrl}`,
            timeStampField: serverTimestamp()
        })
        return [imageUrl,audioUrl];
    }
    catch(err){
        console.log(err, "error")
    }
}




export const signup = async (user) =>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, user.email, user.password)
    .then(async (credential)=>{
        console.log(credential);
       let userId = credential.user.uid;
       console.log(userId)
       user = {...user,id: userId };

       const userRef = collection(firestore,'users');

       await setDoc(doc(userRef,userId),{
          ...user,
          uid:userId
       });


    })
    .catch(error=>console.log("email exist",error))
    
  
}


export const singin = async (email,password)=>{
    // const navigate = useNavigate()
    const auth = getAuth();
    // let error = ""
    try{
   await signInWithEmailAndPassword(auth, email, password)
   .then(credential => {
    const user = [
        {uid:`${credential.user.uid}`,},
        {token:`${credential.user.accessToken}`}
    ]

    localStorage.setItem("user", JSON.stringify(user))
    return {target:false}
   })


}catch(error){
          const err = error.message

          return {target:err}
    }

}



export const isAuthenticated = () => {
    const user = localStorage.getItem('user')
    if(user){
        return user
    }else{
        return null
    }
  
}




export const singout = async ()=>{

    const auth = getAuth();

    return signOut(auth).then(()=>{
        return {success: true}
        
    }).catch(err =>{return {success:false, err}})
}


// export const isAuthenticate = () => {
//     return new Promise((resolve, reject) => {
//       const auth = getAuth();
  
//       onAuthStateChanged(auth, (user) => {
//         if (user) {
//           // User is authenticated
//           resolve(user);
//         } else {
//           // User is not authenticated
//           resolve(null);
//         }
//       }, (error) => {
//         // An error occurred during authentication check
//         reject(error);
//       });
//     });
//   };

