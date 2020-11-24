
const fs = require('fs');



const beautify = require("json-beautify");

/*
This loops through all units and docks them up in the ethereum reach station
This also removes all aifaction units

Do this to the world BEFORE implementing the GVM



mongodump --db outerspace_development


*/


  async function  init (){

    let itemDataRaw = fs.readFileSync(__dirname  + '/../worlddata/items/itembasetypes.json');
    let itemData = JSON.parse(itemDataRaw)


    let equipmentDataRaw = fs.readFileSync(__dirname  + '/../worlddata/items/equipmenttypes.json');
    let equipmentData= JSON.parse(equipmentDataRaw)


    let webFileOutputData = {}


    for(let [key,item] of Object.entries( itemData )){
      if(item.itemClass=='equipment'){
        webFileOutputData[key] = { webDataType: 'equipment', internalName: key , fullName: item.name, description: item.description }

      }

      if(item.itemClass=='commodity'){
        webFileOutputData[key] = { webDataType: 'commodity', internalName: key , fullName: item.name, description: item.description }

      }

    }

    /*
    for(let [key,equipment] of Object.entries( equipmentData )){
      webFileOutputData[key] = { webDataType: 'equipment', internalName: key , fullName: equipment.name }


    }*/


    const builtWebDataRevisedPath = __dirname + '/../built/webdataindex.json'
    await new Promise(function(resolve, reject) {
      fs.writeFile(builtWebDataRevisedPath,beautify(webFileOutputData, null, 2, 100 )  , (err) => {
          if (err) {
              throw err;
              reject()
          }
            resolve()
      });
    });



    console.log('COMPLETED DATA BUILD')
  }




 init();
