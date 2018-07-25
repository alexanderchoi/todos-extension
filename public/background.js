chrome.storage.sync.set({'name': 'alex 2'});

chrome.storage.sync.get('name', function(result) {
    console.log(result.name);
})