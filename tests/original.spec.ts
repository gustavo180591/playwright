import { test } from "@playwright/test";


test("1 login con correo ", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo.faccendini@gmail.com");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
});

test("2 login con usuario", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Contraseña").click();
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
}),
  test("3 credencial invalida", async ({ page }) => {
    await page.goto("https://test2.guazuapp.com.ar/");
    await page.getByPlaceholder("Usuario o email").click();
    await page.getByPlaceholder("Usuario o email").fill("gustavo18");
    await page.getByPlaceholder("Usuario o email").press("Tab");
    await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await page.getByText("Credenciales invalidas").click();
  });

  test("4 crear orgranizacion con areas", async ({ page }) => {
    await page.goto("https://test2.guazuapp.com.ar/");
    await page.getByPlaceholder("Usuario o email").click();
    await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
    await page.getByPlaceholder("Contraseña").click();
    await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await page.locator("label").filter({ hasText: "Gu" }).locator("span").click();
    await page.getByRole("button", { name: "Organizaciones" }).click();
    await page.getByRole("button", { name: "Agregar una organización" }).click();
    await page.getByLabel("Nombre de la organización").click();
    await page.getByLabel("Nombre de la organización").fill("organizacion100");
    await page.getByRole("button", { name: "Continuar" }).click();
    await page.getByRole("button", { name: "Agregar áreas" }).click();
    await page.locator('#modal_create_entity').getByRole('button', { name: '✕' }).click();
    });

test("5 crear orgranizacion con areas y miembros en la organizacion y en el area", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Contraseña").click();
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.locator("label").filter({ hasText: "Gu" }).locator("span").click();
  await page.getByRole("button", { name: "Organizaciones" }).click();
  await page.getByRole("button", { name: "Agregar una organización" }).click();
  await page.getByLabel("Nombre de la organización").click();
  await page.getByLabel("Nombre de la organización").fill("organizacion100");
  await page.getByRole("button", { name: "Continuar" }).click();
  await page.getByRole("button", { name: "Agregar áreas" }).click();
  await page.locator("#modal_create_entity").getByRole("img").nth(3).click();
  await page.locator("#modal_create_entity").getByPlaceholder("Buscar contacto").click();
  await page.locator("#modal_create_entity").getByPlaceholder("Buscar contacto").fill("mariel");
  await page.getByRole("button", { name: ".m .mariel2211 Cuenta: ." }).click();
  await page.locator("div").filter({ hasText: /^Administrador$/ }).getByRole("checkbox").check();
  await page.locator("div").filter({ hasText: /^Permitir asignar conversaciones de otros miembros$/ }).getByRole("checkbox").check();
  await page.locator("div").filter({hasText: /^Permitir la asignación automática entre conversaciones$/,}).getByRole("checkbox").check();
  await page.locator("div").filter({hasText:/^Crear mensajes de transmisión visible para todos los miembros$/,}).getByRole("checkbox").check();
  await page.getByRole("button", { name: "Agregar miembro" }).click();
  await page.locator("#add_member_organization_confirmation_modal").getByRole("button", { name: "Agregar" }).click();
  await page.locator("#modal_create_entity").getByRole("button", { name: "✕" }).click();
});

test("6 enviar mensaje", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.getByText('Mariel.mariel2211Hola buenas').click();
  await page.locator('.cs-message-input__content-editor').click();
  await page.locator('.cs-message-input__content-editor').fill('Hola buenas tardes esta es una prueba para enviar.');
  await page.locator('div:nth-child(3) > .cs-button').click();  
  await page.pause()
});

test("7 agregar contacto", async ({ page }) => {
  await page.goto("https://test2.guazuapp.com.ar/");
  await page.getByPlaceholder("Usuario o email").click();
  await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
  await page.getByPlaceholder("Usuario o email").press("Tab");
  await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
  await page.getByRole("button", { name: "Iniciar sesión" }).click();
  await page.locator(".drawer-content > .fill-white").click();
  await page.locator(".flex > div:nth-child(2) > button").first().click();
  await page.locator("#search_account_modal").getByPlaceholder("Buscar...").click();
  await page.locator("#search_account_modal").getByPlaceholder("Buscar...").fill("mauro");
  await page.locator("#accordion-collapse-contactlist-heading-01J5X6ZD11A3RKARVK4PHTTDAJ").getByRole("button").nth(1).click();
  await page.locator("#add_member_confirmation_modal").getByRole("button", { name: "Agregar" }).click();
  await page.locator("#search_account_modal").getByRole("button", { name: "✕" }).click();
  await page.pause()
});

test("8 correo incorrecto", async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('facha1805');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@gmail.com');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Registrarse' }).click();
});
test('9 Debe repetir la contraseña', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('facha1805');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@live.com.ar');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mar1');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mar1');
  await page.getByRole('button', { name: 'Registrarse' }).click();
});

