import { getDownloadURL,ref, uploadBytes } from "firebase/storage";
import { firestore, storage } from "./firebase";
import {collection, addDoc, serverTimestamp, doc, setDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
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


export const fetchUser =  async() => {
            
    const userCollectionRef = collection(firestore, 'users');
    const snapshot = await getDocs(userCollectionRef);
    const users = snapshot.docs.map(doc => doc.data());

    return users

}


export const update = async (data) =>{
    const songRef = doc(firestore, "song","ZOj00sP58s1HUeGSN9dk")

    updateDoc(songRef,data, {merge:true})
    .then(()=>console.log("updated successfully"))
    .catch(err => console.log(err))

}

export const deleteSong = async (id) =>{
    try{
        const songRef = doc(firestore, "song","ZOj00sP58s1HUeGSN9dk")
    
        await deleteDoc(songRef)
        .then(()=>console.log("deleted successfully"))
        .catch(err => console.log(err))

    }catch(err){
        console.log(err)
    }
}


