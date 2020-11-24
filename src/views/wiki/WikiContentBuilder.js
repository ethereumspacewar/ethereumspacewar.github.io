
let exportedwebdata = require('../../shared/built/webdataindex.json')

export default class WikiContentBuilder {



  static getContentByName(contentName){

    for(let [key,page] of Object.entries(exportedwebdata.pages)){

      //console.log('check ', key, contentName)

      if(key && key.toString().toLowerCase() == ( contentName.toLowerCase() )){

        return {
          title: page.fullName ,
          subtitle: page.webDataType,
          description: page.description

        }
      }

    }





    if(contentName == 'wikihome'){
      return {
        title:'Ethereum Space War Wiki',
        paragraphs: ['Ethereum Space War is a 3D Space MMORPG that is played in a browser such as Chrome or Firefox.',
          'In order to connect to the game, you will need to download the Ethereum Wallet plugin \'Metamask\' in order to log into the game and so that you can interact with the in-game currency named \'0xBTC\'.']
      }

    }


    if(contentName == 'solarsystems'){

      let solarSystemLinksArray = []


      for(let [key, item] of Object.entries(exportedwebdata.solarsystems)){

          solarSystemLinksArray.push( {
            name: item.fullName,
            query:item.internalName


          } )
      }


      return {
        title:'Ethereum Space War Wiki',
        linkarray: solarSystemLinksArray
      }

    }


    return {title:"?"}

  }

}
