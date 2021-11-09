const Apify = require('apify');

Apify.main(async () => {
    const input = await Apify.getInput();
    // await Apify.setValue('OUTPUT', {input});
    await Apify.pushData({input});

    let namedDataset = await Apify.openDataset('example', {forceCloud: false});
    let data = await namedDataset.getData();

    console.log(data.items);

    

    //await namedDataset.pushData({input});
});


