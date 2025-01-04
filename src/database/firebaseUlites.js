import { getDatabase, ref, onValue, push, set, remove } from "firebase/database";
import app from "./firevaseconfig";


export const db = getDatabase(app);

export const getFirebaseData = (tablename) => {

  const starCountRef = ref(db, tablename);
  
  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, (snapshot) => {
          
        const updateCategory = [];

        snapshot.forEach(item => {
          updateCategory.push({
            id: item.key,
            ...item.val(),
          });
        })
           
        resolve(updateCategory);
      });
    } catch (error) {
      reject(error)
    }
  })
    
};





export const getFirebaseDataForEdite = async (tablename) => {
  
  const starCountRef =  ref(db, tablename);
  
  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, (snapshot) => {
        
        resolve(snapshot.val());
      });
    } catch (error) {
      reject(error)
    }
  })
}


export const getFirebaseDataForEditeProduct = async (tablename) => {
  
  const starCountRef =  ref(db, tablename);
  return new Promise((resolve, reject) => {
    try {
      onValue(starCountRef, (snapshot) => {
          
        
        resolve(snapshot.val());
      });
    } catch (error) {
      reject(error)
    }
  })
}

// export const getFirebaseDataForEditeProduct = async (tablename) => {
  
//   const starCountRef =  ref(db, tablename);
  



//   return new Promise((resolve, reject) => {
//     try {
//       onValue(starCountRef, (snapshot) => {
          
        
//         resolve(snapshot.val());
//       });
//     } catch (error) {
//       reject(error)
//     }
//   })
// }




// wite /set/ push data pudh firevae

export const setDataToFirebase = (tableName, data) => {

  push(ref(db, tableName), data);
};



// update product
export const setDataToFirebaseProduct = (tableName, data) => {

  push(ref(db, tableName), data);
};
// setDataToFirebaseupdataFirevase

export const setDataToFirebaseupdataFirevase = (tableName, data) => {

  set(ref(db, tableName), data);
};

// setDataToFirebaseupdataFirevase 
export const setDataToFirebaseupdataFirevaseProduct = (tableName, data) => {

  set(ref(db, tableName), data);
};


// Remove data form  firvase;

export const removeDataFirvase = (tableName) => {

  return new Promise((resolve, reject) => {
    try {
     
      resolve(remove(ref(db, tableName)))
    } catch (error) {
    
      reject(error);
    }
  })

  
};



//8**************************************user pofile****************

export const creatUserPofile = async (data) => {
  const { id, name, role, email } = data; // ডিফল্ট রোল "user" সেট করা হয়েছে
  set(ref(db, "userPofile/" + id), {
    name,
    role,
    email,
  });
};


export const getPofile = async (id) => {

  return new Promise((resolve, reject) => {
    try {
     onValue(ref(db, "userPofile/" + id), (snapshot) => {
          
       resolve(snapshot.val());
     });
    } catch (error) {
      reject(error);
    }
  })

  
}

//8**************************************Addd to cart****************\\



export const setProductToCart = (data) => {
  const { userId, productId, quantity } = data;
     push(ref(db, "carts/" + userId), {
       productId,
       quantity ,
  });
}