test("10 usuario ya creado", async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('gustavo180591');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@gmail.com');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Registrarse' }).click();
});
test("11 registrarse", async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).click();
  await page.getByPlaceholder('Nombre', { exact: true }).fill('Gustavo');
  await page.getByPlaceholder('Nombre', { exact: true }).press('Tab');
  await page.getByPlaceholder('Nombre de usuario').fill('facha1805');
  await page.getByPlaceholder('Nombre de usuario').press('Tab');
  await page.getByPlaceholder('Correo electrónico').fill('gustavo.faccendini@live.com.ar');
  await page.getByPlaceholder('Correo electrónico').press('Tab');
  await page.getByPlaceholder('Contraseña', { exact: true }).fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña', { exact: true }).press('Tab');
  await page.getByRole('button').first().press('Tab');
  await page.getByPlaceholder('Repetir contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Registrarse' }).click();
  await page.pause()
  });
  
  test("12 organizacion nombre unico repetido", async ({ page }) => {
    await page.goto("https://test2.guazuapp.com.ar/");
    await page.getByPlaceholder("Usuario o email").click();
    await page.getByPlaceholder("Usuario o email").fill("gustavo180591");
    await page.getByPlaceholder("Contraseña").click();
    await page.getByPlaceholder("Contraseña").fill("$Mariel1805");
    await page.getByRole("button", { name: "Iniciar sesión" }).click();
    await page.locator("label").filter({ hasText: "Gu" }).locator("span").click();
    await page.getByRole("button", { name: "Organizaciones" }).click();
    await page.getByRole("button", { name: "Agregar una organización" }).click();
    await page.getByLabel('Nombre de la organización').click();
    await page.getByLabel('Nombre de la organización').fill('organizacion180591');
    await page.getByLabel('Nombre único de la').click();
    await page.getByLabel('Nombre único de la').fill('@unico1');
    await page.getByRole("button", { name: "Continuar" }).click();
    await page.locator('#modal_create_entity').getByRole('button', { name: '✕' }).click();
    await page.pause()
    });

test('13 eliminar contacto', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').click();
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Usuario o email').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña').press('Enter');
  await page.locator('.drawer-content > .fill-white').click();
  await page.locator('#accordion-collapse-contactlist-heading-01J5X6ZD11A3RKARVK4PHTTDAJ').getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Confirmar' }).click();
});

test('14 subir archivos', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').click();
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Usuario o email').press('Tab');
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña').press('Enter');
  await page.locator('div').filter({ hasText: /^Mariel$/ }).nth(1).click();
  await page.locator('.cs-button').first().click();
  await page.getByText('Archivo').click();  
  // Selecciona específicamente el input por su id o label
  const fileInput = await page.getByLabel('Archivo'); // o page.locator('#file-input-file')
  await fileInput.setInputFiles('/home/gustavo1805/Desktop/curso/Playwright/package.json');  
  await page.locator('.cs-button').first().click();
  await page.pause();
});

test('15 subir imagen', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña').press('Enter');  
  await page.getByText('Mariel', { exact: true }).click();
  await page.locator('.cs-button').first().click();
  await page.getByText('Galería').click();    
  // Espera a que el input esté presente y visible
  const fileInput = await page.locator('input[type="file"]').first();
  await fileInput.setInputFiles('/home/gustavo1805/Desktop/curso/Playwright/img.jpeg');
  await page.pause(); 
  await page.locator('.cs-button').first().click();
  await page.pause(); // Pausa para depurar si es necesario
});

test('16 subir imagen', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByPlaceholder('Contraseña').press('Enter');
  await page.getByText('Mariel', { exact: true }).click();
  await page.locator('.cs-button').first().click();
  await page.getByText('Galería').click();    
  // Espera a que el input esté presente y visible
  const fileInput = await page.locator('input[type="file"]').first();
  await fileInput.setInputFiles('/home/gustavo1805/Desktop/curso/Playwright/img.jpeg');   
  await page.locator('.cs-button').first().click();
  await page.pause(); // Pausa para depurar si es necesario
});

test('17...', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').click();
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByText('Mariel', { exact: true }).click();
  await page.locator('.cs-button').first().click();
  await page.getByText('Galería').click();
 // Si estás subiendo una imagen, selecciona el input específico para imágenes
await page.locator('input#file-input-image').setInputFiles('img.jpeg');
// Alternativamente, si subes un PDF, selecciona el input para archivos
// await page.locator('input#file-input-file').setInputFiles('document.pdf');
  await page.locator('.cs-button').first().click();
  await page.pause();
});

test('18...', async ({ page }) => {
  await page.goto('https://test2.guazuapp.com.ar/');
  await page.getByPlaceholder('Usuario o email').click();
  await page.getByPlaceholder('Usuario o email').fill('gustavo180591');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('$Mariel1805');
  await page.getByRole('button', { name: 'Iniciar sesión' }).click();
  await page.getByText('.mariel2211').nth(2).click();
  await page.locator('.cs-button').first().click();
  await page.getByText('Galería').click();
  await page.getByText('GaleríaArchivo').setInputFiles('img.jpeg');
  await page.locator('.cs-message-input__content-editor').first().click();
  await page.locator('.cs-message-input__content-editor').first().fill('Enviando archivo 2');
  await page.locator('.cs-button').first().click();
});

/* 1 login con correo v
2 login con usuario v
3 credencial invalida v
4 crear orgranizacion con areas v
5 crear orgranizacion con areas y miembros en la organizacion y en el area v
6 enviar mensaje v
7 agregar contacto v
8 correo incorrecto v
9 contraseña con pocos caracteres v
10 usuario ya creado v
11 registrarse v
12 organizacion nombre unico repetido v 
13 eliminar contacto v
14 subir archivos v
15 subir imagen v
*/
