import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Uploader } from '@syncfusion/ej2-inputs';

/**
 * Uploader default functionalities sample
 */

let uploadObj: Uploader = new Uploader({
  asyncSettings: {
    saveUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://aspnetmvc.syncfusion.com/services/api/uploadbox/Remove',
  },
  autoUpload: false,
  dropArea: '#droparea',
});
console.log(uploadObj);
uploadObj.appendTo('#fileupload');
