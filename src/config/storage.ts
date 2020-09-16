import AsyncStorage from '@react-native-community/async-storage';
import Storage from 'react-native-storage';

const storage = new Storage({
  size: 1000,
  // 存储方案: Web 下传入 localStorage
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 360 * 24 * 7,
  enableCache: true,
  sync: {},
});

export default storage;
