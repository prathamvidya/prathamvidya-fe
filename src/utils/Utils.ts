import { isArray, pickBy } from 'lodash';

const generalImageFormat = ['.svg', '.png', '.jpg', '.jpeg', '.hic', '.heic'];

export class Utils {
  static ImageFormats(): Array<string> {
    return generalImageFormat;
  }

  public static sanitizeObject = (data: any) =>
    pickBy(data, (v: any) =>
      isArray(v) ? !!v.length : v !== null && v !== undefined && v !== ''
    );

  static importAllFilesFromDirectory = (
    r: __WebpackModuleApi.RequireContext
  ) => {
    const gallery: {
      [category: string]: string[];
    } = {};
    r.keys().forEach((fileName) => {
      // filename would be like "./Directory/Filename.extension". Finding directory name to be used as key
      const directoryName = fileName.replace('./', '').split('/')[0];
      // If directory name is already there in gallery object, restructure a new array using spread
      gallery[directoryName] = gallery[directoryName]
        ? [...gallery[directoryName], r(fileName)?.default?.src]
        : [r(fileName)?.default?.src];
    });
    return { ...gallery };
  };

  public debounce = (fun: () => void, delayInMillis: number) => {
    let timer: NodeJS.Timeout;
    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fun(), delayInMillis);
    };
  };

  public throttle = (fun: () => void, delayInMillis: number) => {
    let preventRunning = false;
    return () => {
      if (preventRunning) {
        return;
      }
      fun();
      preventRunning = true;
      setTimeout(() => {
        preventRunning = false;
      }, delayInMillis);
    };
  };

  static iterateEnum<T>(enumRef: any): T[] {
    return Object.keys(enumRef).map((key) => enumRef[key]);
  }

  static convertISOtoIST(isoDate: string) {
    // Step 1: Create a Date object with the ISO date
    const dateISO = new Date(isoDate);

    const istDateString = dateISO.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    return istDateString;
  }
}

export default Utils;
