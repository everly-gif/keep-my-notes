import {Appwrite} from "appwrite";
const inst = new Appwrite();

inst
.setEndpoint('http://localhost/v1')
.setProject('620ec929664da');
;

export const sdk =inst;
