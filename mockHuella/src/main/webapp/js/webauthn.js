// rpIdlocalhost
const rpId = "localhost";

let credencialConst = "localhost";

// Función para generar un valor aleatorio para el desafío
function generateRandomChallenge() {
    const fixedChallenge = new Uint8Array([
            0x12, 0x34, 0x56, 0x78, 0x90, 0xAB, 0xCD, 0xEF,
            0xFE, 0xDC, 0xBA, 0x98, 0x76, 0x54, 0x32, 0x10,
            0x11, 0x22, 0x33, 0x44, 0x55, 0x66, 0x77, 0x88,
            0x99, 0xAA, 0xBB, 0xCC, 0xDD, 0xEE, 0xFF, 0x00
        ]);

        return fixedChallenge.buffer;
}

// Función para codificar el valor en base64url
function base64urlEncode(buffer) {
    return btoa(String.fromCharCode.apply(null, buffer))
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=/g, "");
}

// Función para registrar la huella dactilar del usuario
function registerBiometric() {
    if (window.PublicKeyCredential) {
       // const challenge = generateRandomChallenge();
        const publicKeyOptions = {
            rp: {
                id: rpId,
                name: rpId,
            },
            // Resto de las opciones...
        };

        // Resto del código...
    } else {
        console.error("WebAuthn no es compatible en este navegador.");
    }
}


// Función para autenticar al usuario mediante huella dactilar
function authenticateBiometric() {
    if (window.PublicKeyCredential) {
        const storedCredentialInfo = JSON.parse(localStorage.getItem('newCredentialInfo'));
        const id = credencialConst.id;
        const password = storedCredentialInfo.password;
        const challenge = generateRandomChallenge();
        const publicKeyOptions = {
            rpId: rpId,
            challenge: challenge, // Asignamos el valor de desafío generado
            userVerification: "preferred",
        };

        navigator.credentials.get({ publicKey: publicKeyOptions })
            .then((assertion) => {
                console.log("Autenticación exitosa:", assertion);
                // Aquí puedes redirigir al usuario a su área personal o realizar otras acciones
            })
            .catch((error) => {
                console.error("Error al autenticar:", error);
            });
    } else {
        console.error("WebAuthn no es compatible en este navegador.");
    }
}


// Función para registrar la huella dactilar del usuario
function registerBiometricH() {
    if (window.PublicKeyCredential) {
        const challenge = generateRandomChallenge();
        const publicKeyOptions = {
            rp: {  // Aquí debemos asegurarnos de que todos los miembros requeridos se encuentren presentes
                name: "Nombre de la entidad",  // Proporciona un nombre para la entidad de clave pública (ejemplo: "My Web App")
                id: rpId  // Proporciona el ID de la entidad de clave pública (ejemplo: "https://www.example.com")
            },
            user: {  // Aquí también debemos asegurarnos de proporcionar todos los miembros requeridos
                id: Uint8Array.from("usuario1234"),  // Proporciona un ID único para el usuario
                name: "Nombre de usuario",  // Proporciona el nombre del usuario
                displayName: "Nombre para mostrar"  // Proporciona el nombre para mostrar del usuario
            },
            challenge: challenge,
            pubKeyCredParams: [
                { type: "public-key", alg: -7 }  // Debes asegurarte de proporcionar los algoritmos adecuados según tus necesidades
            ],
            authenticatorSelection: {},
            attestation: "direct"
        };

        navigator.credentials.create({ publicKey: publicKeyOptions })
            .then((newCredentialInfo) => {
                console.log("Credencial registrada exitosamente:", newCredentialInfo);
                localStorage.setItem('newCredentialInfo', JSON.stringify(newCredentialInfo));
                credencialConst = newCredentialInfo;
                const idCre = newCredentialInfo.id;
                console.log("ID :", idCre);
            })
            .catch((error) => {
                console.error("Error al registrar la credencial:", error);
            });
    } else {
        console.error("WebAuthn no es compatible en este navegador.");
    }
}
