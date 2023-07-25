<!DOCTYPE html>
<html>
<head>
    <title>Test Huella</title>
    <script src="js/webauthn.js"></script>
</head>
<body>
    <h1>Test Huella con WebAuthn</h1>
    <button onclick="registerBiometric()">Registrar huella dactilar</button>
    <button onclick="authenticateBiometric()">Autenticar con huella dactilar</button>
    <h1>Registro de huella dactilar</h1>
        <form action="RegisterServlet" method="post">
            <input type="text" name="username" placeholder="Nombre de usuario" required>
            <button type="button" onclick="registerBiometricH()">Registrar huella</button>
        </form>
</body>
</html>