import { LocalStorageAPI } from '@app/types';

class LocalStorageService implements LocalStorageAPI {
  saveItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any | null {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}

export default LocalStorageService;
