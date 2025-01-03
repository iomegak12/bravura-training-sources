// import MainClassM from "./MainClass";

import { MainClass as MainClassM } from './MainClass'

MainClassM.main()
    .then(() => {
        console.log('MainClass.main() completed successfully');
    })
    .catch((error) => {
        console.error(`Error occurred, Details : \n\t${error}`);
    });
