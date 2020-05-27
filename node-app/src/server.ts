console.log('TEST ONE')
console.log("NATS URI:")
const uriNats =  process.env["NATS_URI"] as string;
console.log(uriNats);

import { connect, NatsConnectionOptions, Payload, MsgCallback } from "ts-nats";

const msgCallback: MsgCallback = function (err, msg) {
    if(err != null){
        console.error(err);
    } else {
        console.log('got msg!')
        console.log(msg.subject)
        console.log(msg.data)
    }
}


async function main() {
    try {
        console.log('going to try it')
        let nc = await connect({servers: [uriNats]});
        console.log('i think we connected?');
        nc.subscribe("hello", msgCallback)
        // Do something with the connection
    } catch(ex) {
        console.error('something went wrong')
        console.error(ex);
        // handle the error
    }
    
}

main();

export {}