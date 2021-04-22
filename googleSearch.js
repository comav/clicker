function start () {
    gapi.client.init({
        'apiKey': '',
        'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        'scope': 'profile'
    }).then(() => {
        return gapi.client.people.people.get({
            'resourceName': 'people/me',
            'requestMask.includeField': 'person.names'
        });
    }).then((response) => {
        console.log(response.result);
    }, function(reason) {
        console.log('Error: ' + reason.result.error.message);
    });
}

gapi.load('client', start);
