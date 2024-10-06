import { openDB } from 'idb';

const storeName = 'jate';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


export const putDb = async (content) => {
  const dbPromise = openDB.open(storeName, 1, (upgrade) => {
    const keyStore = upgrade.createObjectStore("keyVal");
    keyStore.put(content, Math.random());
  });
};



export const getDb = async () =>{
  await db.get(storeName, key);
};

initdb();
