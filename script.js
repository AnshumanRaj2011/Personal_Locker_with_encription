async function getKey(){

let stored = localStorage.getItem("vaultKey");

if(stored){

const raw = Uint8Array.from(atob(stored), c => c.charCodeAt(0));

return await crypto.subtle.importKey(
"raw",
raw,
{name:"AES-GCM"},
true,
["encrypt","decrypt"]
);

}

const key = await crypto.subtle.generateKey(
{name:"AES-GCM",length:256},
true,
["encrypt","decrypt"]
);

const exported = await crypto.subtle.exportKey("raw", key);

const b64 = btoa(String.fromCharCode(...new Uint8Array(exported)));

localStorage.setItem("vaultKey", b64);

return key;

}
