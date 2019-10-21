 // import time

// print(1)

// data = getDataFromAPI('...', {})
// print(data)
// print(2)
// print(3)

// console.log(1)
// var data = getDataFromAPI(() => console.log(4), 1000)
// console.log(2)
// console.log(3)

// function callback() {
//     console.log("called back")
// }

// console.log(1)
// setTimeout(callback, 1000)
// console.log(2)

getApiData(function success() {
    sendNotification(function() {
        sendNotification(function() {
            sendNotification(function() {
                sendNotification(function() {
                    sendNotification(function() {
                        sendNotification(function() {

                        }, function () {
                            
                        })
                    }, function () {
                        
                    })
                }, function () {
                    
                })
            }, function () {
                
            })
        }, function () {
            sendNotification(function() {

            }, function () {
                
            })
        })
    }, function () {

    })
}, function failed(){

})

fetch('google.com/search?')

let promise = fetch('httpsdkfjskldfjs://jsonplaceholder.typicode.com/todos/1')
console.log(promise)
promise.then(data => console.log('THEN', data))
promise.catch(error => console.log('ERROR', error))