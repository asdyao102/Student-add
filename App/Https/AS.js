import AsyncStorage from '@react-native-community/async-storage';
export default class DataStore {
  //给数据添加一个时间戳
  _wrapData(data) {
    return { data: data, timestamp: new Date().getTime() }; //本地时间，推荐服务器时间
  }


  //数据存储
  saveData(url, data, callback) {
    return new Promise((resolve, reject)=>{
       if (!data || !url) return;
      try {
        AsyncStorage.setItem(url, JSON.stringify(data), callback);
        resolve("ok")
      } catch (error) {
        reject(error);
      }
    })
    
  }


  //读取本地数据
  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (err, result) => {
        if (!err) {
          resolve(JSON.parse(result)); // getItem获取到的是string，我们需要将其反序列化为object
        } else {
          reject(err);
          console.log(err);
        }
      });
    });
  }
}