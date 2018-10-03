import request from 'request'


const plugNameMapping = {
  "Plug 3": "00:0b:57:27:be:c6",
  "Plug 4": "00:0b:57:27:c0:7f",
  "Plug 2": "00:0b:57:27:c0:93",
  "Plug 1": "00:0b:57:27:be:57"
}

/**
 * Set a switch state of a plug
 * @param plugName
 * The name of the plug, not the MAC Address
 * @param toState
 * The state of wanting to change
 *
 */
function setSwitchState(plugName, toState, callback) {
    var body = {
        "m2m:cin": {
            "con": {
                "cmd": {

                }
            }
        }
    }
    body["m2m:cin"]["con"]["cmd"][plugNameMapping[plugName]] = toState

    var options = {
        url: 'http://52.78.33.177:7579/Mobius/smart-home/switch',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'X-M2M-RI': '12345',
            'X-M2M-Origin': 'Ssmart-home',
            'content-type': 'application/vnd.onem2m-res+json; ty=4',
            'Content-Type': 'application/vnd.onem2m-res+json; ty=4',
            'Content-type': 'application/vnd.onem2m-res+json; ty=4'
        },
        form: JSON.stringify(body)
    }


    request(options, (err, res, body) => {
        if(!err) {
            console.log(res.statusCode)
            console.log(res)
            callback(res, body)
        } else {

        }
    })
}


export default setSwitchState;
